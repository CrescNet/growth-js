(function(e){function t(t){for(var o,l,i=t[0],c=t[1],s=t[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/growth-js/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15fb":function(e,t,n){"use strict";n("37c4")},"37c4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("9b19"),a=n.n(r),l=Object(o["createElementVNode"])("img",{src:a.a},null,-1),i=Object(o["createTextVNode"])(" Growth JS "),c=Object(o["createTextVNode"])(": "),s=Object(o["createTextVNode"])(": "),u=["href"],d=["innerHTML","title"];function p(e,t,n,r,a,p){var b=Object(o["resolveComponent"])("q-avatar"),h=Object(o["resolveComponent"])("q-toolbar-title"),m=Object(o["resolveComponent"])("language-selector"),f=Object(o["resolveComponent"])("q-toolbar"),j=Object(o["resolveComponent"])("q-header"),O=Object(o["resolveComponent"])("q-card-section"),v=Object(o["resolveComponent"])("q-card"),g=Object(o["resolveComponent"])("user-input"),w=Object(o["resolveComponent"])("q-btn"),V=Object(o["resolveComponent"])("q-btn-group"),C=Object(o["resolveComponent"])("q-tab"),y=Object(o["resolveComponent"])("q-tabs"),N=Object(o["resolveComponent"])("q-separator"),x=Object(o["resolveComponent"])("GrowthChart"),D=Object(o["resolveComponent"])("q-tab-panel"),k=Object(o["resolveComponent"])("q-tab-panels"),S=Object(o["resolveComponent"])("q-splitter"),I=Object(o["resolveComponent"])("q-page-container"),q=Object(o["resolveComponent"])("ExportDialog"),_=Object(o["resolveComponent"])("ImportDialog"),E=Object(o["resolveComponent"])("q-footer"),Q=Object(o["resolveComponent"])("q-layout");return Object(o["openBlock"])(),Object(o["createBlock"])(Q,{view:"hHh lpR fff"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{elevated:"",class:"bg-primary text-white"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(b,{square:""},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),i]})),_:1}),Object(o["createVNode"])(m)]})),_:1})]})),_:1}),Object(o["createVNode"])(I,{class:"q-mt-sm q-pa-md q-gutter-y-md"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(S,{modelValue:a.splitterModel,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.splitterModel=e}),horizontal:e.$q.screen.lt.md,limits:[30,80],class:"q-mb-md","separator-class":{"q-mx-md":e.$q.screen.gt.sm,"q-my-md":e.$q.screen.lt.md}},{before:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(v,{bordered:"",class:"q-mb-md"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{class:"description q-pb-none"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(e.$t("description.label")),1),c,Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.$t("description.text")),1)]})),_:1}),Object(o["createVNode"])(O,{class:"data-privacy q-pt-none"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(e.$t("dataPrivacy.label")),1),s,Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.$t("dataPrivacy.text")),1)]})),_:1})]})),_:1}),Object(o["createVNode"])(v,{bordered:"",class:"scroll"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(g,{modelValue:a.userInput,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.userInput=e}),availableReferences:p.availableReferences},null,8,["modelValue","availableReferences"]),Object(o["createVNode"])(O,{class:"text-center"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(V,{rounded:"",push:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(w,{color:"primary",icon:"save",label:e.$t("export.title"),onClick:t[1]||(t[1]=function(e){return a.showExportDialog=!0})},null,8,["label"]),Object(o["createVNode"])(w,{color:"primary",icon:"file_download",label:e.$t("import.title"),onClick:t[2]||(t[2]=function(e){return a.showImportDialog=!0})},null,8,["label"]),Object(o["createVNode"])(w,{color:"red",icon:"restart_alt",label:e.$t("reset"),onClick:p.resetUserInput},null,8,["label","onClick"])]})),_:1})]})),_:1})]})),_:1})]})),separator:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createVNode"])(b,{color:"primary","text-color":"white",size:"30px",icon:"drag_indicator"},null,512),[[o["vShow"],e.$q.screen.gt.sm]])]})),after:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(v,{bordered:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(y,{modelValue:a.chartTab,"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.chartTab=e}),dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(C,{name:"height",label:e.$t("height")},null,8,["label"]),Object(o["createVNode"])(C,{name:"weight",label:e.$t("weight")},null,8,["label"]),Object(o["createVNode"])(C,{name:"bmi",label:e.$t("bmi")},null,8,["label"])]})),_:1},8,["modelValue"]),Object(o["createVNode"])(N),Object(o["createVNode"])(k,{modelValue:a.chartTab,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.chartTab=e}),animated:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(D,{name:"height"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(x,{propertyName:e.$t("height")+" (cm)",scatterData:p.heightData,color:p.chartColor,centileData:a.centiles.height?a.centiles.height[a.userInput.sex]:[]},null,8,["propertyName","scatterData","color","centileData"])]})),_:1}),Object(o["createVNode"])(D,{name:"weight"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(x,{propertyName:e.$t("weight")+" (kg)",scatterData:p.weightData,color:p.chartColor,centileData:a.centiles.weight?a.centiles.weight[a.userInput.sex]:[]},null,8,["propertyName","scatterData","color","centileData"])]})),_:1}),Object(o["createVNode"])(D,{name:"bmi"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(x,{propertyName:e.$t("bmi")+" (kg/m²)",scatterData:p.bmiData,color:p.chartColor,centileData:a.centiles.bmi?a.centiles.bmi[a.userInput.sex]:[]},null,8,["propertyName","scatterData","color","centileData"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})]})),_:1},8,["modelValue","horizontal","separator-class"])]})),_:1}),Object(o["createVNode"])(q,{show:a.showExportDialog,"onUpdate:show":t[6]||(t[6]=function(e){return a.showExportDialog=e}),dirty:a.dirty,"onUpdate:dirty":t[7]||(t[7]=function(e){return a.dirty=e}),userInput:a.userInput},null,8,["show","dirty","userInput"]),Object(o["createVNode"])(_,{show:a.showImportDialog,"onUpdate:show":t[8]||(t[8]=function(e){return a.showImportDialog=e}),userInput:a.userInput,"onUpdate:userInput":t[9]||(t[9]=function(e){return a.userInput=e})},null,8,["show","userInput"]),Object(o["createVNode"])(E,{elevated:"",class:"bg-grey-8 text-white"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])((function(){return[p.copyrightNotice?(Object(o["openBlock"])(),Object(o["createBlock"])(h,{key:0,class:"text-subtitle1"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(" © "+Object(o["toDisplayString"])(p.copyrightNotice),1)]})),_:1})):Object(o["createCommentVNode"])("",!0),p.imprintUrl?(Object(o["openBlock"])(),Object(o["createBlock"])(h,{key:1,class:"text-subtitle1 text-center"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("a",{href:p.imprintUrl,class:"q-link text-white"},Object(o["toDisplayString"])(e.$t("imprint")),9,u)]})),_:1})):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(h,{class:"text-subtitle1 text-right"},{default:Object(o["withCtx"])((function(){return[a.version?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:0,innerHTML:"v"+a.version,title:e.$t("version")},null,8,d)):Object(o["createCommentVNode"])("",!0)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}n("d81d");function b(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("ScatterChart");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{chartData:l.chartData,options:n.options},null,8,["chartData","options"])}var h=n("2909"),m=(n("99af"),n("b48c")),f=n("9b4a"),j=n("7375");f["Chart"].register.apply(f["Chart"],Object(h["a"])(f["registerables"]).concat([j["a"]]));var O={name:"GrowthChart",components:{ScatterChart:m["ScatterChart"]},props:{scatterData:{type:Array,default:function(){}},centileData:{type:Array,default:function(){}},options:{type:Object,default:function(){return{responsive:!0,scales:{x:{min:0,max:18},y:{min:0}},plugins:{zoom:{limits:{x:{min:0,max:25,minRange:1},y:{min:0,max:300,minRange:5}},zoom:{wheel:{enabled:!0},pinch:{enabled:!0},mode:"xy"},pan:{enabled:!0,mode:"xy"}}}}}},color:{type:String,default:"black"},propertyName:String},computed:{localCentileData:function(){var e={};if(void 0!=this.centileData)for(var t=0,n=["p03","p50","p97"];t<n.length;t++){var o=n[t];e[o]=this.centileData.map((function(e){return{x:e.age,y:e[o]}}))}return e},chartData:function(){return{datasets:[{label:this.propertyName,type:"scatter",data:this.scatterData,backgroundColor:this.color},{label:"p03",type:"line",fill:!1,borderWidth:2,data:this.localCentileData.p03,borderColor:"black",pointRadius:0,pointHitRadius:0},{label:"p50",type:"line",fill:!1,borderDash:[5],borderWidth:2,data:this.localCentileData.p50,borderColor:"black",pointRadius:0,pointHitRadius:0},{label:"p97",type:"line",fill:!1,borderWidth:2,data:this.localCentileData.p97,borderColor:"black",pointRadius:0,pointHitRadius:0}]}}}},v=n("d959"),g=n.n(v);const w=g()(O,[["render",b]]);var V=w,C={class:"row"},y={class:"col-12 col-md"},N={key:0,class:"text-caption"},x=["href"],D={class:"col-12 col-md q-gutter-md text-center q-pt-sm"},k={class:"col-12 col-md"},S=Object(o["createElementVNode"])("th",null,null,-1),I={colspan:"4"};function q(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-select"),c=Object(o["resolveComponent"])("q-radio"),s=Object(o["resolveComponent"])("q-input"),u=Object(o["resolveComponent"])("q-card-section"),d=Object(o["resolveComponent"])("q-separator"),p=Object(o["resolveComponent"])("VisitRow"),b=Object(o["resolveComponent"])("q-btn"),h=Object(o["resolveComponent"])("q-markup-table"),m=Object(o["resolveDirective"])("t");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",C,[Object(o["createElementVNode"])("div",y,[Object(o["createVNode"])(i,{outlined:"",label:e.$t("reference"),"stack-label":"","emit-value":"","map-options":"",modelValue:l.local.reference,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.local.reference=e}),options:n.availableReferences},null,8,["label","modelValue","options"]),l.selectedReference&&l.selectedReference.url?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",N,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("source"))+": ",1),Object(o["createElementVNode"])("a",{href:l.selectedReference.url,target:"_blank",class:"q-link text-primary"},Object(o["toDisplayString"])(l.selectedReference.authors?l.selectedReference.authors:l.selectedReference.url),9,x)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",D,[Object(o["createVNode"])(c,{modelValue:l.local.sex,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.local.sex=e}),val:"male",label:e.$t("male")},null,8,["modelValue","label"]),Object(o["createVNode"])(c,{modelValue:l.local.sex,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.local.sex=e}),val:"female",label:e.$t("female")},null,8,["modelValue","label"])]),Object(o["createElementVNode"])("div",k,[Object(o["createVNode"])(s,{outlined:"",type:"date",label:e.$t("birthdate"),"stack-label":"",debounce:"500",modelValue:l.local.birthdate,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.local.birthdate=e})},null,8,["label","modelValue"])])])]})),_:1}),Object(o["createVNode"])(d,{inset:""}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["withDirectives"])(Object(o["createElementVNode"])("th",null,null,512),[[m,"date"]]),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("height")+" ("+e.$t("inUnit",{unit:"cm"})+")"),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("weight")+" ("+e.$t("inUnit",{unit:"kg"})+")"),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("bmi")+" ("+e.$t("inUnit",{unit:"kg/m²"})+")"),1),S])]),Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.local.visits,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:t,modelValue:l.local.visits[t],"onUpdate:modelValue":function(e){return l.local.visits[t]=e},onDeleteRow:function(t){return l.removeVisit(e)}},null,8,["modelValue","onUpdate:modelValue","onDeleteRow"])})),128)),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",I,[Object(o["createVNode"])(b,{rounded:"",color:"secondary",icon:"add",label:e.$t("addRow"),onClick:l.addVisit},null,8,["label","onClick"])])])])]})),_:1})]})),_:1})])}n("7db0"),n("a434");function _(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-input"),c=Object(o["resolveComponent"])("q-btn");return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",null,[Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(i,{outlined:"",type:"date",debounce:"500",modelValue:l.local.date,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.update("date",e)})},null,8,["modelValue"])]),Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(i,{outlined:"",type:"number",step:"any",min:"0",title:e.$t("inUnit",{unit:"cm"}),debounce:"500",modelValue:l.local.height,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.update("height",e)})},null,8,["title","modelValue"])]),Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(i,{outlined:"",type:"number",step:"any",min:"0",title:e.$t("inUnit",{unit:"kg"}),debounce:"500",modelValue:l.local.weight,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.update("weight",e)})},null,8,["title","modelValue"])]),Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(i,{outlined:"",readonly:"",class:"cursor-inherit",type:"number",step:"any",title:e.$t("inUnit",{unit:"kg/m²"}),modelValue:l.bmi},null,8,["title","modelValue"])]),Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(c,{round:"",color:"red",icon:"clear",title:e.$t("deleteRow"),onClick:t[3]||(t[3]=function(t){return e.$emit("deleteRow")})},null,8,["title"])])])}var E=n("ade3"),Q=n("5530"),$=(n("b680"),{props:["modelValue"],computed:{local:function(){return this.modelValue?this.modelValue:{}},bmi:function(){return this.local.height&&this.local.weight?(this.local.weight/Math.pow(this.local.height/100,2)).toFixed(2):null}},methods:{update:function(e,t){this.$emit("update:modelValue",Object(Q["a"])(Object(Q["a"])({},this.modelValue),{},Object(E["a"])({},e,t)))}}}),B=(n("ecfd"),n("27f9")),R=n("9c40"),z=n("93dc"),U=n.n(z);const T=g()($,[["render",_]]);var M=T;U()($,"components",{QInput:B["a"],QBtn:R["a"]});var J={props:["modelValue","availableReferences"],components:{VisitRow:M},computed:{local:function(){return this.modelValue?this.modelValue:{}},selectedReference:function(){var e=this;return this.availableReferences.find((function(t){return t.value==e.local.reference}))}},methods:{addVisit:function(){this.local.visits.push({})},removeVisit:function(e){this.local.visits.splice(this.local.visits.indexOf(e),1)}}},H=n("a370"),F=n("ddd8"),G=n("3786"),P=n("eb85"),L=n("2bb1");const A=g()(J,[["render",q]]);var W=A;U()(J,"components",{QCardSection:H["a"],QSelect:F["a"],QRadio:G["a"],QInput:B["a"],QSeparator:P["a"],QMarkupTable:L["a"],QBtn:R["a"]});var Z={class:"text-h6"},K={class:"row justify-between items-center"},Y={class:"col-7"},X={class:"row justify-between items-center"},ee={class:"col-7"},te={class:"row justify-between items-center"},ne={class:"col-7"};function oe(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-space"),c=Object(o["resolveComponent"])("q-btn"),s=Object(o["resolveComponent"])("q-card-section"),u=Object(o["resolveComponent"])("q-separator"),d=Object(o["resolveComponent"])("q-card"),p=Object(o["resolveComponent"])("QrCodeDialog"),b=Object(o["resolveComponent"])("q-dialog"),h=Object(o["resolveDirective"])("t"),m=Object(o["resolveDirective"])("close-popup");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{"model-value":n.show,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.$emit("update:show",t)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{class:"row items-center q-pb-none"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",Z,null,512),[[h,"export.title"]]),Object(o["createVNode"])(i),Object(o["withDirectives"])(Object(o["createVNode"])(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[m]])]})),_:1}),Object(o["createVNode"])(u,{inset:""}),Object(o["createVNode"])(s,{class:"q-gutter-sm"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("p",null,null,512),[[h,"export.description"]]),Object(o["createElementVNode"])("div",K,[Object(o["createVNode"])(c,{rounded:"",stack:"",class:"col-4",color:"primary",icon:"save",disabled:!n.dirty,title:n.dirty?"":e.$t("export.browser.noChanges"),label:e.$t("export.browser.title"),onClick:l.saveUserInput},null,8,["disabled","title","label","onClick"]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",Y,null,512),[[h,"export.browser.description"]])]),Object(o["createElementVNode"])("div",X,[Object(o["createVNode"])(c,{rounded:"",stack:"",class:"col-4",color:"primary",icon:"download",label:e.$t("export.file.title"),onClick:t[0]||(t[0]=function(t){return e.saveToFile(JSON.stringify(n.userInput),"data_"+l.today+".json")})},null,8,["label"]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",ee,null,512),[[h,"export.file.description"]])]),Object(o["createElementVNode"])("div",te,[Object(o["createVNode"])(c,{rounded:"",stack:"",class:"col-4",color:"primary",icon:"qr_code_2",label:e.$t("export.qrCode.title"),onClick:t[1]||(t[1]=function(e){return a.showQrCode=!0})},null,8,["label"]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",ne,null,512),[[h,"export.qrCode.description"]])])]})),_:1})]})),_:1}),Object(o["createVNode"])(p,{modelValue:a.showQrCode,"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.showQrCode=e}),content:n.userInput},null,8,["modelValue","content"])]})),_:1},8,["model-value"])}var re={class:"text-h6"};function ae(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-space"),c=Object(o["resolveComponent"])("q-btn"),s=Object(o["resolveComponent"])("q-card-section"),u=Object(o["resolveComponent"])("q-separator"),d=Object(o["resolveComponent"])("qrcode-vue"),p=Object(o["resolveComponent"])("q-card"),b=Object(o["resolveComponent"])("q-dialog"),h=Object(o["resolveDirective"])("t"),m=Object(o["resolveDirective"])("close-popup");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{"model-value":l.local,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{class:"row items-center q-pb-none"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",re,null,512),[[h,"export.qrCode.title"]]),Object(o["createVNode"])(i),Object(o["withDirectives"])(Object(o["createVNode"])(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[m]])]})),_:1}),Object(o["createVNode"])(u,{inset:""}),Object(o["createVNode"])(s,{class:"text-center"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("p",null,null,512),[[h,"export.qrCode.description2"]]),Object(o["createVNode"])(d,{value:JSON.stringify(n.content),size:l.size,level:"H"},null,8,["value","size"])]})),_:1})]})),_:1})]})),_:1},8,["model-value"])}var le=n("d39c"),ie=n.n(le),ce={name:"QrCodeDialog",components:{QrcodeVue:ie.a},props:{modelValue:{type:Boolean,default:!1},content:Object},computed:{local:function(){return this.modelValue},size:function(){return 100*Math.sqrt(this.content.visits.length)}}},se=n("24e8"),ue=n("f09f"),de=n("2c91"),pe=n("7f67");const be=g()(ce,[["render",ae]]);var he=be;U()(ce,"components",{QDialog:se["a"],QCard:ue["a"],QCardSection:H["a"],QSpace:de["a"],QBtn:R["a"],QSeparator:P["a"]}),U()(ce,"directives",{ClosePopup:pe["a"]});n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("a15b");var me={methods:{saveToFile:function(e,t){var n=e,o=new Blob([n],{type:"text/plain"}),r=document.createEvent("MouseEvents"),a=document.createElement("a");a.download=t,a.href=window.URL.createObjectURL(o),a.dataset.downloadurl=["text/json",a.download,a.href].join(":"),r.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(r)}}},fe={name:"ExportDialog",components:{QrCodeDialog:he},mixins:[me],props:{show:{type:Boolean,default:!1},dirty:{type:Boolean,default:!1},userInput:Object},data:function(){return{showQrCode:!1}},computed:{today:function(){return(new Date).toLocaleDateString()}},methods:{saveUserInput:function(){localStorage.setItem("userInput",JSON.stringify(this.userInput)),this.$emit("update:dirty",!1)}}};const je=g()(fe,[["render",oe]]);var Oe=je;U()(fe,"components",{QDialog:se["a"],QCard:ue["a"],QCardSection:H["a"],QSpace:de["a"],QBtn:R["a"],QSeparator:P["a"]}),U()(fe,"directives",{ClosePopup:pe["a"]});var ve={class:"text-h6"},ge={class:"row justify-between items-center"},we={class:"row justify-between items-center"};function Ve(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-space"),c=Object(o["resolveComponent"])("q-btn"),s=Object(o["resolveComponent"])("q-card-section"),u=Object(o["resolveComponent"])("q-separator"),d=Object(o["resolveComponent"])("q-icon"),p=Object(o["resolveComponent"])("q-file"),b=Object(o["resolveComponent"])("q-input"),h=Object(o["resolveComponent"])("q-card"),m=Object(o["resolveComponent"])("q-dialog"),f=Object(o["resolveDirective"])("t"),j=Object(o["resolveDirective"])("close-popup");return Object(o["openBlock"])(),Object(o["createBlock"])(m,{modelValue:n.show,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.$emit("update:show",t)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{class:"row items-center q-pb-none"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",ve,null,512),[[f,"import.title"]]),Object(o["createVNode"])(i),Object(o["withDirectives"])(Object(o["createVNode"])(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[j]])]})),_:1}),Object(o["createVNode"])(u,{inset:""}),Object(o["createVNode"])(s,{class:"q-gutter-sm"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("p",null,null,512),[[f,"import.description"]]),Object(o["createElementVNode"])("div",ge,[Object(o["createVNode"])(p,{outlined:"",modelValue:a.jsonFile,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.jsonFile=e}),label:e.$t("import.file.label"),class:"col-7",accept:".json"},{prepend:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{name:"attach_file"})]})),_:1},8,["modelValue","label"]),Object(o["createVNode"])(c,{rounded:"",stack:"",color:"primary",icon:"sync",class:"col-4",disabled:!a.jsonFile,label:e.$t("import.file.title"),onClick:l.importJsonFile},null,8,["disabled","label","onClick"])]),Object(o["createElementVNode"])("div",we,[Object(o["createVNode"])(b,{outlined:"",type:"textarea",modelValue:a.jsonString,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.jsonString=e}),label:e.$t("import.json.label"),class:"col-7",rows:"1"},null,8,["modelValue","label"]),Object(o["createVNode"])(c,{rounded:"",stack:"",color:"primary",icon:"sync",class:"col-4",disabled:!a.jsonString,label:e.$t("import.json.title"),onClick:l.importJsonString},null,8,["disabled","label","onClick"])])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}var Ce={name:"ImportDialog",props:{show:{type:Boolean,default:!1},userInput:Object},data:function(){var e=this,t=new FileReader;return t.onload=function(t){return e.$emit("update:userInput",JSON.parse(t.target.result))},{fileReader:t,jsonString:null,jsonFile:null}},methods:{importJsonString:function(){try{this.$emit("update:userInput",JSON.parse(this.jsonString)),this.jsonString=null,this.$emit("update:show",!1)}catch(e){console.log(e.message)}},importJsonFile:function(){try{this.fileReader.readAsText(this.jsonFile),this.jsonFile=null,this.$emit("update:show",!1)}catch(e){console.log(e.message)}}}},ye=n("7d53"),Ne=n("0016");const xe=g()(Ce,[["render",Ve]]);var De=xe;function ke(e,t){var n=Object(o["resolveComponent"])("q-select");return Object(o["openBlock"])(),Object(o["createBlock"])(n,{dense:"","emit-value":"","map-options":"",modelValue:e.$root.$i18n.locale,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.$root.$i18n.locale=t}),"display-value":"Language",options:[{value:"de",label:"DE"},{value:"en",label:"EN"}]},null,8,["modelValue"])}U()(Ce,"components",{QDialog:se["a"],QCard:ue["a"],QCardSection:H["a"],QSpace:de["a"],QBtn:R["a"],QSeparator:P["a"],QFile:ye["a"],QIcon:Ne["a"],QInput:B["a"]}),U()(Ce,"directives",{ClosePopup:pe["a"]});const Se={},Ie=g()(Se,[["render",ke]]);var qe=Ie;U()(Se,"components",{QSelect:F["a"]});var _e=n("9224"),Ee={name:"App",components:{GrowthChart:V,UserInput:W,ExportDialog:Oe,ImportDialog:De,LanguageSelector:qe},data:function(){return{userInput:{reference:null,birthdate:null,sex:null,visits:[{}]},centiles:{},showExportDialog:!1,showImportDialog:!1,splitterModel:Object(o["ref"])(57),chartTab:"height",dirty:!1,version:_e["a"]}},computed:{imprintUrl:function(){return"https://crescnet.org/impressum.php"},copyrightNotice:function(){return"CrescNet, Medizinische Fakultät, Universität Leipzig 2021"},availableReferences:function(){return[{value:null,label:this.$t("selectReference")},{value:"normal_german",label:this.$t("normal_german"),authors:"Kromeyer-Hauschild et al. 2001",url:"https://doi.org/10.1007/s001120170107"},{value:"noonan_japan",label:this.$t("noonan_japan"),authors:"Isojima et al. 2016",url:"https://doi.org/10.1038/pr.2015.254"},{value:"achondroplasia_sweden",label:this.$t("achondroplasia_sweden"),authors:"Merker et al. 2019",url:"https://doi.org/10.1002/ajmg.a.38853"},{value:"hypochondroplasia_argentinia",label:this.$t("hypochondroplasia_argentinia"),authors:"Arenas et al. 2018",url:"https://doi.org/10.1515/jpem-2018-0046"},{value:"trisomy21_america",label:this.$t("trisomy21_america"),authors:"Zemel et al. 2015",url:"https://doi.org/10.1542/peds.2015-1652"}]},birthdateDate:function(){return null==this.userInput.birthdate?null:new Date(this.userInput.birthdate).setHours(0,0,0,0)},heightData:function(){return this.getData("height")},weightData:function(){return this.getData("weight")},bmiData:function(){var e=this;return null==this.birthdateDate?[]:this.userInput.visits.map((function(t){return t.height&&t.weight?{x:e.dateDiffYears(new Date(t.date).setHours(0,0,0,0),e.birthdateDate),y:t.weight/Math.pow(t.height/100,2)}:null}))},chartColor:function(){if(void 0!=this.userInput){if("male"==this.userInput.sex)return"#2086e8";if("female"==this.userInput.sex)return"#f392a3"}return"black"}},watch:{userInput:{deep:!0,handler:function(){this.dirty=!0}},"userInput.reference":function(){if(null!=this.userInput.reference){var e=this;this.axios.get("./references/".concat(this.userInput.reference,".json")).then((function(t){e.centiles=t.data})).catch((function(){e.userInput.reference=null,e.centiles={}}))}else this.centiles={}}},mounted:function(){localStorage.getItem("userInput")&&(this.userInput=JSON.parse(localStorage.getItem("userInput"))),this.dirty=!1},methods:{dateDiffYears:function(e,t){return(e-t)/315576e5},resetUserInput:function(){this.userInput={reference:null,birthdate:null,sex:null,visits:[{}]},localStorage.removeItem("userInput"),this.dirty=!1},getData:function(e){var t=this;return null==this.birthdateDate?[]:this.userInput.visits.map((function(n){return{x:t.dateDiffYears(new Date(n.date).setHours(0,0,0,0),t.birthdateDate),y:n[e]}}))}}},Qe=(n("15fb"),n("4d5a")),$e=n("e359"),Be=n("65c6"),Re=n("6ac5"),ze=n("cb32"),Ue=n("09e3"),Te=n("8562"),Me=n("e7a9"),Je=n("429b"),He=n("7460"),Fe=n("adad"),Ge=n("823b"),Pe=n("7ff0");const Le=g()(Ee,[["render",p]]);var Ae=Le;U()(Ee,"components",{QLayout:Qe["a"],QHeader:$e["a"],QToolbar:Be["a"],QToolbarTitle:Re["a"],QAvatar:ze["a"],QPageContainer:Ue["a"],QSplitter:Te["a"],QCard:ue["a"],QCardSection:H["a"],QBtnGroup:Me["a"],QBtn:R["a"],QTabs:Je["a"],QTab:He["a"],QSeparator:P["a"],QTabPanels:Fe["a"],QTabPanel:Ge["a"],QFooter:Pe["a"]});var We=n("bc3a"),Ze=n.n(We),Ke=n("2106"),Ye=n.n(Ke),Xe=n("b05d"),et=(n("c867"),n("215a")),tt=(n("7d6e"),n("e54f"),{config:{},plugins:{},lang:et["a"]}),nt=n("0251"),ot=n("6ce2"),rt=n("edd4"),at=Object(nt["createI18n"])({locale:navigator.language||navigator.userLanguage,fallbackLocale:"en",silentFallbackWarn:!0,messages:{de:ot,en:rt}});Object(o["createApp"])(Ae).use(Xe["a"],tt).use(Ye.a,Ze.a).use(at).mount("#app")},"6ce2":function(e){e.exports=JSON.parse('{"description":{"label":"Beschreibung","text":"Auf dieser Seite können Sie Wachstumsdaten eingeben und diese im Vergleich zu einer Vergleichspopulation visualisieren. Wählen Sie bitte zunächst die zu verwendenden Referenzwerte aus und geben Sie anschließend Geschlecht, Geburtsdatum und die zu visualisierenden Messwerte ein. Die Werte werden in den Grafiken auf der rechten Seite angezeigt (bzw. unten für Mobilgerätenutzer). Mit Klick auf \\"Grösse\\", \\"Gewicht\\" und \\"BMI\\" kann zwischen den verschiedenen Grafiken gewechselt werden. Außerdem haben Sie die Möglichkeit, mit dem Mausrad zu zoomen. Mit den unteren Schaltflächen können Sie vorhandene Daten importieren oder Ihre Eingaben exportieren und diese somit z.B. Ihrem Hausarzt vorlegen."},"dataPrivacy":{"label":"Datenschutz","text":"Die auf dieser Seite eingetragenen Daten verbleiben ausschließlich auf Ihrem Endgerät. Weder die Betreiber dieser Anwendung noch andere Parteien haben zu irgendeinem Zeitpunkt Zugriff auf Ihre Daten. Falls Sie die Schaltfläche \\"Im Browser speichern\\" unter \\"Export\\" betätigen, werden die Eingaben in Ihrem Browser gespeichert."},"inUnit":"in {unit}","height":"Größe","weight":"Gewicht","bmi":"BMI","deleteRow":"Zeile löschen","date":"Datum","addRow":"Zeile Hinzufügen","birthdate":"Geburtsdatum","female":"Weiblich","male":"Männlich","sex":"Geschlecht","reference":"Referenz","reset":"Zurücksetzen","viewOnGitHub":"Auf GitHub anzeigen","selectReference":"Bitte Referenz auswählen...","normal_german":"Deutsche Kinder ohne chronische Erkrankungen","noonan_japan":"Kinder mit Noonan-Syndrom","achondroplasia_sweden":"Kinder mit Achondroplasie","hypochondroplasia_argentinia":"Kinder mit Hypochondroplasie (nur Größe verfügbar)","trisomy21_america":"Kinder mit Trisomie 21","close":"Schließen","source":"Quelle","import":{"title":"Import","description":"Laden Sie vormals exportierte Eingabedaten aus einer JSON Datei oder Zeichenkette.","file":{"title":"Datei laden","label":"JSON Datei"},"json":{"title":"Zeichenkette laden","label":"JSON Zeichenkette"}},"export":{"title":"Export","description":"Sie haben folgende Möglichkeiten, um Ihre eingegebenen Daten abzuspeichern, bzw. zu exportieren:","browser":{"title":"Im Browser speichern","description":"Speichern Sie die Daten in Ihrem Browser, um sie direkt beim nächsten Öffnen dieser Seite verfügbar zu haben.","noChanges":"Es sind keine Änderungen zum Speichern vorhanden."},"file":{"title":"In Datei speichern","description":"Erzeugen Sie eine Datei aus Ihren Daten, die z.B. an Ihren Hausarzt übergeben werden kann."},"qrCode":{"title":"QR-Code anzeigen","description":"Lassen Sie sich einen mit Smartphone scanbaren QR-Code anzeigen.","description2":"Sie können diesen QR-Code scannen um Ihre eingegebenen Daten im JSON-Format zu erhalten. Dieses Format ist maschinenlesbar."}},"imprint":"Impressum","version":"Version"}')},"887b":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},"9b19":function(e,t,n){e.exports=n.p+"img/logo.8e5197dc.svg"},c867:function(e,t,n){},ecfd:function(e,t,n){"use strict";n("887b")},edd4:function(e){e.exports=JSON.parse('{"description":{"label":"Description","text":"On this page you can enter growth data and visualise it in comparison to a reference population. Please select the reference values to be used first and then enter sex, date of birth and the measured values to be visualised. The values are displayed in the graphics on the right (or below for mobile device users). Click on \\"Height\\", \\"Weight\\" and \\"BMI\\" to switch between the different graphics. You also have the option of zooming with the mouse wheel. With the buttons at the bottom you can import existing data or export your entries and thus present them eg. to your family doctor."},"dataPrivacy":{"label":"Data Privacy","text":"The data entered on this page remains exclusively on your terminal device. Neither operators of this application nor other parties have access to your data at any time. If you click on the button \\"Save data for later\\" in \\"Export\\", the entries will be saved in your browser."},"inUnit":"in {unit}","height":"Height","weight":"Weight","bmi":"BMI","deleteRow":"Delete row","date":"Date","addRow":"Add row","birthdate":"Birthdate","female":"Female","male":"Male","sex":"sex","reference":"Reference","reset":"Reset","viewOnGitHub":"View on GitHub","selectReference":"Please select a reference...","normal_german":"German children without chronic diseases","noonan_japan":"Children with Noonan Syndrome","achondroplasia_sweden":"Children with Achondroplasia","hypochondroplasia_argentinia":"Children with Hypochondroplasia (only height available)","trisomy21_america":"Children with Trisomy 21","close":"Close","source":"Source","import":{"title":"Import","description":"Load previously exported input data from a JSON file or string.","file":{"title":"Load file","label":"JSON file"},"json":{"title":"Load string","label":"JSON string"}},"export":{"title":"Export","description":"You have the following options for saving or exporting the data you have entered:","browser":{"title":"Save in browser","description":"Save the data in your browser to have it directly available the next time you open this page.","noChanges":"There are no changes to save."},"file":{"title":"Save to file","description":"Create a file from your data that can for example be handed over to your family doctor."},"qrCode":{"title":"Show QR code","description":"Display a QR code that can be scanned with a smartphone.","description2":"You can scan this QR code to get your entered data as JSON format. This format is machine-readable."}},"imprint":"Imprint","version":"Version"}')}});
//# sourceMappingURL=app.67c01a50.js.map