(function(e){function t(t){for(var a,o,c=t[0],i=t[1],u=t[2],d=0,b=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);s&&s(t);while(b.length)b.shift()();return l.push.apply(l,u||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/growth-js/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3164:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r=n("9b19"),l=n.n(r),o=Object(a["createElementVNode"])("img",{src:l.a},null,-1),c=Object(a["createTextVNode"])(" Growth JS "),i=Object(a["createTextVNode"])(": "),u=Object(a["createTextVNode"])(": "),s={class:"q-ml-md"};function d(e,t,n,r,l,d){var b=Object(a["resolveComponent"])("q-avatar"),p=Object(a["resolveComponent"])("q-toolbar-title"),h=Object(a["resolveComponent"])("q-select"),m=Object(a["resolveComponent"])("q-toolbar"),f=Object(a["resolveComponent"])("q-header"),O=Object(a["resolveComponent"])("q-card-section"),j=Object(a["resolveComponent"])("q-card"),v=Object(a["resolveComponent"])("user-input"),g=Object(a["resolveComponent"])("q-btn"),V=Object(a["resolveComponent"])("q-btn-group"),w=Object(a["resolveComponent"])("q-tab"),C=Object(a["resolveComponent"])("q-tabs"),y=Object(a["resolveComponent"])("q-separator"),N=Object(a["resolveComponent"])("GrowthChart"),D=Object(a["resolveComponent"])("q-tab-panel"),x=Object(a["resolveComponent"])("q-tab-panels"),S=Object(a["resolveComponent"])("q-splitter"),k=Object(a["resolveComponent"])("q-page-container"),R=Object(a["resolveComponent"])("qrcode-vue"),q=Object(a["resolveComponent"])("q-card-actions"),Q=Object(a["resolveComponent"])("q-dialog"),_=Object(a["resolveComponent"])("q-footer"),I=Object(a["resolveComponent"])("q-layout"),$=Object(a["resolveDirective"])("t"),E=Object(a["resolveDirective"])("close-popup");return Object(a["openBlock"])(),Object(a["createBlock"])(I,{view:"hHh lpR fFf"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(f,{elevated:"",class:"bg-primary text-white"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(b,{square:""},{default:Object(a["withCtx"])((function(){return[o]})),_:1}),c]})),_:1}),Object(a["createVNode"])(h,{dense:"","emit-value":"","map-options":"",modelValue:e.$root.$i18n.locale,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.$root.$i18n.locale=t}),options:[{value:"de",label:"DE"},{value:"en",label:"EN"}]},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(a["createVNode"])(k,{class:"q-my-sm q-pa-md q-gutter-y-md"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(S,{modelValue:l.splitterModel,"onUpdate:modelValue":t[5]||(t[5]=function(e){return l.splitterModel=e}),limits:[30,80]},{before:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(j,{bordered:"",class:"q-mr-md q-mb-md"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(O,{class:"description q-pb-none"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("strong",null,Object(a["toDisplayString"])(e.$t("description.label")),1),i,Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.$t("description.text")),1)]})),_:1}),Object(a["createVNode"])(O,{class:"data-privacy q-pt-none"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("strong",null,Object(a["toDisplayString"])(e.$t("dataPrivacy.label")),1),u,Object(a["createElementVNode"])("p",null,Object(a["toDisplayString"])(e.$t("dataPrivacy.text")),1)]})),_:1})]})),_:1}),Object(a["createVNode"])(j,{bordered:"",class:"q-mr-md"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(v,{modelValue:l.userInput,"onUpdate:modelValue":t[1]||(t[1]=function(e){return l.userInput=e}),availableReferences:d.availableReferences},null,8,["modelValue","availableReferences"]),Object(a["createVNode"])(O,{class:"text-center"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(V,{rounded:"",push:""},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(g,{color:"primary",icon:"save",disabled:!l.dirty,label:e.$t("saveDataForLater"),onClick:d.saveUserInput},null,8,["disabled","label","onClick"]),Object(a["createVNode"])(g,{color:"primary",icon:"restart_alt",label:e.$t("resetData"),onClick:d.resetUserInput},null,8,["label","onClick"]),Object(a["createVNode"])(g,{color:"primary",icon:"qr_code_2",label:e.$t("showQrCode"),onClick:t[2]||(t[2]=function(e){return l.showQrCode=!0})},null,8,["label"])]})),_:1})]})),_:1})]})),_:1})]})),after:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(j,{bordered:""},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(C,{modelValue:l.chartTab,"onUpdate:modelValue":t[3]||(t[3]=function(e){return l.chartTab=e}),dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{name:"height",label:e.$t("height")},null,8,["label"]),Object(a["createVNode"])(w,{name:"weight",label:e.$t("weight")},null,8,["label"])]})),_:1},8,["modelValue"]),Object(a["createVNode"])(y),Object(a["createVNode"])(x,{modelValue:l.chartTab,"onUpdate:modelValue":t[4]||(t[4]=function(e){return l.chartTab=e}),animated:""},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(D,{name:"height"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(N,{propertyName:e.$t("height")+" (cm)",scatterData:d.heightData,centileData:l.centiles.height?l.centiles.height[l.userInput.sex]:[]},null,8,["propertyName","scatterData","centileData"])]})),_:1}),Object(a["createVNode"])(D,{name:"weight"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(N,{propertyName:e.$t("weight")+" (kg)",scatterData:d.weightData,centileData:l.centiles.weight?l.centiles.weight[l.userInput.sex]:[]},null,8,["propertyName","scatterData","centileData"])]})),_:1})]})),_:1},8,["modelValue"])]})),_:1})])]})),_:1},8,["modelValue"])]})),_:1}),Object(a["createVNode"])(Q,{modelValue:l.showQrCode,"onUpdate:modelValue":t[6]||(t[6]=function(e){return l.showQrCode=e})},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(j,null,{default:Object(a["withCtx"])((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(O,{class:"text-center"},null,512),[[$,"qrCodeDescription"]]),Object(a["createVNode"])(O,{class:"text-center"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(R,{value:JSON.stringify(l.userInput),size:100*Math.sqrt(l.userInput.visits.length),level:"H"},null,8,["value","size"])]})),_:1}),Object(a["createVNode"])(q,{align:"right"},{default:Object(a["withCtx"])((function(){return[Object(a["withDirectives"])(Object(a["createVNode"])(g,{flat:"",label:e.$t("close"),color:"primary"},null,8,["label"]),[[E]])]})),_:1})]})),_:1})]})),_:1},8,["modelValue"]),Object(a["createVNode"])(_,{elevated:"",class:"bg-grey-8 text-white"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(p,{class:"text-subtitle1"},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(" © "+Object(a["toDisplayString"])(e.$t("copyrightNotice")),1)]})),_:1})]})),_:1})]})),_:1})]})),_:1})}n("d81d"),n("4de4");function b(e,t,n,r,l,o){var c=Object(a["resolveComponent"])("ScatterChart");return Object(a["openBlock"])(),Object(a["createBlock"])(c,{chartData:o.chartData,options:n.options},null,8,["chartData","options"])}var p=n("2909"),h=(n("99af"),n("b48c")),m=n("9b4a"),f=n("7375");m["Chart"].register.apply(m["Chart"],Object(p["a"])(m["registerables"]).concat([f["a"]]));var O={name:"GrowthChart",components:{ScatterChart:h["ScatterChart"]},props:{scatterData:{type:Array,default:function(){}},centileData:{type:Array,default:function(){}},options:{type:Object,default:function(){return{responsive:!0,scales:{x:{min:0,max:18},y:{min:0}},plugins:{zoom:{limits:{x:{min:0,max:100,minRange:1},y:{min:0,max:300,minRange:5}},zoom:{wheel:{enabled:!0},pinch:{enabled:!0},mode:"xy"},pan:{enabled:!0,mode:"xy"}}}}}},color:{type:String,default:"#ff6384"},propertyName:String},computed:{localCentileData:function(){var e={};if(void 0!=this.centileData)for(var t=0,n=["p03","p50","p97"];t<n.length;t++){var a=n[t];e[a]=this.centileData.map((function(e){return{x:e.age,y:e[a]}}))}return e},chartData:function(){return{datasets:[{label:this.propertyName,type:"scatter",data:this.scatterData,backgroundColor:this.color},{label:"p50",type:"line",fill:!1,borderDash:[5],borderWidth:2,data:this.localCentileData.p50,borderColor:"black",pointRadius:0,pointHitRadius:0},{label:"p97",type:"line",fill:!1,borderWidth:2,data:this.localCentileData.p97,borderColor:"black",pointRadius:0,pointHitRadius:0},{label:"p03",type:"line",fill:!1,borderWidth:2,data:this.localCentileData.p03,borderColor:"black",pointRadius:0,pointHitRadius:0}]}}}};O.render=b;var j=O,v={key:0},g=["href"],V=Object(a["createElementVNode"])("br",null,null,-1),w={class:"q-gutter-sm"},C=Object(a["createElementVNode"])("br",null,null,-1),y=Object(a["createElementVNode"])("th",null,null,-1),N={colspan:"4"};function D(e,t,n,r,l,o){var c=Object(a["resolveComponent"])("q-select"),i=Object(a["resolveComponent"])("q-radio"),u=Object(a["resolveComponent"])("q-input"),s=Object(a["resolveComponent"])("q-card-section"),d=Object(a["resolveComponent"])("q-separator"),b=Object(a["resolveComponent"])("VisitRow"),p=Object(a["resolveComponent"])("q-btn"),h=Object(a["resolveComponent"])("q-markup-table"),m=Object(a["resolveDirective"])("t");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",null,[Object(a["createVNode"])(s,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(c,{outlined:"",label:e.$t("reference"),"stack-label":"","emit-value":"","map-options":"",modelValue:o.local.reference,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.local.reference=e}),options:n.availableReferences},null,8,["label","modelValue","options"]),o.selectedReference&&o.selectedReference.url?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",v,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$t("source"))+":",1),Object(a["createElementVNode"])("a",{href:o.selectedReference.url},Object(a["toDisplayString"])(o.selectedReference.url),9,g)])):Object(a["createCommentVNode"])("",!0),V,Object(a["createElementVNode"])("div",w,[Object(a["createVNode"])(i,{modelValue:o.local.sex,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.local.sex=e}),val:"male",label:e.$t("male")},null,8,["modelValue","label"]),Object(a["createVNode"])(i,{modelValue:o.local.sex,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.local.sex=e}),val:"female",label:e.$t("female")},null,8,["modelValue","label"])]),C,Object(a["createVNode"])(u,{outlined:"",type:"date",label:e.$t("birthdate"),"stack-label":"",debounce:"500",modelValue:o.local.birthdate,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.local.birthdate=e})},null,8,["label","modelValue"])]})),_:1}),Object(a["createVNode"])(d,{inset:""}),Object(a["createVNode"])(s,null,{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(h,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("thead",null,[Object(a["createElementVNode"])("tr",null,[Object(a["withDirectives"])(Object(a["createElementVNode"])("th",null,null,512),[[m,"date"]]),Object(a["createElementVNode"])("th",null,Object(a["toDisplayString"])(e.$t("height")+" ("+e.$t("inUnit",{unit:"cm"})+")"),1),Object(a["createElementVNode"])("th",null,Object(a["toDisplayString"])(e.$t("weight")+" ("+e.$t("inUnit",{unit:"kg"})+")"),1),y])]),Object(a["createElementVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(o.local.visits,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:t,modelValue:o.local.visits[t],"onUpdate:modelValue":function(e){return o.local.visits[t]=e},onDeleteRow:function(t){return o.removeVisit(e)}},null,8,["modelValue","onUpdate:modelValue","onDeleteRow"])})),128)),Object(a["createElementVNode"])("tr",null,[Object(a["createElementVNode"])("td",N,[Object(a["createVNode"])(p,{rounded:"",color:"secondary",icon:"add",label:e.$t("addRow"),onClick:o.addVisit},null,8,["label","onClick"])])])])]})),_:1})]})),_:1})])}var x=n("ade3"),S=n("5530");n("7db0"),n("a434");function k(e,t,n,r,l,o){var c=Object(a["resolveComponent"])("q-input"),i=Object(a["resolveComponent"])("q-btn");return Object(a["openBlock"])(),Object(a["createElementBlock"])("tr",null,[Object(a["createElementVNode"])("td",null,[Object(a["createVNode"])(c,{outlined:"",type:"date",debounce:"500",modelValue:o.local.date,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.update("date",e)})},null,8,["modelValue"])]),Object(a["createElementVNode"])("td",null,[Object(a["createVNode"])(c,{outlined:"",type:"number",step:"any",min:"0",title:e.$t("inUnit",{unit:"cm"}),debounce:"500",modelValue:o.local.height,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.update("height",e)})},null,8,["title","modelValue"])]),Object(a["createElementVNode"])("td",null,[Object(a["createVNode"])(c,{outlined:"",type:"number",step:"any",min:"0",title:e.$t("inUnit",{unit:"kg"}),debounce:"500",modelValue:o.local.weight,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.update("weight",e)})},null,8,["title","modelValue"])]),Object(a["createElementVNode"])("td",null,[Object(a["createVNode"])(i,{round:"",color:"red",icon:"clear",title:e.$t("deleteRow"),onClick:t[3]||(t[3]=function(t){return e.$emit("deleteRow")})},null,8,["title"])])])}var R={props:["modelValue"],computed:{local:function(){return this.modelValue?this.modelValue:{}}},methods:{update:function(e,t){this.$emit("update:modelValue",Object(S["a"])(Object(S["a"])({},this.modelValue),{},Object(x["a"])({},e,t)))}}},q=n("27f9"),Q=n("9c40"),_=n("93dc"),I=n.n(_);R.render=k;var $=R;I()(R,"components",{QInput:q["a"],QBtn:Q["a"]});var E={props:["modelValue","availableReferences"],components:{VisitRow:$},data:function(){return{showQrCode:!1}},computed:{local:function(){return this.modelValue?this.modelValue:{}},selectedReference:function(){var e=this;return this.availableReferences.find((function(t){return t.value==e.local.reference}))}},methods:{update:function(e,t){this.$emit("update:modelValue",Object(S["a"])(Object(S["a"])({},this.modelValue),{},Object(x["a"])({},e,t)))},addVisit:function(){this.local.visits.push({})},removeVisit:function(e){this.local.visits.splice(this.local.visits.indexOf(e),1)}}},U=n("a370"),z=n("ddd8"),T=n("3786"),B=n("eb85"),G=n("2bb1");E.render=D;var P=E;I()(E,"components",{QCardSection:U["a"],QSelect:z["a"],QRadio:T["a"],QInput:q["a"],QSeparator:B["a"],QMarkupTable:G["a"],QBtn:Q["a"]});var H=n("d39c"),M=n.n(H),F={name:"App",components:{GrowthChart:j,UserInput:P,QrcodeVue:M.a},data:function(){return{userInput:{reference:null,birthdate:null,sex:null,visits:[{}]},centiles:{},showQrCode:!1,dirty:!1,splitterModel:Object(a["ref"])(57),chartTab:"height"}},computed:{availableReferences:function(){return[{value:null,label:this.$t("selectReference")},{value:"normal_german",label:this.$t("normal_german"),url:"https://doi.org/10.1007/s001120170107"},{value:"noonan_japan",label:this.$t("noonan_japan"),url:"https://doi.org/10.1038/pr.2015.254"}]},birthdateDate:function(){return null==this.userInput.birthdate?null:new Date(this.userInput.birthdate).setHours(0,0,0,0)},heightData:function(){var e=this;return null==this.birthdateDate?[]:this.userInput.visits.map((function(t){return{x:e.dateDiffYears(new Date(t.date).setHours(0,0,0,0),e.birthdateDate),y:t.height}}))},weightData:function(){var e=this;return null==this.birthdateDate?[]:this.userInput.visits.map((function(t){return{x:e.dateDiffYears(new Date(t.date).setHours(0,0,0,0),e.birthdateDate),y:t.weight}}))},nonEmptyVisits:function(){return this.userInput.visits.filter((function(e){return null!=e.date&&(null!=e.height||null!=e.weight)}))}},watch:{"userInput.reference":function(){if(null!=this.userInput.reference){var e=this;this.axios.get("./references/".concat(this.userInput.reference,".json")).then((function(t){e.centiles=t.data})).catch((function(){e.userInput.reference=null,e.centiles={}}))}else this.centiles={}},userInput:{deep:!0,handler:function(){this.dirty=!0}}},mounted:function(){localStorage.getItem("userInput")&&(this.userInput=JSON.parse(localStorage.getItem("userInput"))),this.dirty=!1},methods:{dateDiffYears:function(e,t){return(e-t)/315576e5},saveUserInput:function(){localStorage.setItem("userInput",JSON.stringify(this.userInput)),this.dirty=!1},resetUserInput:function(){this.userInput={reference:null,birthdate:null,sex:null,visits:[{}]},localStorage.removeItem("userInput"),this.dirty=!1}}},W=(n("c2ca"),n("4d5a")),J=n("e359"),L=n("65c6"),A=n("6ac5"),Y=n("cb32"),Z=n("09e3"),K=n("8562"),X=n("f09f"),ee=n("e7a9"),te=n("429b"),ne=n("7460"),ae=n("adad"),re=n("823b"),le=n("24e8"),oe=n("4b7e"),ce=n("7ff0"),ie=n("7f67");F.render=d;var ue=F;I()(F,"components",{QLayout:W["a"],QHeader:J["a"],QToolbar:L["a"],QToolbarTitle:A["a"],QAvatar:Y["a"],QSelect:z["a"],QPageContainer:Z["a"],QSplitter:K["a"],QCard:X["a"],QCardSection:U["a"],QBtnGroup:ee["a"],QBtn:Q["a"],QTabs:te["a"],QTab:ne["a"],QSeparator:B["a"],QTabPanels:ae["a"],QTabPanel:re["a"],QDialog:le["a"],QCardActions:oe["a"],QFooter:ce["a"]}),I()(F,"directives",{ClosePopup:ie["a"]});var se=n("bc3a"),de=n.n(se),be=n("2106"),pe=n.n(be),he=n("b05d"),me=(n("c867"),n("215a")),fe=(n("7d6e"),n("e54f"),{config:{},plugins:{},lang:me["a"]}),Oe=n("0251"),je=n("6ce2"),ve=n("edd4"),ge=Object(Oe["createI18n"])({locale:"de",fallbackLocale:"en",messages:{de:je,en:ve}});Object(a["createApp"])(ue).use(he["a"],fe).use(pe.a,de.a).use(ge).mount("#app")},"6ce2":function(e){e.exports=JSON.parse('{"description":{"label":"Beschreibung","text":"Auf dieser Seite können Sie Wachstumsdaten eingeben und diese im Vergleich zu einer Vergleichspopulation visualisieren. Wählen Sie bitte zunächst die zu verwendenden Referenzwerte aus und geben Sie anschließend Geschlecht, Geburtsdatum und die Messwerte ein, die visualisiert werden sollen. Die Werte werden auf der rechten Seite angezeigt. Mit Klick auf \\"Grösse\\" bzw. \\"Gewicht\\" können Sie zwischen den beiden Grafiken wechseln. Mit den unteren grünen Schaltflächen lassen sich die eingetragenen Daten speichern, löschen und als QR-Code ausgeben."},"dataPrivacy":{"label":"Datenschutz","text":"Die auf dieser Seite eingetragenen Daten verbleiben ausschließlich auf Ihrem Endgerät. Weder das CrescNet noch andere Parteien haben zu irgendeinem Zeitpunkt Zugriff auf Ihre Daten. Falls Sie die Schaltfläche \\"Daten für später Speichern\\" betätigen, werden die Eingaben in Ihrem Browser im sogenannten \\"Local Storage\\" gespeichert."},"inUnit":"in {unit}","qrCodeDescription":"Sie können diesen QR-Code scannen um Ihre eingegebenen Daten im JSON-Format zu erhalten. Dieses Format ist maschinenlesbar.","height":"Größe","weight":"Gewicht","deleteRow":"Zeile löschen","date":"Datum","addRow":"Zeile Hinzufügen","birthdate":"Geburtsdatum","female":"Weiblich","male":"Männlich","sex":"Geschlecht","reference":"Referenz","showQrCode":"QR-Code anzeigen","resetData":"Daten zurücksetzen","saveDataForLater":"Daten für später speichern","viewOnGitHub":"Auf GitHub anzeigen","selectReference":"Bitte Referenz auswählen...","normal_german":"Deutsche Kinder ohne chronische Erkrankungen","noonan_japan":"Kinder mit Noonan-Syndrom","copyrightNotice":"CrescNet, Medizinische Fakultät, Universität Leipzig 2021","close":"Schließen","source":"Quelle"}')},"9b19":function(e,t,n){e.exports=n.p+"img/logo.8e5197dc.svg"},c2ca:function(e,t,n){"use strict";n("3164")},c867:function(e,t,n){},edd4:function(e){e.exports=JSON.parse('{"description":{"label":"Description","text":"On this page you can enter growth data and visualise it in comparison to a reference population. Please first select the reference values to be used and then enter sex, date of birth and the measured values to be visualised. The values are displayed on the right-hand side. Click on \\" Height\\" or \\"Weight\\" to switch between the two graphics. With the lower green buttons, the entered data can be saved, deleted and output as a QR code."},"dataPrivacy":{"label":"Data Privacy","text":"The data entered on this page remains exclusively on your terminal device. Neither CrescNet nor other parties have access to your data at any time. If you click on the button \\"Save data for later\\", the entries will be saved in your browser in the so-called \\"Local Storage\\"."},"inUnit":"in {unit}","qrCodeDescription":"You can scan this QR code to get your entered data as JSON format. This format is machine-readable.","height":"Height","weight":"Weight","deleteRow":"Delete row","date":"Date","addRow":"Add row","birthdate":"Birthdate","female":"Female","male":"Male","sex":"sex","reference":"Reference","showQrCode":"Show QR code","resetData":"Reset data","saveDataForLater":"Save data for later","viewOnGitHub":"View on GitHub","selectReference":"Please select a reference...","normal_german":"German children without chronic diseases","noonan_japan":"Children with Noonan Syndrome","copyrightNotice":"CrescNet, Medical Faculty, University of Leipzig 2021","close":"Close","source":"Source"}')}});
//# sourceMappingURL=app.d9d52917.js.map