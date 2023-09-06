package com.yupi.springbootinit.provider;

import org.apache.dubbo.config.spring.context.annotation.EnableDubbo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;

@SpringBootApplication(exclude = {
        DataSourceAutoConfiguration.class,
        DataSourceTransactionManagerAutoConfiguration.class,
        HibernateJpaAutoConfiguration.class})
@EnableDubbo
public class KapiGatewayApplication {

    public static void main(String[] args) {
        SpringApplication.run(KapiGatewayApplication.class, args);
    }


//    @SpringBootApplication
//    public class DemogatewayApplication {
//        @Bean
//        public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
//            return builder.routes()
//                    .route("tobaidu", r -> r.path("/tobaidu")
//                            .uri("http://baidu.com"))
//                    .route("tok", r -> r.path("/tobing")
//                            .uri("http://bing.com"))
//                    .build();
//        }
//    }
}
