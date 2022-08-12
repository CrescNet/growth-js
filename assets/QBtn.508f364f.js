import{c,a6 as ee,v as me,h as g,D as te,g as K,d as he,S as z,V as be,W as ye,J as ne,$ as pe,Q as ae,r as Q,j as ke,R as xe,K as w,q as qe}from"./index.3d06af11.js";const N={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function ie(e,t=N){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const V=e=>ee(me(e)),$e=e=>ee(e);function Se(e,t){return e!==void 0&&e()||t}function Ze(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function j(e,t){return e!==void 0?t.concat(e()):t}function et(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function tt(e,t,n,u,l,s){t.key=u+l;const o=g(e,t,n);return l===!0?te(o,s()):o}const D="0 0 24 24",F=e=>e,O=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":F,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":O,"ion-ios":O,"ion-logo":O,"iconfont ":F,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},le={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ee=new RegExp("^("+Object.keys(ue).join("|")+")"),Re=new RegExp("^("+Object.keys(le).join("|")+")"),H=new RegExp("^("+Object.keys(oe).join("|")+")"),we=/^[Mm]\s?[-+]?\.?\d/,Be=/^img:/,Le=/^svguse:/,_e=/^ion-/,Ce=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var U=V({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=K(),u=ie(e),l=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),s=c(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const v=n.iconMapFn(a);if(v!==void 0)if(v.icon!==void 0){if(a=v.icon,a==="none"||!a)return{none:!0}}else return{cls:v.cls,content:v.content!==void 0?v.content:" "}}if(we.test(a)===!0){const[v,y=D]=a.split("|");return{svg:!0,viewBox:y,nodes:v.split("&&").map(p=>{const[r,k,b]=p.split("@@");return g("path",{style:k,d:r,transform:b})})}}if(Be.test(a)===!0)return{img:!0,src:a.substring(4)};if(Le.test(a)===!0){const[v,y=D]=a.split("|");return{svguse:!0,src:v.substring(7),viewBox:y}}let h=" ";const $=a.match(Ee);if($!==null)o=ue[$[1]](a);else if(Ce.test(a)===!0)o=a;else if(_e.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(H.test(a)===!0){o="notranslate material-symbols";const v=a.match(H);v!==null&&(a=a.substring(6),o+=oe[v[1]]),h=a}else{o="notranslate material-icons";const v=a.match(Re);v!==null&&(a=a.substring(2),o+=le[v[1]]),h=a}return{cls:o,content:h}});return()=>{const o={class:l.value,style:u.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?g(e.tag,o,Se(t.default)):s.value.img===!0?g("span",o,j(t.default,[g("img",{src:s.value.src})])):s.value.svg===!0?g("span",o,j(t.default,[g("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?g("span",o,j(t.default,[g("svg",{viewBox:s.value.viewBox},[g("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),g(e.tag,o,j(t.default,[s.value.content])))}}});function Pe(e,t){const n=e.style;for(const u in t)n[u]=t[u]}function nt(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=he(e)===!0?e.value:e;if(t)return t.$el||t}function at(e,t){if(e==null||e.contains(t)===!0)return!0;for(let n=e.nextElementSibling;n!==null;n=n.nextElementSibling)if(n.contains(t))return!0;return!1}const Te={size:{type:[Number,String],default:"1em"},color:String};function je(e){return{cSize:c(()=>e.size in N?`${N[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Ae=V({name:"QSpinner",props:{...Te,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=je(e);return()=>g("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Me(e,t=250){let n=!1,u;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),u=e.apply(this,arguments)),u}}function W(e,t,n,u){n.modifiers.stop===!0&&ne(e);const l=n.modifiers.color;let s=n.modifiers.center;s=s===!0||u===!0;const o=document.createElement("span"),a=document.createElement("span"),h=pe(e),{left:$,top:v,width:y,height:p}=t.getBoundingClientRect(),r=Math.sqrt(y*y+p*p),k=r/2,b=`${(y-r)/2}px`,d=s?b:`${h.left-$-k}px`,f=`${(p-r)/2}px`,x=s?f:`${h.top-v-k}px`;a.className="q-ripple__inner",Pe(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${d},${x},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${l?" text-"+l:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),t.appendChild(o);const R=()=>{o.remove(),clearTimeout(S)};n.abort.push(R);let S=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${b},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,S=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,S=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(R),1)},275)},250)},50)}function X(e,{modifiers:t,value:n,arg:u}){const l=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||u,keyCodes:[].concat(l.keyCodes||13)}}var Oe=$e({name:"ripple",beforeMount(e,t){const n=t.instance.$.appContext.config.globalProperties.$q.config||{};if(n.ripple===!1)return;const u={cfg:n,enabled:t.value!==!1,modifiers:{},abort:[],start(l){u.enabled===!0&&l.qSkipRipple!==!0&&l.type===(u.modifiers.early===!0?"pointerdown":"click")&&W(l,e,u,l.qKeyEvent===!0)},keystart:Me(l=>{u.enabled===!0&&l.qSkipRipple!==!0&&z(l,u.modifiers.keyCodes)===!0&&l.type===`key${u.modifiers.early===!0?"down":"up"}`&&W(l,e,u,!0)},300)};X(u,t),e.__qripple=u,be(u,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n!==void 0&&(n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&X(n,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(n=>{n()}),ye(t,"main"),delete e._qripple)}});const se={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ze=Object.keys(se),Ne={align:{type:String,validator:e=>ze.includes(e)}};function Ke(e){return c(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${se[t]}`})}function rt(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function ce(e,t){typeof t.type=="symbol"?Array.isArray(t.children)===!0&&t.children.forEach(n=>{ce(e,n)}):e.add(t)}function it(e){const t=new Set;return e.forEach(n=>{ce(t,n)}),Array.from(t)}function Ve(e){return e.appContext.config.globalProperties.$router!==void 0}function J(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Y(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ie(e,t){for(const n in t){const u=t[n],l=e[n];if(typeof u=="string"){if(u!==l)return!1}else if(Array.isArray(l)===!1||l.length!==u.length||u.some((s,o)=>s!==l[o]))return!1}return!0}function G(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,u)=>n===t[u]):e.length===1&&e[0]===t}function Qe(e,t){return Array.isArray(e)===!0?G(e,t):Array.isArray(t)===!0?G(t,e):e===t}function De(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Qe(e[n],t[n])===!1)return!1;return!0}const Fe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function He(e){const t=K(),{props:n,proxy:u}=t,l=Ve(t),s=c(()=>n.disable!==!0&&n.href!==void 0),o=c(()=>l===!0&&n.disable!==!0&&s.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),a=c(()=>{if(o.value===!0)try{return u.$router.resolve(n.to)}catch{}return null}),h=c(()=>a.value!==null),$=c(()=>s.value===!0||h.value===!0),v=c(()=>n.type==="a"||$.value===!0?"a":n.tag||e||"div"),y=c(()=>s.value===!0?{href:n.href,target:n.target}:h.value===!0?{href:a.value.href,target:n.target}:{}),p=c(()=>{if(h.value===!1)return null;const{matched:f}=a.value,{length:x}=f,R=f[x-1];if(R===void 0)return-1;const S=u.$route.matched;if(S.length===0)return-1;const C=S.findIndex(Y.bind(null,R));if(C>-1)return C;const A=J(f[x-2]);return x>1&&J(R)===A&&S[S.length-1].path!==A?S.findIndex(Y.bind(null,f[x-2])):C}),r=c(()=>h.value===!0&&p.value>-1&&Ie(u.$route.params,a.value.params)),k=c(()=>r.value===!0&&p.value===u.$route.matched.length-1&&De(u.$route.params,a.value.params)),b=c(()=>h.value===!0?k.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":r.value===!0?` ${n.activeClass}`:"":"");function d(f){return n.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||n.target==="_blank"?!1:(ae(f),u.$router[n.replace===!0?"replace":"push"](n.to).catch(x=>x))}return{hasRouterLink:h,hasHrefLink:s,hasLink:$,linkTag:v,linkRoute:a,linkIsActive:r,linkIsExactActive:k,linkClass:b,linkProps:y,navigateToRouterLink:d}}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ue={xs:8,sm:10,md:14,lg:20,xl:24},We=["button","submit","reset"],Xe=/[^\s]\/[^\s]/,Je={...re,...Fe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,square:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ne.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ye(e){const t=ie(e,Ue),n=Ke(e),{hasRouterLink:u,hasLink:l,linkTag:s,linkProps:o,navigateToRouterLink:a}=He("button"),h=c(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(f=>f in Z?Z[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):d}),$=c(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),v=c(()=>e.disable!==!0&&e.loading!==!0),y=c(()=>v.value===!0?e.tabindex||0:-1),p=c(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=c(()=>{const d={tabindex:y.value};return l.value===!0?Object.assign(d,o.value):We.includes(e.type)===!0&&(d.type=e.type),s.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),u.value!==!0&&Xe.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),k=c(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const f=e.round===!0?"round":`rectangle${$.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${p.value} q-btn--${f}`+(d!==void 0?" "+d:"")+(v.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),b=c(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:h,innerClasses:b,attributes:r,hasRouterLink:u,hasLink:l,linkTag:s,navigateToRouterLink:a,isActionable:v}}const{passiveCapture:q}=qe;let B=null,L=null,_=null;var ut=V({name:"QBtn",props:{...Je,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:u}=K(),{classes:l,style:s,innerClasses:o,attributes:a,hasRouterLink:h,hasLink:$,linkTag:v,navigateToRouterLink:y,isActionable:p}=Ye(e),r=Q(null),k=Q(null);let b=null,d,f;const x=c(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=c(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:$.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),S=c(()=>({center:e.round})),C=c(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),A=c(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:I,onKeydown:fe,onMousedown:ge,onTouchstart:ve}:{onClick:w}),de=c(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:s.value,...a.value,...A.value}));function I(i){if(r.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const M=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",M,q),r.value!==null&&r.value.removeEventListener("blur",M,q)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",M,q),r.value.addEventListener("blur",M,q)}}if(h.value===!0){const m=()=>{i.__qNavigate=!0,y(i)};n("click",i,m),i.defaultPrevented!==!0&&m()}else n("click",i)}}function fe(i){r.value!==null&&(n("keydown",i),z(i,[13,32])===!0&&L!==r.value&&(L!==null&&P(),i.defaultPrevented!==!0&&(r.value.focus(),L=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",E,!0),r.value.addEventListener("blur",E,q)),w(i)))}function ve(i){r.value!==null&&(n("touchstart",i),i.defaultPrevented!==!0&&(B!==r.value&&(B!==null&&P(),B=r.value,b=i.target,b.addEventListener("touchcancel",E,q),b.addEventListener("touchend",E,q)),d=!0,clearTimeout(f),f=setTimeout(()=>{d=!1},200)))}function ge(i){r.value!==null&&(i.qSkipRipple=d===!0,n("mousedown",i),i.defaultPrevented!==!0&&_!==r.value&&(_!==null&&P(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",E,q)))}function E(i){if(r.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===r.value)){if(i!==void 0&&i.type==="keyup"){if(L===r.value&&z(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&ae(m),i.cancelBubble===!0&&ne(m),r.value.dispatchEvent(m),w(i),i.qKeyEvent=!0}n("keyup",i)}P()}}function P(i){const m=k.value;i!==!0&&(B===r.value||_===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),B===r.value&&(b!==null&&(b.removeEventListener("touchcancel",E,q),b.removeEventListener("touchend",E,q)),B=b=null),_===r.value&&(document.removeEventListener("mouseup",E,q),_=null),L===r.value&&(document.removeEventListener("keyup",E,!0),r.value!==null&&r.value.removeEventListener("blur",E,q),L=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(i){w(i),i.qSkipRipple=!0}return ke(()=>{P(!0)}),Object.assign(u,{click:I}),()=>{let i=[];e.icon!==void 0&&i.push(g(U,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(g("span",{class:"block"},[e.label])),i=j(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(g(U,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[g("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(g("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[g("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(g("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},i)),e.loading!==null&&m.push(g(xe,{name:"q-transition--fade"},()=>e.loading===!0?[g("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[g(Ae)])]:null)),te(g(v.value,de.value,m),[[Oe,R.value,void 0,S.value]])}}});export{U as Q,Oe as R,Ze as a,j as b,V as c,ie as d,et as e,Pe as f,nt as g,Se as h,Ae as i,tt as j,Fe as k,He as l,rt as m,at as n,$e as o,it as p,ut as q,re as u,Ve as v};
