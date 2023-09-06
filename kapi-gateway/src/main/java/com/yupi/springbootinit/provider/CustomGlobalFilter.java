package com.yupi.springbootinit.provider;

/**
 * CustomGlobalFilter
 *
 * @author ZhengKai
 * @date 2023/8/14
 */

import cn.hutool.core.date.DateUtil;
import com.yupi.kapicommon.model.entity.InterfaceInfo;
import com.yupi.kapicommon.model.entity.User;
import com.yupi.kapicommon.service.InnerInterfaceInfoService;
import com.yupi.kapicommon.service.InnerUserInterfaceInfoService;
import com.zk.kapiclientsdk.utils.SignUtils;
import javafx.util.Callback;
import lombok.extern.slf4j.Slf4j;
import org.apache.dubbo.config.annotation.DubboReference;
import org.reactivestreams.Publisher;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.core.io.buffer.DataBufferFactory;
import org.springframework.core.io.buffer.DataBufferUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.http.server.reactive.ServerHttpResponseDecorator;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import com.yupi.kapicommon.service.InnerUserService;

/**
 * 全局过滤
 */
@Slf4j
@Component
public class CustomGlobalFilter implements GlobalFilter, Ordered {

    @DubboReference
    InnerUserService innerUserService;

    @DubboReference
    InnerInterfaceInfoService innerInterfaceInfoService;

    @DubboReference
    InnerUserInterfaceInfoService innerUserInterfaceInfoService;

    private static final List<String> IP_WHITE_LIST = Arrays.asList("127.0.0.1");
    private static final String INTERFACE_HOST = "http://localhost:8123";
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        //1. 请求发送到网关
        //2. 请求日志
        ServerHttpRequest request = exchange.getRequest();
        String path = INTERFACE_HOST + request.getPath().value();
        String method = request.getMethod().toString();
        log.info("请求唯一标识：" + request.getId());
        log.info("请求路径：" + path);
        log.info("请求方法：" + method);
        log.info("请求参数：" + request.getQueryParams());
        String resourceAddress = request.getLocalAddress().getHostString();
        log.info("请求来源地址：" + resourceAddress);
        //3. 黑白名单
        ServerHttpResponse response = exchange.getResponse();
        if (!IP_WHITE_LIST.contains(resourceAddress)) {
            return handleNoAuth(response);
        }
        //4. 判断ak，sk是否有效（统一鉴权）
        HttpHeaders headers = exchange.getRequest().getHeaders();
        String accessKey = headers.getFirst("accessKey");
        String nonce = headers.getFirst("nonce");
        String body = headers.getFirst("body");
        String timestamp = headers.getFirst("timestamp");
        String sign = headers.getFirst("sign");
        // TODO 实际情况应该去数据库中查是否已分配给用户
        // select accessKey, secretKey from user where accessKey = "accessKey"
        User invokeUser = null;
        try {
            invokeUser = innerUserService.getInvokeUser(accessKey);
        } catch (Exception e) {
            log.error("get InvokeUser error", e);
        }
        if (invokeUser == null) {
            return handleNoAuth(response);
        }
//        if (!"zkapi".equals(accessKey)) {
//            return handleNoAuth(response);
//        }
        if (Long.parseLong(nonce) > 100000L) {
            return handleNoAuth(response);
        }
        // TODO 时间与当前时间不超过5分钟
        long currentTimeStamp = System.currentTimeMillis() / 1000;
        final long FIVE_MINUTES = 60 * 5L;
        if ((currentTimeStamp - Long.parseLong(timestamp)) >= FIVE_MINUTES) {
            return handleNoAuth(response);
        }
        //  实际情况 在前面查询是否分配给用户的时候就把secretKey也获取到了
        String secretKey = invokeUser.getSecretKey();
        String serverSign = SignUtils.genSign(body, secretKey);
        if (sign == null || !serverSign.equals(sign)) {
            return handleNoAuth(response);
        }
        //5. 判断接口是否存在
        // TODO 从数据库中查询模拟接口 判断是否存在
        InterfaceInfo interfaceInfo = null;
        try {
            interfaceInfo = innerInterfaceInfoService.getInterfaceInfo(path, method);
        } catch (Exception e) {
            log.error("get getInterfaceInfo error", e);
        }
        if (interfaceInfo == null) {
            return handleNoAuth(response);
        }
        //6. 请求转发，调用模拟接口 响应日志
//        Mono<Void> filter = chain.filter(exchange);
        return handleResponse(exchange, chain, interfaceInfo.getId(), invokeUser.getId());

    }

    /**
     * 此方法为调用接口后的响应日志处理
     * @param exchange
     * @param chain
     * @return
     */
    public Mono<Void> handleResponse(ServerWebExchange exchange, GatewayFilterChain chain, long interfaceInfoId, long userId) {
        try {
            ServerHttpResponse originalResponse = exchange.getResponse();
            DataBufferFactory bufferFactory = originalResponse.bufferFactory();

            HttpStatus statusCode = originalResponse.getStatusCode();

            if(statusCode == HttpStatus.OK){
                ServerHttpResponseDecorator decoratedResponse = new ServerHttpResponseDecorator(originalResponse) {

                    @Override
                    public Mono<Void> writeWith(Publisher<? extends DataBuffer> body) {
                        //log.info("body instanceof Flux: {}", (body instanceof Flux));
                        if (body instanceof Flux) {
                            Flux<? extends DataBuffer> fluxBody = Flux.from(body);
                            //
                            return super.writeWith(fluxBody.map(dataBuffer -> {
                                //8. TODO 调用成功，调用次数 +1 invokeCount方法
                                try {
                                    innerUserInterfaceInfoService.invokeCount(interfaceInfoId, userId);
                                } catch (Exception e){
                                    log.error("invokeCount error", e);
                                }
                                byte[] content = new byte[dataBuffer.readableByteCount()];
                                dataBuffer.read(content);
                                DataBufferUtils.release(dataBuffer);//释放掉内存
                                // 构建日志
                                String data = new String(content, StandardCharsets.UTF_8);//data
                                log.info("时间：{}, 响应接口:{}", DateUtil.now(), data);
                                return bufferFactory.wrap(content);
                            }));
                        } else {
                            //9. 调用失败，返回一个规范的错误码
                            log.error("<--- {} 响应code异常", getStatusCode());
                        }
                        return super.writeWith(body);
                    }
                };
                return chain.filter(exchange.mutate().response(decoratedResponse).build());
            }
            return chain.filter(exchange);//降级处理返回数据
        }catch (Exception e){
            log.error("gateway log exception.\n" + e);
            return chain.filter(exchange);
        }
    }

    private Mono<Void> handleNoAuth(ServerHttpResponse response) {
        response.setStatusCode(HttpStatus.FORBIDDEN);
        return response.setComplete();
    }
    private Mono<Void> handInvokeError(ServerHttpResponse response) {
        response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR);
        return response.setComplete();
    }

    @Override
    public int getOrder() {
        return -1;
    }
}

