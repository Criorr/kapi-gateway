"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[737],{80737:function(zt,Ue,c){c.d(Ue,{Z:function(){return kt}});var W=c(65223),T=c(4942),y=c(87462),Q=c(74902),Ye=c(94184),ae=c.n(Ye),Ie=c(31320),n=c(67294),me=c(53124),Se=c(33603),G=c(97685);function ve(e){var t=n.useState(e),a=(0,G.Z)(t,2),r=a[0],l=a[1];return n.useEffect(function(){var o=setTimeout(function(){l(e)},e.length?0:10);return function(){clearTimeout(o)}},[e]),r}var Ne=[];function be(e,t,a){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:"".concat(a,"-").concat(r),error:e,errorStatus:t}}function Re(e){var t=e.help,a=e.helpStatus,r=e.errors,l=r===void 0?Ne:r,o=e.warnings,s=o===void 0?Ne:o,i=e.className,m=e.fieldId,f=e.onVisibleChanged,Z=n.useContext(W.Rk),h=Z.prefixCls,I=n.useContext(me.E_),b=I.getPrefixCls,C="".concat(h,"-item-explain"),E=b(),V=ve(l),g=ve(s),N=n.useMemo(function(){return t!=null?[be(t,a,"help")]:[].concat((0,Q.Z)(V.map(function(F,x){return be(F,"error","error",x)})),(0,Q.Z)(g.map(function(F,x){return be(F,"warning","warning",x)})))},[t,a,V,g]),R={};return m&&(R.id="".concat(m,"_help")),n.createElement(Ie.ZP,{motionDeadline:Se.ZP.motionDeadline,motionName:"".concat(E,"-show-help"),visible:!!N.length,onVisibleChanged:f},function(F){var x=F.className,P=F.style;return n.createElement("div",(0,y.Z)({},R,{className:ae()(C,x,i),style:P,role:"alert"}),n.createElement(Ie.V4,(0,y.Z)({keys:N},Se.ZP,{motionName:"".concat(E,"-show-help-item"),component:!1}),function(p){var S=p.key,w=p.error,d=p.errorStatus,L=p.className,$=p.style;return n.createElement("div",{key:S,className:ae()(L,(0,T.Z)({},"".concat(C,"-").concat(d),d)),style:$},w)}))})}var ge=c(71002),se=c(33862),pe=c(98866),we=c(97647),Qe=c(37920);function Me(e){return typeof e=="object"&&e!=null&&e.nodeType===1}function Oe(e,t){return(!t||e!=="hidden")&&e!=="visible"&&e!=="clip"}function ye(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var a=getComputedStyle(e,null);return Oe(a.overflowY,t)||Oe(a.overflowX,t)||function(r){var l=function(o){if(!o.ownerDocument||!o.ownerDocument.defaultView)return null;try{return o.ownerDocument.defaultView.frameElement}catch(s){return null}}(r);return!!l&&(l.clientHeight<r.scrollHeight||l.clientWidth<r.scrollWidth)}(e)}return!1}function he(e,t,a,r,l,o,s,i){return o<e&&s>t||o>e&&s<t?0:o<=e&&i<=a||s>=t&&i>=a?o-e-r:s>t&&i<a||o<e&&i>a?s-t+l:0}var Pe=function(e,t){var a=window,r=t.scrollMode,l=t.block,o=t.inline,s=t.boundary,i=t.skipOverflowHiddenElements,m=typeof s=="function"?s:function(ie){return ie!==s};if(!Me(e))throw new TypeError("Invalid target");for(var f,Z,h=document.scrollingElement||document.documentElement,I=[],b=e;Me(b)&&m(b);){if((b=(Z=(f=b).parentElement)==null?f.getRootNode().host||null:Z)===h){I.push(b);break}b!=null&&b===document.body&&ye(b)&&!ye(document.documentElement)||b!=null&&ye(b,i)&&I.push(b)}for(var C=a.visualViewport?a.visualViewport.width:innerWidth,E=a.visualViewport?a.visualViewport.height:innerHeight,V=window.scrollX||pageXOffset,g=window.scrollY||pageYOffset,N=e.getBoundingClientRect(),R=N.height,F=N.width,x=N.top,P=N.right,p=N.bottom,S=N.left,w=l==="start"||l==="nearest"?x:l==="end"?p:x+R/2,d=o==="center"?S+F/2:o==="end"?P:S,L=[],$=0;$<I.length;$++){var u=I[$],v=u.getBoundingClientRect(),Y=v.height,H=v.width,j=v.top,M=v.right,ue=v.bottom,le=v.left;if(r==="if-needed"&&x>=0&&S>=0&&p<=E&&P<=C&&x>=j&&p<=ue&&S>=le&&P<=M)return L;var oe=getComputedStyle(u),D=parseInt(oe.borderLeftWidth,10),J=parseInt(oe.borderTopWidth,10),X=parseInt(oe.borderRightWidth,10),re=parseInt(oe.borderBottomWidth,10),_=0,q=0,K="offsetWidth"in u?u.offsetWidth-u.clientWidth-D-X:0,A="offsetHeight"in u?u.offsetHeight-u.clientHeight-J-re:0,O="offsetWidth"in u?u.offsetWidth===0?0:H/u.offsetWidth:0,k="offsetHeight"in u?u.offsetHeight===0?0:Y/u.offsetHeight:0;if(h===u)_=l==="start"?w:l==="end"?w-E:l==="nearest"?he(g,g+E,E,J,re,g+w,g+w+R,R):w-E/2,q=o==="start"?d:o==="center"?d-C/2:o==="end"?d-C:he(V,V+C,C,D,X,V+d,V+d+F,F),_=Math.max(0,_+g),q=Math.max(0,q+V);else{_=l==="start"?w-j-J:l==="end"?w-ue+re+A:l==="nearest"?he(j,ue,Y,J,re+A,w,w+R,R):w-(j+Y/2)+A/2,q=o==="start"?d-le-D:o==="center"?d-(le+H/2)+K/2:o==="end"?d-M+X+K:he(le,M,H,D,X+K,d,d+F,F);var U=u.scrollLeft,z=u.scrollTop;w+=z-(_=Math.max(0,Math.min(z+_/k,u.scrollHeight-Y/k+A))),d+=U-(q=Math.max(0,Math.min(U+q/O,u.scrollWidth-H/O+K)))}L.push({el:u,top:_,left:q})}return L};function Ve(e){return e===Object(e)&&Object.keys(e).length!==0}function Xe(e,t){t===void 0&&(t="auto");var a="scrollBehavior"in document.body.style;e.forEach(function(r){var l=r.el,o=r.top,s=r.left;l.scroll&&a?l.scroll({top:o,left:s,behavior:t}):(l.scrollTop=o,l.scrollLeft=s)})}function Be(e){return e===!1?{block:"end",inline:"nearest"}:Ve(e)?e:{block:"start",inline:"nearest"}}function Ge(e,t){var a=e.isConnected||e.ownerDocument.documentElement.contains(e);if(Ve(t)&&typeof t.behavior=="function")return t.behavior(a?Pe(e,t):[]);if(a){var r=Be(t);return Xe(Pe(e,r),r.behavior)}}var Je=Ge,_e=["parentNode"],et="form_item";function fe(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Le(e,t){if(e.length){var a=e.join("_");if(t)return"".concat(t,"_").concat(a);var r=_e.includes(a);return r?"".concat(et,"_").concat(a):a}}function Te(e){var t=fe(e);return t.join("_")}function je(e){var t=(0,se.cI)(),a=(0,G.Z)(t,1),r=a[0],l=n.useRef({}),o=n.useMemo(function(){return e!=null?e:(0,y.Z)((0,y.Z)({},r),{__INTERNAL__:{itemRef:function(i){return function(m){var f=Te(i);m?l.current[f]=m:delete l.current[f]}}},scrollToField:function(i){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},f=fe(i),Z=Le(f,o.__INTERNAL__.name),h=Z?document.getElementById(Z):null;h&&Je(h,(0,y.Z)({scrollMode:"if-needed",block:"nearest"},m))},getFieldInstance:function(i){var m=Te(i);return l.current[m]}})},[e,r]);return[o]}var tt=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a},rt=function(t,a){var r,l=n.useContext(we.Z),o=n.useContext(pe.Z),s=n.useContext(me.E_),i=s.getPrefixCls,m=s.direction,f=s.form,Z=t.prefixCls,h=t.className,I=h===void 0?"":h,b=t.size,C=b===void 0?l:b,E=t.disabled,V=E===void 0?o:E,g=t.form,N=t.colon,R=t.labelAlign,F=t.labelWrap,x=t.labelCol,P=t.wrapperCol,p=t.hideRequiredMark,S=t.layout,w=S===void 0?"horizontal":S,d=t.scrollToFirstError,L=t.requiredMark,$=t.onFinishFailed,u=t.name,v=tt(t,["prefixCls","className","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name"]),Y=n.useContext(Qe.Z),H=(0,n.useMemo)(function(){return L!==void 0?L:f&&f.requiredMark!==void 0?f.requiredMark:!p},[p,L,f]),j=N!=null?N:f==null?void 0:f.colon,M=i("form",Z),ue=ae()(M,(r={},(0,T.Z)(r,"".concat(M,"-").concat(w),!0),(0,T.Z)(r,"".concat(M,"-hide-required-mark"),H===!1),(0,T.Z)(r,"".concat(M,"-rtl"),m==="rtl"),(0,T.Z)(r,"".concat(M,"-").concat(C),C),r),I),le=je(g),oe=(0,G.Z)(le,1),D=oe[0],J=D.__INTERNAL__;J.name=u;var X=(0,n.useMemo)(function(){return{name:u,labelAlign:R,labelCol:x,labelWrap:F,wrapperCol:P,vertical:w==="vertical",colon:j,requiredMark:H,itemRef:J.itemRef,form:D}},[u,R,x,P,w,j,H,D]);n.useImperativeHandle(a,function(){return D});var re=function(q){$==null||$(q);var K={block:"nearest"};d&&q.errorFields.length&&((0,ge.Z)(d)==="object"&&(K=d),D.scrollToField(q.errorFields[0].name,K))};return n.createElement(pe.n,{disabled:V},n.createElement(we.q,{size:C},n.createElement(W.RV,(0,y.Z)({},{validateMessages:Y}),n.createElement(W.q3.Provider,{value:X},n.createElement(se.ZP,(0,y.Z)({id:u},v,{name:u,onFinishFailed:re,form:D,className:ue}))))))},nt=n.forwardRef(rt),at=nt,lt=c(30470),We=c(42550),ot=function(){var t=(0,n.useContext)(W.aM),a=t.status;return{status:a}},it=ot,$e=c(96159),st=c(93355),Ae=c(75164);function ut(e){var t=n.useState(e),a=(0,G.Z)(t,2),r=a[0],l=a[1],o=(0,n.useRef)(null),s=(0,n.useRef)([]),i=(0,n.useRef)(!1);n.useEffect(function(){return i.current=!1,function(){i.current=!0,Ae.Z.cancel(o.current),o.current=null}},[]);function m(f){i.current||(o.current===null&&(s.current=[],o.current=(0,Ae.Z)(function(){o.current=null,l(function(Z){var h=Z;return s.current.forEach(function(I){h=I(h)}),h})})),s.current.push(f))}return[r,m]}function ct(){var e=n.useContext(W.q3),t=e.itemRef,a=n.useRef({});function r(l,o){var s=o&&(0,ge.Z)(o)==="object"&&o.ref,i=l.join("_");return(a.current.name!==i||a.current.originRef!==s)&&(a.current.name=i,a.current.originRef=s,a.current.ref=(0,We.sQ)(t(l),s)),a.current.ref}return r}var ft=c(89739),dt=c(4340),mt=c(21640),vt=c(50888),gt=c(8410),ht=c(98423),Ct=c(92820),bt=c(25035),ke=c(21584),yt=c(23715),xt=c(80779),Zt=c(58191),Et=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a};function Ft(e){return e?(0,ge.Z)(e)==="object"&&!n.isValidElement(e)?e:{title:e}:null}var It=function(t){var a=t.prefixCls,r=t.label,l=t.htmlFor,o=t.labelCol,s=t.labelAlign,i=t.colon,m=t.required,f=t.requiredMark,Z=t.tooltip,h=(0,yt.E)("Form"),I=(0,G.Z)(h,1),b=I[0];return r?n.createElement(W.q3.Consumer,{key:"label"},function(C){var E,V=C.vertical,g=C.labelAlign,N=C.labelCol,R=C.labelWrap,F=C.colon,x,P=o||N||{},p=s||g,S="".concat(a,"-item-label"),w=ae()(S,p==="left"&&"".concat(S,"-left"),P.className,(0,T.Z)({},"".concat(S,"-wrap"),!!R)),d=r,L=i===!0||F!==!1&&i!==!1,$=L&&!V;$&&typeof r=="string"&&r.trim()!==""&&(d=r.replace(/[:|：]\s*$/,""));var u=Ft(Z);if(u){var v=u.icon,Y=v===void 0?n.createElement(bt.Z,null):v,H=Et(u,["icon"]),j=n.createElement(Zt.Z,(0,y.Z)({},H),n.cloneElement(Y,{className:"".concat(a,"-item-tooltip"),title:""}));d=n.createElement(n.Fragment,null,d,j)}f==="optional"&&!m&&(d=n.createElement(n.Fragment,null,d,n.createElement("span",{className:"".concat(a,"-item-optional"),title:""},(b==null?void 0:b.optional)||((x=xt.Z.Form)===null||x===void 0?void 0:x.optional))));var M=ae()((E={},(0,T.Z)(E,"".concat(a,"-item-required"),m),(0,T.Z)(E,"".concat(a,"-item-required-mark-optional"),f==="optional"),(0,T.Z)(E,"".concat(a,"-item-no-colon"),!L),E));return n.createElement(ke.Z,(0,y.Z)({},P,{className:w}),n.createElement("label",{htmlFor:l,className:M,title:typeof r=="string"?r:""},d))}):null},St=It,Nt=function(t){var a=t.prefixCls,r=t.status,l=t.wrapperCol,o=t.children,s=t.errors,i=t.warnings,m=t._internalItemRender,f=t.extra,Z=t.help,h=t.fieldId,I=t.marginBottom,b=t.onErrorVisibleChanged,C="".concat(a,"-item"),E=n.useContext(W.q3),V=l||E.wrapperCol||{},g=ae()("".concat(C,"-control"),V.className),N=n.useMemo(function(){return(0,y.Z)({},E)},[E]);delete N.labelCol,delete N.wrapperCol;var R=n.createElement("div",{className:"".concat(C,"-control-input")},n.createElement("div",{className:"".concat(C,"-control-input-content")},o)),F=n.useMemo(function(){return{prefixCls:a,status:r}},[a,r]),x=I!==null||s.length||i.length?n.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},n.createElement(W.Rk.Provider,{value:F},n.createElement(Re,{fieldId:h,errors:s,warnings:i,help:Z,helpStatus:r,className:"".concat(C,"-explain-connected"),onVisibleChanged:b})),!!I&&n.createElement("div",{style:{width:0,height:I}})):null,P={};h&&(P.id="".concat(h,"_extra"));var p=f?n.createElement("div",(0,y.Z)({},P,{className:"".concat(C,"-extra")}),f):null,S=m&&m.mark==="pro_table_render"&&m.render?m.render(t,{input:R,errorList:x,extra:p}):n.createElement(n.Fragment,null,R,x,p);return n.createElement(W.q3.Provider,{value:N},n.createElement(ke.Z,(0,y.Z)({},V,{className:g}),S))},Rt=Nt,pt=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a},wt={success:ft.Z,warning:mt.Z,error:dt.Z,validating:vt.Z};function Mt(e){var t,a=e.prefixCls,r=e.className,l=e.style,o=e.help,s=e.errors,i=e.warnings,m=e.validateStatus,f=e.meta,Z=e.hasFeedback,h=e.hidden,I=e.children,b=e.fieldId,C=e.isRequired,E=e.onSubItemMetaChange,V=pt(e,["prefixCls","className","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","isRequired","onSubItemMetaChange"]),g="".concat(a,"-item"),N=n.useContext(W.q3),R=N.requiredMark,F=n.useRef(null),x=ve(s),P=ve(i),p=o!=null,S=!!(p||s.length||i.length),w=n.useState(null),d=(0,G.Z)(w,2),L=d[0],$=d[1];(0,gt.Z)(function(){if(S&&F.current){var j=getComputedStyle(F.current);$(parseInt(j.marginBottom,10))}},[S]);var u=function(M){M||$(null)},v="";m!==void 0?v=m:f.validating?v="validating":x.length?v="error":P.length?v="warning":f.touched&&(v="success");var Y=n.useMemo(function(){var j;if(Z){var M=v&&wt[v];j=M?n.createElement("span",{className:ae()("".concat(g,"-feedback-icon"),"".concat(g,"-feedback-icon-").concat(v))},n.createElement(M,null)):null}return{status:v,hasFeedback:Z,feedbackIcon:j,isFormItemInput:!0}},[v,Z]),H=(t={},(0,T.Z)(t,g,!0),(0,T.Z)(t,"".concat(g,"-with-help"),p||x.length||P.length),(0,T.Z)(t,"".concat(r),!!r),(0,T.Z)(t,"".concat(g,"-has-feedback"),v&&Z),(0,T.Z)(t,"".concat(g,"-has-success"),v==="success"),(0,T.Z)(t,"".concat(g,"-has-warning"),v==="warning"),(0,T.Z)(t,"".concat(g,"-has-error"),v==="error"),(0,T.Z)(t,"".concat(g,"-is-validating"),v==="validating"),(0,T.Z)(t,"".concat(g,"-hidden"),h),t);return n.createElement("div",{className:ae()(H),style:l,ref:F},n.createElement(Ct.Z,(0,y.Z)({className:"".concat(g,"-row")},(0,ht.Z)(V,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","required","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol"])),n.createElement(St,(0,y.Z)({htmlFor:b,required:C,requiredMark:R},e,{prefixCls:a})),n.createElement(Rt,(0,y.Z)({},e,f,{errors:x,warnings:P,prefixCls:a,status:v,help:o,marginBottom:L,onErrorVisibleChanged:u}),n.createElement(W.qI.Provider,{value:E},n.createElement(W.aM.Provider,{value:Y},I)))),!!L&&n.createElement("div",{className:"".concat(g,"-margin-offset"),style:{marginBottom:-L}}))}var Ot="__SPLIT__",Dt=(0,st.b)("success","warning","error","validating",""),Pt=n.memo(function(e){var t=e.children;return t},function(e,t){return e.value===t.value&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every(function(a,r){return a===t.childProps[r]})});function Vt(e){return e!=null}function He(){return{errors:[],warnings:[],touched:!1,validating:!1,validated:!1,name:[]}}function Lt(e){var t=e.name,a=e.noStyle,r=e.dependencies,l=e.prefixCls,o=e.shouldUpdate,s=e.rules,i=e.children,m=e.required,f=e.label,Z=e.messageVariables,h=e.trigger,I=h===void 0?"onChange":h,b=e.validateTrigger,C=e.hidden,E=(0,n.useContext)(me.E_),V=E.getPrefixCls,g=(0,n.useContext)(W.q3),N=g.name,R=typeof i=="function",F=(0,n.useContext)(W.qI),x=(0,n.useContext)(se.zb),P=x.validateTrigger,p=b!==void 0?b:P,S=Vt(t),w=V("form",l),d=n.useContext(se.ZM),L=n.useRef(),$=ut({}),u=(0,G.Z)($,2),v=u[0],Y=u[1],H=(0,lt.Z)(function(){return He()}),j=(0,G.Z)(H,2),M=j[0],ue=j[1],le=function(O){var k=d==null?void 0:d.getKey(O.name);if(ue(O.destroy?He():O,!0),a&&F){var U=O.name;if(O.destroy)U=L.current||U;else if(k!==void 0){var z=(0,G.Z)(k,2),ie=z[0],ne=z[1];U=[ie].concat((0,Q.Z)(ne)),L.current=U}F(O,U)}},oe=function(O,k){Y(function(U){var z=(0,y.Z)({},U),ie=[].concat((0,Q.Z)(O.name.slice(0,-1)),(0,Q.Z)(k)),ne=ie.join(Ot);return O.destroy?delete z[ne]:z[ne]=O,z})},D=n.useMemo(function(){var A=(0,Q.Z)(M.errors),O=(0,Q.Z)(M.warnings);return Object.values(v).forEach(function(k){A.push.apply(A,(0,Q.Z)(k.errors||[])),O.push.apply(O,(0,Q.Z)(k.warnings||[]))}),[A,O]},[v,M.errors,M.warnings]),J=(0,G.Z)(D,2),X=J[0],re=J[1],_=ct();function q(A,O,k){return a&&!C?A:n.createElement(Mt,(0,y.Z)({key:"row"},e,{prefixCls:w,fieldId:O,isRequired:k,errors:X,warnings:re,meta:M,onSubItemMetaChange:oe}),A)}if(!S&&!R&&!r)return q(i);var K={};return typeof f=="string"?K.label=f:t&&(K.label=String(t)),Z&&(K=(0,y.Z)((0,y.Z)({},K),Z)),n.createElement(se.gN,(0,y.Z)({},e,{messageVariables:K,trigger:I,validateTrigger:p,onMetaChange:le}),function(A,O,k){var U=fe(t).length&&O?O.name:[],z=Le(U,N),ie=m!==void 0?m:!!(s&&s.some(function(ee){if(ee&&(0,ge.Z)(ee)==="object"&&ee.required&&!ee.warningOnly)return!0;if(typeof ee=="function"){var ce=ee(k);return ce&&ce.required&&!ce.warningOnly}return!1})),ne=(0,y.Z)({},A),de=null;if(Array.isArray(i)&&S)de=i;else if(!(R&&(!(o||r)||S))){if(!(r&&!R&&!S))if((0,$e.l$)(i)){var B=(0,y.Z)((0,y.Z)({},i.props),ne);if(B.id||(B.id=z),e.help||X.length>0||re.length>0||e.extra){var xe=[];(e.help||X.length>0)&&xe.push("".concat(z,"_help")),e.extra&&xe.push("".concat(z,"_extra")),B["aria-describedby"]=xe.join(" ")}X.length>0&&(B["aria-invalid"]="true"),ie&&(B["aria-required"]="true"),(0,We.Yr)(i)&&(B.ref=_(U,i));var Ht=new Set([].concat((0,Q.Z)(fe(I)),(0,Q.Z)(fe(p))));Ht.forEach(function(ee){B[ee]=function(){for(var ce,ze,Ze,De,Ee,Ke=arguments.length,Fe=new Array(Ke),Ce=0;Ce<Ke;Ce++)Fe[Ce]=arguments[Ce];(Ze=ne[ee])===null||Ze===void 0||(ce=Ze).call.apply(ce,[ne].concat(Fe)),(Ee=(De=i.props)[ee])===null||Ee===void 0||(ze=Ee).call.apply(ze,[De].concat(Fe))}});var qt=[B["aria-required"],B["aria-invalid"],B["aria-describedby"]];de=n.createElement(Pt,{value:ne[e.valuePropName||"value"],update:i,childProps:qt},(0,$e.Tm)(i,B))}else R&&(o||r)&&!S?de=i(k):de=i}return q(de,z,ie)})}var qe=Lt;qe.useStatus=it;var Tt=qe,jt=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]]);return a},Wt=function(t){var a=t.prefixCls,r=t.children,l=jt(t,["prefixCls","children"]),o=n.useContext(me.E_),s=o.getPrefixCls,i=s("form",a),m=n.useMemo(function(){return{prefixCls:i,status:"error"}},[i]);return n.createElement(se.aV,(0,y.Z)({},l),function(f,Z,h){return n.createElement(W.Rk.Provider,{value:m},r(f.map(function(I){return(0,y.Z)((0,y.Z)({},I),{fieldKey:I.key})}),Z,{errors:h.errors,warnings:h.warnings}))})},$t=Wt;function At(){var e=(0,n.useContext)(W.q3),t=e.form;return t}var te=at;te.Item=Tt,te.List=$t,te.ErrorList=Re,te.useForm=je,te.useFormInstance=At,te.useWatch=se.qo,te.Provider=W.RV,te.create=function(){};var kt=te}}]);