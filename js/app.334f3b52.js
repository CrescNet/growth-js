(function(e){function t(t){for(var o,l,i=t[0],c=t[1],s=t[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/growth-js/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3afc":function(e,t,n){"use strict";n("c98f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=n("9b19"),a=n.n(r),l=Object(o["createElementVNode"])("img",{src:a.a},null,-1),i=Object(o["createTextVNode"])(" Growth JS "),c=Object(o["createTextVNode"])(": "),s=Object(o["createTextVNode"])(": "),u={class:"q-ml-md"};function d(e,t,n,r,a,d){var p=Object(o["resolveComponent"])("q-avatar"),b=Object(o["resolveComponent"])("q-toolbar-title"),h=Object(o["resolveComponent"])("q-select"),m=Object(o["resolveComponent"])("q-toolbar"),f=Object(o["resolveComponent"])("q-header"),j=Object(o["resolveComponent"])("q-card-section"),O=Object(o["resolveComponent"])("q-card"),v=Object(o["resolveComponent"])("user-input"),g=Object(o["resolveComponent"])("q-btn"),w=Object(o["resolveComponent"])("q-btn-group"),V=Object(o["resolveComponent"])("q-tab"),C=Object(o["resolveComponent"])("q-tabs"),y=Object(o["resolveComponent"])("q-separator"),N=Object(o["resolveComponent"])("GrowthChart"),x=Object(o["resolveComponent"])("q-tab-panel"),D=Object(o["resolveComponent"])("q-tab-panels"),S=Object(o["resolveComponent"])("q-splitter"),k=Object(o["resolveComponent"])("q-page-container"),q=Object(o["resolveComponent"])("ExportDialog"),I=Object(o["resolveComponent"])("ImportDialog"),_=Object(o["resolveComponent"])("q-footer"),Q=Object(o["resolveComponent"])("q-layout");return Object(o["openBlock"])(),Object(o["createBlock"])(Q,{view:"hHh lpR fff"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(f,{elevated:"",class:"bg-primary text-white"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{square:""},{default:Object(o["withCtx"])((function(){return[l]})),_:1}),i]})),_:1}),Object(o["createVNode"])(h,{dense:"","emit-value":"","map-options":"",modelValue:e.$root.$i18n.locale,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.$root.$i18n.locale=t}),options:[{value:"de",label:"DE"},{value:"en",label:"EN"}]},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(o["createVNode"])(k,{class:"q-mt-sm q-pa-md q-gutter-y-md"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(S,{modelValue:a.splitterModel,"onUpdate:modelValue":t[6]||(t[6]=function(e){return a.splitterModel=e}),limits:[30,80],class:"q-mb-md"},{before:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(O,{bordered:"",class:"q-mr-md q-mb-md"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(j,{class:"description q-pb-none"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(e.$t("description.label")),1),c,Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.$t("description.text")),1)]})),_:1}),Object(o["createVNode"])(j,{class:"data-privacy q-pt-none"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("strong",null,Object(o["toDisplayString"])(e.$t("dataPrivacy.label")),1),s,Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.$t("dataPrivacy.text")),1)]})),_:1})]})),_:1}),Object(o["createVNode"])(O,{bordered:"",class:"q-mr-md"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(v,{modelValue:a.userInput,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.userInput=e}),availableReferences:d.availableReferences},null,8,["modelValue","availableReferences"]),Object(o["createVNode"])(j,{class:"text-center"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(w,{rounded:"",push:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(g,{color:"primary",icon:"save",label:e.$t("export.title"),onClick:t[2]||(t[2]=function(e){return a.showExportDialog=!0})},null,8,["label"]),Object(o["createVNode"])(g,{color:"primary",icon:"file_download",label:e.$t("import.title"),onClick:t[3]||(t[3]=function(e){return a.showImportDialog=!0})},null,8,["label"]),Object(o["createVNode"])(g,{color:"red",icon:"restart_alt",label:e.$t("resetData"),onClick:d.resetUserInput},null,8,["label","onClick"])]})),_:1})]})),_:1})]})),_:1})]})),separator:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{color:"primary","text-color":"white",size:"30px",icon:"drag_indicator"})]})),after:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",u,[Object(o["createVNode"])(O,{bordered:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(C,{modelValue:a.chartTab,"onUpdate:modelValue":t[4]||(t[4]=function(e){return a.chartTab=e}),dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(V,{name:"height",label:e.$t("height")},null,8,["label"]),Object(o["createVNode"])(V,{name:"weight",label:e.$t("weight")},null,8,["label"])]})),_:1},8,["modelValue"]),Object(o["createVNode"])(y),Object(o["createVNode"])(D,{modelValue:a.chartTab,"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.chartTab=e}),animated:""},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(x,{name:"height"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(N,{propertyName:e.$t("height")+" (cm)",scatterData:d.heightData,color:d.chartColor,centileData:a.centiles.height?a.centiles.height[a.userInput.sex]:[]},null,8,["propertyName","scatterData","color","centileData"])]})),_:1}),Object(o["createVNode"])(x,{name:"weight"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(N,{propertyName:e.$t("weight")+" (kg)",scatterData:d.weightData,color:d.chartColor,centileData:a.centiles.weight?a.centiles.weight[a.userInput.sex]:[]},null,8,["propertyName","scatterData","color","centileData"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})])]})),_:1},8,["modelValue"])]})),_:1}),Object(o["createVNode"])(q,{show:a.showExportDialog,"onUpdate:show":t[7]||(t[7]=function(e){return a.showExportDialog=e}),dirty:a.dirty,"onUpdate:dirty":t[8]||(t[8]=function(e){return a.dirty=e}),userInput:a.userInput},null,8,["show","dirty","userInput"]),Object(o["createVNode"])(I,{show:a.showImportDialog,"onUpdate:show":t[9]||(t[9]=function(e){return a.showImportDialog=e}),userInput:a.userInput,"onUpdate:userInput":t[10]||(t[10]=function(e){return a.userInput=e})},null,8,["show","userInput"]),Object(o["createVNode"])(_,{elevated:"",class:"bg-grey-8 text-white"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(b,{class:"text-subtitle1"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(" © "+Object(o["toDisplayString"])(e.$t("copyrightNotice")),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}n("d81d");function p(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("ScatterChart");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{chartData:l.chartData,options:n.options},null,8,["chartData","options"])}var b=n("2909"),h=(n("99af"),n("b48c")),m=n("9b4a"),f=n("7375");m["Chart"].register.apply(m["Chart"],Object(b["a"])(m["registerables"]).concat([f["a"]]));var j={name:"GrowthChart",components:{ScatterChart:h["ScatterChart"]},props:{scatterData:{type:Array,default:function(){}},centileData:{type:Array,default:function(){}},options:{type:Object,default:function(){return{responsive:!0,scales:{x:{min:0,max:18},y:{min:0}},plugins:{zoom:{limits:{x:{min:0,max:25,minRange:1},y:{min:0,max:300,minRange:5}},zoom:{wheel:{enabled:!0},pinch:{enabled:!0},mode:"xy"},pan:{enabled:!0,mode:"xy"}}}}}},color:{type:String,default:"black"},propertyName:String},computed:{localCentileData:function(){var e={};if(void 0!=this.centileData)for(var t=0,n=["p03","p50","p97"];t<n.length;t++){var o=n[t];e[o]=this.centileData.map((function(e){return{x:e.age,y:e[o]}}))}return e},chartData:function(){return{datasets:[{label:this.propertyName,type:"scatter",data:this.scatterData,backgroundColor:this.color},{label:"p03",type:"line",fill:!1,borderWidth:2,data:this.localCentileData.p03,borderColor:"black",pointRadius:0,pointHitRadius:0},{label:"p50",type:"line",fill:!1,borderDash:[5],borderWidth:2,data:this.localCentileData.p50,borderColor:"black",pointRadius:0,pointHitRadius:0},{label:"p97",type:"line",fill:!1,borderWidth:2,data:this.localCentileData.p97,borderColor:"black",pointRadius:0,pointHitRadius:0}]}}}};j.render=p;var O=j,v={class:"row"},g={class:"col"},w={key:0,class:"text-caption"},V=["href"],C={class:"col q-gutter-md text-center q-pt-sm"},y={class:"col"},N=Object(o["createElementVNode"])("th",null,null,-1),x={colspan:"4"};function D(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-select"),c=Object(o["resolveComponent"])("q-radio"),s=Object(o["resolveComponent"])("q-input"),u=Object(o["resolveComponent"])("q-card-section"),d=Object(o["resolveComponent"])("q-separator"),p=Object(o["resolveComponent"])("VisitRow"),b=Object(o["resolveComponent"])("q-btn"),h=Object(o["resolveComponent"])("q-markup-table"),m=Object(o["resolveDirective"])("t");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",v,[Object(o["createElementVNode"])("div",g,[Object(o["createVNode"])(i,{outlined:"",label:e.$t("reference"),"stack-label":"","emit-value":"","map-options":"",modelValue:l.local.reference,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.local.reference=e}),options:n.availableReferences},null,8,["label","modelValue","options"]),l.selectedReference&&l.selectedReference.url?(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",w,[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.$t("source"))+": ",1),Object(o["createElementVNode"])("a",{href:l.selectedReference.url,target:"_blank",class:"text-primary"},Object(o["toDisplayString"])(l.selectedReference.authors?l.selectedReference.authors:l.selectedReference.url),9,V)])):Object(o["createCommentVNode"])("",!0)]),Object(o["createElementVNode"])("div",C,[Object(o["createVNode"])(c,{modelValue:l.local.sex,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.local.sex=e}),val:"male",label:e.$t("male")},null,8,["modelValue","label"]),Object(o["createVNode"])(c,{modelValue:l.local.sex,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.local.sex=e}),val:"female",label:e.$t("female")},null,8,["modelValue","label"])]),Object(o["createElementVNode"])("div",y,[Object(o["createVNode"])(s,{outlined:"",type:"date",label:e.$t("birthdate"),"stack-label":"",debounce:"500",modelValue:l.local.birthdate,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.local.birthdate=e})},null,8,["label","modelValue"])])])]})),_:1}),Object(o["createVNode"])(d,{inset:""}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["withDirectives"])(Object(o["createElementVNode"])("th",null,null,512),[[m,"date"]]),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("height")+" ("+e.$t("inUnit",{unit:"cm"})+")"),1),Object(o["createElementVNode"])("th",null,Object(o["toDisplayString"])(e.$t("weight")+" ("+e.$t("inUnit",{unit:"kg"})+")"),1),N])]),Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(l.local.visits,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:t,modelValue:l.local.visits[t],"onUpdate:modelValue":function(e){return l.local.visits[t]=e},onDeleteRow:function(t){return l.removeVisit(e)}},null,8,["modelValue","onUpdate:modelValue","onDeleteRow"])})),128)),Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("td",x,[Object(o["createVNode"])(b,{rounded:"",color:"secondary",icon:"add",label:e.$t("addRow"),onClick:l.addVisit},null,8,["label","onClick"])])])])]})),_:1})]})),_:1})])}n("7db0"),n("a434");function S(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-input"),c=Object(o["resolveComponent"])("q-btn");return Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",null,[Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(i,{outlined:"",type:"date",debounce:"500",modelValue:l.local.date,"onUpdate:modelValue":t[0]||(t[0]=function(e){return l.update("date",e)})},null,8,["modelValue"])]),Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(i,{outlined:"",type:"number",step:"any",min:"0",title:e.$t("inUnit",{unit:"cm"}),debounce:"500",modelValue:l.local.height,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.update("height",e)})},null,8,["title","modelValue"])]),Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(i,{outlined:"",type:"number",step:"any",min:"0",title:e.$t("inUnit",{unit:"kg"}),debounce:"500",modelValue:l.local.weight,"onUpdate:modelValue":t[2]||(t[2]=function(e){return l.update("weight",e)})},null,8,["title","modelValue"])]),Object(o["createElementVNode"])("td",null,[Object(o["createVNode"])(c,{round:"",color:"red",icon:"clear",title:e.$t("deleteRow"),onClick:t[3]||(t[3]=function(t){return e.$emit("deleteRow")})},null,8,["title"])])])}var k=n("ade3"),q=n("5530"),I={props:["modelValue"],computed:{local:function(){return this.modelValue?this.modelValue:{}}},methods:{update:function(e,t){this.$emit("update:modelValue",Object(q["a"])(Object(q["a"])({},this.modelValue),{},Object(k["a"])({},e,t)))}}},_=n("27f9"),Q=n("9c40"),E=n("93dc"),R=n.n(E);I.render=S;var $=I;R()(I,"components",{QInput:_["a"],QBtn:Q["a"]});var z={props:["modelValue","availableReferences"],components:{VisitRow:$},computed:{local:function(){return this.modelValue?this.modelValue:{}},selectedReference:function(){var e=this;return this.availableReferences.find((function(t){return t.value==e.local.reference}))}},methods:{addVisit:function(){this.local.visits.push({})},removeVisit:function(e){this.local.visits.splice(this.local.visits.indexOf(e),1)}}},B=n("a370"),U=n("ddd8"),T=n("3786"),J=n("eb85"),F=n("2bb1");z.render=D;var M=z;R()(z,"components",{QCardSection:B["a"],QSelect:U["a"],QRadio:T["a"],QInput:_["a"],QSeparator:J["a"],QMarkupTable:F["a"],QBtn:Q["a"]});var P={class:"text-h6"},G={class:"row justify-between items-center"},H={class:"col-7"},L={class:"row justify-between items-center"},A={class:"col-7"},W={class:"row justify-between items-center"},Z={class:"col-7"};function K(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-space"),c=Object(o["resolveComponent"])("q-btn"),s=Object(o["resolveComponent"])("q-card-section"),u=Object(o["resolveComponent"])("q-separator"),d=Object(o["resolveComponent"])("q-card"),p=Object(o["resolveComponent"])("QrCodeDialog"),b=Object(o["resolveComponent"])("q-dialog"),h=Object(o["resolveDirective"])("t"),m=Object(o["resolveDirective"])("close-popup");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{"model-value":n.show,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.$emit("update:show",t)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{class:"row items-center q-pb-none"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",P,null,512),[[h,"export.title"]]),Object(o["createVNode"])(i),Object(o["withDirectives"])(Object(o["createVNode"])(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[m]])]})),_:1}),Object(o["createVNode"])(u,{inset:""}),Object(o["createVNode"])(s,{class:"q-gutter-sm"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("p",null,null,512),[[h,"export.description"]]),Object(o["createElementVNode"])("div",G,[Object(o["createVNode"])(c,{rounded:"",stack:"",class:"col-4",color:"primary",icon:"save",disabled:!n.dirty,title:n.dirty?"":e.$t("export.browser.noChanges"),label:e.$t("export.browser.title"),onClick:l.saveUserInput},null,8,["disabled","title","label","onClick"]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",H,null,512),[[h,"export.browser.description"]])]),Object(o["createElementVNode"])("div",L,[Object(o["createVNode"])(c,{rounded:"",stack:"",class:"col-4",color:"primary",icon:"download",label:e.$t("export.file.title"),onClick:l.saveFile},null,8,["label","onClick"]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",A,null,512),[[h,"export.file.description"]])]),Object(o["createElementVNode"])("div",W,[Object(o["createVNode"])(c,{rounded:"",stack:"",class:"col-4",color:"primary",icon:"qr_code_2",label:e.$t("export.qrCode.title"),onClick:t[0]||(t[0]=function(e){return a.showQrCode=!0})},null,8,["label"]),Object(o["withDirectives"])(Object(o["createElementVNode"])("div",Z,null,512),[[h,"export.qrCode.description"]])])]})),_:1})]})),_:1}),Object(o["createVNode"])(p,{modelValue:a.showQrCode,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.showQrCode=e}),content:n.userInput},null,8,["modelValue","content"])]})),_:1},8,["model-value"])}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("a15b");var Y={class:"text-h6"};function X(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-space"),c=Object(o["resolveComponent"])("q-btn"),s=Object(o["resolveComponent"])("q-card-section"),u=Object(o["resolveComponent"])("q-separator"),d=Object(o["resolveComponent"])("qrcode-vue"),p=Object(o["resolveComponent"])("q-card"),b=Object(o["resolveComponent"])("q-dialog"),h=Object(o["resolveDirective"])("t"),m=Object(o["resolveDirective"])("close-popup");return Object(o["openBlock"])(),Object(o["createBlock"])(b,{"model-value":l.local,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{class:"row items-center q-pb-none"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",Y,null,512),[[h,"export.qrCode.title"]]),Object(o["createVNode"])(i),Object(o["withDirectives"])(Object(o["createVNode"])(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[m]])]})),_:1}),Object(o["createVNode"])(u,{inset:""}),Object(o["createVNode"])(s,{class:"text-center"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("p",null,null,512),[[h,"export.qrCode.description2"]]),Object(o["createVNode"])(d,{value:JSON.stringify(n.content),size:l.size,level:"H"},null,8,["value","size"])]})),_:1})]})),_:1})]})),_:1},8,["model-value"])}var ee=n("d39c"),te=n.n(ee),ne={name:"QrCodeDialog",components:{QrcodeVue:te.a},props:{modelValue:{type:Boolean,default:!1},content:Object},computed:{local:function(){return this.modelValue},size:function(){return 100*Math.sqrt(this.content.visits.length)}}},oe=n("24e8"),re=n("f09f"),ae=n("2c91"),le=n("7f67");ne.render=X;var ie=ne;R()(ne,"components",{QDialog:oe["a"],QCard:re["a"],QCardSection:B["a"],QSpace:ae["a"],QBtn:Q["a"],QSeparator:J["a"]}),R()(ne,"directives",{ClosePopup:le["a"]});var ce={name:"ExportDialog",components:{QrCodeDialog:ie},props:{show:{type:Boolean,default:!1},dirty:{type:Boolean,default:!1},userInput:Object},data:function(){return{showQrCode:!1}},methods:{saveUserInput:function(){localStorage.setItem("userInput",JSON.stringify(this.userInput)),this.$emit("update:dirty",!1)},saveFile:function(){var e=JSON.stringify(this.userInput),t=new Blob([e],{type:"text/plain"}),n=document.createEvent("MouseEvents"),o=document.createElement("a"),r=(new Date).toLocaleDateString();o.download="data_"+r+".json",o.href=window.URL.createObjectURL(t),o.dataset.downloadurl=["text/json",o.download,o.href].join(":"),n.initEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(n)}}};ce.render=K;var se=ce;R()(ce,"components",{QDialog:oe["a"],QCard:re["a"],QCardSection:B["a"],QSpace:ae["a"],QBtn:Q["a"],QSeparator:J["a"]}),R()(ce,"directives",{ClosePopup:le["a"]});var ue={class:"text-h6"},de={class:"row justify-between items-center"},pe={class:"row justify-between items-center"};function be(e,t,n,r,a,l){var i=Object(o["resolveComponent"])("q-space"),c=Object(o["resolveComponent"])("q-btn"),s=Object(o["resolveComponent"])("q-card-section"),u=Object(o["resolveComponent"])("q-separator"),d=Object(o["resolveComponent"])("q-icon"),p=Object(o["resolveComponent"])("q-file"),b=Object(o["resolveComponent"])("q-input"),h=Object(o["resolveComponent"])("q-card"),m=Object(o["resolveComponent"])("q-dialog"),f=Object(o["resolveDirective"])("t"),j=Object(o["resolveDirective"])("close-popup");return Object(o["openBlock"])(),Object(o["createBlock"])(m,{modelValue:n.show,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.$emit("update:show",t)})},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(s,{class:"row items-center q-pb-none"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",ue,null,512),[[f,"import.title"]]),Object(o["createVNode"])(i),Object(o["withDirectives"])(Object(o["createVNode"])(c,{icon:"close",flat:"",round:"",dense:""},null,512),[[j]])]})),_:1}),Object(o["createVNode"])(u,{inset:""}),Object(o["createVNode"])(s,{class:"q-gutter-sm"},{default:Object(o["withCtx"])((function(){return[Object(o["withDirectives"])(Object(o["createElementVNode"])("p",null,null,512),[[f,"import.description"]]),Object(o["createElementVNode"])("div",de,[Object(o["createVNode"])(p,{outlined:"",modelValue:a.jsonFile,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.jsonFile=e}),label:e.$t("import.file.label"),class:"col-7",accept:".json"},{prepend:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{name:"attach_file"})]})),_:1},8,["modelValue","label"]),Object(o["createVNode"])(c,{rounded:"",stack:"",color:"primary",icon:"sync",class:"col-4",disabled:!a.jsonFile,label:e.$t("import.file.title"),onClick:l.importJsonFile},null,8,["disabled","label","onClick"])]),Object(o["createElementVNode"])("div",pe,[Object(o["createVNode"])(b,{outlined:"",type:"textarea",modelValue:a.jsonString,"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.jsonString=e}),label:e.$t("import.json.label"),class:"col-7",rows:"1"},null,8,["modelValue","label"]),Object(o["createVNode"])(c,{rounded:"",stack:"",color:"primary",icon:"sync",class:"col-4",disabled:!a.jsonString,label:e.$t("import.json.title"),onClick:l.importJsonString},null,8,["disabled","label","onClick"])])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"])}var he={name:"ImportDialog",props:{show:{type:Boolean,default:!1},userInput:Object},data:function(){var e=this,t=new FileReader;return t.onload=function(t){return e.$emit("update:userInput",JSON.parse(t.target.result))},{fileReader:t,jsonString:null,jsonFile:null}},methods:{importJsonString:function(){try{this.$emit("update:userInput",JSON.parse(this.jsonString)),this.jsonString=null,this.$emit("update:show",!1)}catch(e){console.log(e.message)}},importJsonFile:function(){try{this.fileReader.readAsText(this.jsonFile),this.jsonFile=null,this.$emit("update:show",!1)}catch(e){console.log(e.message)}}}},me=n("7d53"),fe=n("0016");he.render=be;var je=he;R()(he,"components",{QDialog:oe["a"],QCard:re["a"],QCardSection:B["a"],QSpace:ae["a"],QBtn:Q["a"],QSeparator:J["a"],QFile:me["a"],QIcon:fe["a"],QInput:_["a"]}),R()(he,"directives",{ClosePopup:le["a"]});var Oe={name:"App",components:{GrowthChart:O,UserInput:M,ExportDialog:se,ImportDialog:je},data:function(){return{userInput:{reference:null,birthdate:null,sex:null,visits:[{}]},centiles:{},showExportDialog:!1,showImportDialog:!1,splitterModel:Object(o["ref"])(57),chartTab:"height",dirty:!1}},computed:{availableReferences:function(){return[{value:null,label:this.$t("selectReference")},{value:"normal_german",label:this.$t("normal_german"),authors:"Kromeyer-Hauschild et al. 2001",url:"https://doi.org/10.1007/s001120170107"},{value:"noonan_japan",label:this.$t("noonan_japan"),authors:"Isojima et al. 2016",url:"https://doi.org/10.1038/pr.2015.254"},{value:"achondroplasia_sweden",label:this.$t("achondroplasia_sweden"),authors:"Merker et al. 2019",url:"https://doi.org/10.1002/ajmg.a.38853"},{value:"hypochondroplasia_argentinia",label:this.$t("hypochondroplasia_argentinia"),authors:"Arenas et al. 2018",url:"https://doi.org/10.1515/jpem-2018-0046"},{value:"trisomy21_america",label:this.$t("trisomy21_america"),authors:"Zemel et al. 2015",url:"https://doi.org/10.1542/peds.2015-1652"}]},birthdateDate:function(){return null==this.userInput.birthdate?null:new Date(this.userInput.birthdate).setHours(0,0,0,0)},heightData:function(){var e=this;return null==this.birthdateDate?[]:this.userInput.visits.map((function(t){return{x:e.dateDiffYears(new Date(t.date).setHours(0,0,0,0),e.birthdateDate),y:t.height}}))},weightData:function(){var e=this;return null==this.birthdateDate?[]:this.userInput.visits.map((function(t){return{x:e.dateDiffYears(new Date(t.date).setHours(0,0,0,0),e.birthdateDate),y:t.weight}}))},chartColor:function(){if(void 0!=this.userInput){if("male"==this.userInput.sex)return"#2086e8";if("female"==this.userInput.sex)return"#f392a3"}return"black"}},watch:{userInput:{deep:!0,handler:function(){this.dirty=!0}},"userInput.reference":function(){if(null!=this.userInput.reference){var e=this;this.axios.get("./references/".concat(this.userInput.reference,".json")).then((function(t){e.centiles=t.data})).catch((function(){e.userInput.reference=null,e.centiles={}}))}else this.centiles={}}},mounted:function(){localStorage.getItem("userInput")&&(this.userInput=JSON.parse(localStorage.getItem("userInput"))),this.dirty=!1},methods:{dateDiffYears:function(e,t){return(e-t)/315576e5},resetUserInput:function(){this.userInput={reference:null,birthdate:null,sex:null,visits:[{}]},localStorage.removeItem("userInput"),this.dirty=!1}}},ve=(n("3afc"),n("4d5a")),ge=n("e359"),we=n("65c6"),Ve=n("6ac5"),Ce=n("cb32"),ye=n("09e3"),Ne=n("8562"),xe=n("e7a9"),De=n("429b"),Se=n("7460"),ke=n("adad"),qe=n("823b"),Ie=n("7ff0");Oe.render=d;var _e=Oe;R()(Oe,"components",{QLayout:ve["a"],QHeader:ge["a"],QToolbar:we["a"],QToolbarTitle:Ve["a"],QAvatar:Ce["a"],QSelect:U["a"],QPageContainer:ye["a"],QSplitter:Ne["a"],QCard:re["a"],QCardSection:B["a"],QBtnGroup:xe["a"],QBtn:Q["a"],QTabs:De["a"],QTab:Se["a"],QSeparator:J["a"],QTabPanels:ke["a"],QTabPanel:qe["a"],QFooter:Ie["a"]});var Qe=n("bc3a"),Ee=n.n(Qe),Re=n("2106"),$e=n.n(Re),ze=n("b05d"),Be=(n("c867"),n("215a")),Ue=(n("7d6e"),n("e54f"),{config:{},plugins:{},lang:Be["a"]}),Te=n("0251"),Je=n("6ce2"),Fe=n("edd4"),Me=Object(Te["createI18n"])({locale:"de",fallbackLocale:"en",messages:{de:Je,en:Fe}});Object(o["createApp"])(_e).use(ze["a"],Ue).use($e.a,Ee.a).use(Me).mount("#app")},"6ce2":function(e){e.exports=JSON.parse('{"description":{"label":"Beschreibung","text":"Auf dieser Seite können Sie Wachstumsdaten eingeben und diese im Vergleich zu einer Vergleichspopulation visualisieren. Wählen Sie bitte zunächst die zu verwendenden Referenzwerte aus und geben Sie anschließend Geschlecht, Geburtsdatum und die Messwerte ein, die visualisiert werden sollen. Die Werte werden auf der rechten Seite angezeigt. Mit Klick auf \\"Grösse\\" bzw. \\"Gewicht\\" können Sie zwischen den beiden Grafiken wechseln. Außerdem haben Sie die Möglichkeit, mit dem Mausrad zu zoomen. Mit den unteren grünen Schaltflächen lassen sich die eingetragenen Daten speichern, als QR-Code ausgeben oder löschen."},"dataPrivacy":{"label":"Datenschutz","text":"Die auf dieser Seite eingetragenen Daten verbleiben ausschließlich auf Ihrem Endgerät. Weder das CrescNet noch andere Parteien haben zu irgendeinem Zeitpunkt Zugriff auf Ihre Daten. Falls Sie die Schaltfläche \\"Für später Speichern\\" betätigen, werden die Eingaben in Ihrem Browser im sogenannten \\"Local Storage\\" gespeichert."},"inUnit":"in {unit}","height":"Größe","weight":"Gewicht","deleteRow":"Zeile löschen","date":"Datum","addRow":"Zeile Hinzufügen","birthdate":"Geburtsdatum","female":"Weiblich","male":"Männlich","sex":"Geschlecht","reference":"Referenz","resetData":"Daten zurücksetzen","viewOnGitHub":"Auf GitHub anzeigen","selectReference":"Bitte Referenz auswählen...","normal_german":"Deutsche Kinder ohne chronische Erkrankungen","noonan_japan":"Kinder mit Noonan-Syndrom","achondroplasia_sweden":"Kinder mit Achondroplasie","hypochondroplasia_argentinia":"Kinder mit Hypochondroplasie (nur Größe verfügbar)","trisomy21_america":"Kinder mit Trisomie 21","copyrightNotice":"CrescNet, Medizinische Fakultät, Universität Leipzig 2021","close":"Schließen","source":"Quelle","import":{"title":"Import","description":"Laden Sie vormals exportierte Eingabedaten aus einer JSON Datei oder Zeichenkette.","file":{"title":"Datei laden","label":"JSON Datei"},"json":{"title":"Zeichenkette laden","label":"JSON Zeichenkette"}},"export":{"title":"Export","description":"Sie haben folgende Möglichkeiten, um Ihre eingegebenen Daten abzuspeichern, bzw. zu exportieren:","browser":{"title":"Im Browser speichern","description":"Speichern Sie die Daten in Ihrem Browser, um sie direkt beim nächsten Öffnen dieser Seite verfügbar zu haben.","noChanges":"Es sind keine Änderungen zum Speichern vorhanden."},"file":{"title":"In Datei speichern","description":"Erzeugen Sie eine Datei aus Ihren Daten, die z.B. an Ihren Hausarzt übergeben werden kann."},"qrCode":{"title":"QR-Code anzeigen","description":"Lassen Sie sich einen mit Smartphone scanbaren QR-Code anzeigen.","description2":"Sie können diesen QR-Code scannen um Ihre eingegebenen Daten im JSON-Format zu erhalten. Dieses Format ist maschinenlesbar."}}}')},"9b19":function(e,t,n){e.exports=n.p+"img/logo.8e5197dc.svg"},c867:function(e,t,n){},c98f:function(e,t,n){},edd4:function(e){e.exports=JSON.parse('{"description":{"label":"Description","text":"On this page you can enter growth data and visualise it in comparison to a reference population. Please first select the reference values to be used and then enter sex, date of birth and the measured values to be visualised. The values are displayed on the right-hand side. Click on \\" Height\\" or \\"Weight\\" to switch between the two graphics. Furthermore, you have the possibility to zoom with the mouse wheel. With the lower green buttons, the entered data can be saved, output as a QR code or deleted."},"dataPrivacy":{"label":"Data Privacy","text":"The data entered on this page remains exclusively on your terminal device. Neither CrescNet nor other parties have access to your data at any time. If you click on the button \\"Save data for later\\", the entries will be saved in your browser in the so-called \\"Local Storage\\"."},"inUnit":"in {unit}","height":"Height","weight":"Weight","deleteRow":"Delete row","date":"Date","addRow":"Add row","birthdate":"Birthdate","female":"Female","male":"Male","sex":"sex","reference":"Reference","resetData":"Reset data","viewOnGitHub":"View on GitHub","selectReference":"Please select a reference...","normal_german":"German children without chronic diseases","noonan_japan":"Children with Noonan Syndrome","achondroplasia_sweden":"Children with Achondroplasia","hypochondroplasia_argentinia":"Children with Hypochondroplasia (only height available)","trisomy21_america":"Children with Trisomy 21","copyrightNotice":"CrescNet, Medical Faculty, University of Leipzig 2021","close":"Close","source":"Source","import":{"title":"Import","description":"Load previously exported input data from a JSON file or string.","file":{"title":"Load file","label":"JSON file"},"json":{"title":"Load string","label":"JSON string"}},"export":{"title":"Export","description":"You have the following options for saving or exporting the data you have entered:","browser":{"title":"Save in browser","description":"Save the data in your browser to have it directly available the next time you open this page.","noChanges":"There are no changes to save."},"file":{"title":"Save to file","description":"Create a file from your data that can for example be handed over to your family doctor."},"qrCode":{"title":"Show QR code","description":"Display a QR code that can be scanned with a smartphone.","description2":"You can scan this QR code to get your entered data as JSON format. This format is machine-readable."}}}')}});
//# sourceMappingURL=app.334f3b52.js.map