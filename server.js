module.exports=function(n){var e={};function t(A){if(e[A])return e[A].exports;var i=e[A]={i:A,l:!1,exports:{}};return n[A].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=n,t.c=e,t.d=function(n,e,A){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:A})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var A=Object.create(null);if(t.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)t.d(A,i,function(e){return n[e]}.bind(null,i));return A},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=7)}([function(n,e){n.exports=require("react")},function(n,e){n.exports=require("express")},function(n,e,t){"use strict";function A(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(n)))return;var t=[],A=!0,i=!1,r=void 0;try{for(var a,o=n[Symbol.iterator]();!(A=(a=o.next()).done)&&(t.push(a.value),!e||t.length!==e);A=!0);}catch(n){i=!0,r=n}finally{try{A||null==o.return||o.return()}finally{if(i)throw r}}return t}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return i(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,A=new Array(e);t<e;t++)A[t]=n[t];return A}n.exports=function(n){var e=A(n,4),t=e[1],i=e[3];if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */"),c=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(c).concat([o]).join("\n")}return[t].join("\n")}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,A){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(A)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var o=0;o<n.length;o++){var c=[].concat(n[o]);A&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},function(n,e){n.exports=require("axios")},function(n,e){n.exports=require("react-router-dom")},function(n,e){n.exports=require("react-dom/server")},function(n,e,t){n.exports=t(8)},function(n,e,t){"use strict";t.r(e);var A=t(1),i=t.n(A);let r=t(12).default;e.default=i()().use((n,e)=>r.handle(n,e)).listen(3e3,(function(n){n?console.error(n):console.log("> Started on port 3000")}))},function(n,e,t){"use strict";var A=t(2),i=t.n(A),r=t(3),a=t.n(r)()(i.a);a.push([n.i,".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n","",{version:3,sources:["webpack://src/App.css"],names:[],mappings:"AAAA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE;IACE,4CAA4C;EAC9C;AACF;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF",sourcesContent:[".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],sourceRoot:""}])},function(n,e,t){"use strict";var A=t(2),i=t.n(A),r=t(3),a=t.n(r)()(i.a);a.push([n.i,'* Prevents Padding or borders from changing box size */\nhtml { box-sizing: border-box; }\n*, \n*:before, \n*:after { box-sizing: inherit; }\n.row { position: relative; \nalign-content: center !important;}\n.row::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.row .col-md-3{\n  display:inline-block;\n  vertical-align: middle;\n  float: none;\n}\nbody{\n  background-color: #E0E0E0;\n  font-family: \'Poppins\', sans-serif;\n}\n.imgCard{\n  margin: 4%;\n  margin-left: 4%\n}\n.cardTitle{\n  text-decoration: underline;\n  \n}\n.fieldValue{\n  color: blue;\n}\n.cardLaunch{\n  background-color: white;\n  box-shadow: 0 0.1rem 0.2rem 0 rgba(0,0,0,0.2);\n  padding: 0.5% 5% 5% 5%;\n  margin-block-end: 5%\n  \n}\n.card-title{\n  align-items: flex-start;\n}\n.cardText{\n  align-items: center;\n  text-underline-position: below;\n}\n.btn{\n  background-color: #90ee90;\n  border: 0em;\n\n}\n.btn{\n  padding: 5%;\n  padding-left:8% ;\n  padding-right:8% ;\n  border-radius: 15%;\n  margin: 5%;\n}\n.btn:hover{\n  background-color: green;\n}\n\nimg{\n  width: 5rem;\n  background-color: #E0E0E0;\n  padding: 5%;\n  height: 5rem;\n}\n/* Columns */\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0.1rem 0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2);\n  transition: 0.3s;\n  background-color: white;\n  padding: 0.5% 3% 3% 3%;\n  padding-top: 15%;\n  padding-bottom: 15%;\n  margin-bottom: 5%;\n  border-radius: 4%;\n \n\n}\n.cardContain{\n  font-size: 1rem;\n  \n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n\n.col { \n  width: 100%; \n  float: left;\n  align-content: center;\n  font-size: 1rem;\n  height:90%\n}\n.colx { \n  width:40%; \n  display:inline-block;\n\n  align-items: center !important;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n/* For mobile phones: */\n[class*="col-"] {\n  width: 100%;\n}\n.tr {\n  display: flex;\n}\n\n\n.tc{\n  flex:30%\n}\n\n@media (max-width: 700px) {\n  .card{\n    height: 90%;\n  }\n  .fieldValue{\n    font-size: 1rem;\n  }\n  .cardContain{\n    font-size: 1 rem!important;\n  }\n  .fieldTitle{\n    font-size: 1 rem!important;\n    \n  }\n  .sm-1 { width: 10%; }\n  .sm-2 { width: 20%; }\n  .sm-3 { width: 30%; }\n  .sm-4 { width: 40%; }\n  .sm-5 { width: 50%; }\n  .sm-6 { width: 60%; }\n  .sm-7 { width: 70%; }\n  .sm-8 { width: 80%; }\n  .sm-9 { width: 90%; }\n  .sm-10 { width: 100%; }\n}\n\n@media (min-width: 700px) {\n\n  .md-1 { width: 10%; }\n  .md-2 { width: 20%; }\n  .md-3 { width: 30%; }\n  .md-4 { width: 40%; }\n  .md-5 { width: 50%; }\n  .md-6 { width: 60%; }\n  .md-7 { width: 70%; }\n  .md-8 { width: 80%; }\n  .md-9 { width: 90%; }\n  .md-10 { width: 100%; }\n}\n.Center {\n  width:200px;\n  height:200px;\n  position: fixed;\n  background-color: blue;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -100px;\n}\n@media (min-width: 1024px) {\n  .card{\n    height: 255px;\n  }\n  .btn{\n    padding: 5%;\n    padding-left:8% ;\n    padding-right:8% ;\n    border-radius: 15%;\n    margin: 5%;\n  }\n  .lg-1 { width: 10%; }\n  .lg-2 { width: 21%;\n  \n    padding-left: 15px;\n    padding-right: 15px;}\n  \n  .lg-3 { width: 30%; }\n  .lg-4 { width: 40%; }\n  .lg-5 { width: 50%; }\n  .lg-6 { width: 60%; }\n  .lg-7 { width: 72%; }\n  .lg-8 { width: 80%; }\n  .lg-9 { width: 90%; }\n  .lg-10 { width: 100%; }\n}\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 0;\n  width: 100%;\n  background-color:#E0E0E0;\n  text-align: center;\n}',"",{version:3,sources:["webpack://src/index.css"],names:[],mappings:"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",sourcesContent:['* Prevents Padding or borders from changing box size */\nhtml { box-sizing: border-box; }\n*, \n*:before, \n*:after { box-sizing: inherit; }\n.row { position: relative; \nalign-content: center !important;}\n.row::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n.row .col-md-3{\n  display:inline-block;\n  vertical-align: middle;\n  float: none;\n}\nbody{\n  background-color: #E0E0E0;\n  font-family: \'Poppins\', sans-serif;\n}\n.imgCard{\n  margin: 4%;\n  margin-left: 4%\n}\n.cardTitle{\n  text-decoration: underline;\n  \n}\n.fieldValue{\n  color: blue;\n}\n.cardLaunch{\n  background-color: white;\n  box-shadow: 0 0.1rem 0.2rem 0 rgba(0,0,0,0.2);\n  padding: 0.5% 5% 5% 5%;\n  margin-block-end: 5%\n  \n}\n.card-title{\n  align-items: flex-start;\n}\n.cardText{\n  align-items: center;\n  text-underline-position: below;\n}\n.btn{\n  background-color: #90ee90;\n  border: 0em;\n\n}\n.btn{\n  padding: 5%;\n  padding-left:8% ;\n  padding-right:8% ;\n  border-radius: 15%;\n  margin: 5%;\n}\n.btn:hover{\n  background-color: green;\n}\n\nimg{\n  width: 5rem;\n  background-color: #E0E0E0;\n  padding: 5%;\n  height: 5rem;\n}\n/* Columns */\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0.1rem 0.5rem 0.5rem 0.5rem rgba(0,0,0,0.2);\n  transition: 0.3s;\n  background-color: white;\n  padding: 0.5% 3% 3% 3%;\n  padding-top: 15%;\n  padding-bottom: 15%;\n  margin-bottom: 5%;\n  border-radius: 4%;\n \n\n}\n.cardContain{\n  font-size: 1rem;\n  \n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n\n.col { \n  width: 100%; \n  float: left;\n  align-content: center;\n  font-size: 1rem;\n  height:90%\n}\n.colx { \n  width:40%; \n  display:inline-block;\n\n  align-items: center !important;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n/* For mobile phones: */\n[class*="col-"] {\n  width: 100%;\n}\n.tr {\n  display: flex;\n}\n\n\n.tc{\n  flex:30%\n}\n\n@media (max-width: 700px) {\n  .card{\n    height: 90%;\n  }\n  .fieldValue{\n    font-size: 1rem;\n  }\n  .cardContain{\n    font-size: 1 rem!important;\n  }\n  .fieldTitle{\n    font-size: 1 rem!important;\n    \n  }\n  .sm-1 { width: 10%; }\n  .sm-2 { width: 20%; }\n  .sm-3 { width: 30%; }\n  .sm-4 { width: 40%; }\n  .sm-5 { width: 50%; }\n  .sm-6 { width: 60%; }\n  .sm-7 { width: 70%; }\n  .sm-8 { width: 80%; }\n  .sm-9 { width: 90%; }\n  .sm-10 { width: 100%; }\n}\n\n@media (min-width: 700px) {\n\n  .md-1 { width: 10%; }\n  .md-2 { width: 20%; }\n  .md-3 { width: 30%; }\n  .md-4 { width: 40%; }\n  .md-5 { width: 50%; }\n  .md-6 { width: 60%; }\n  .md-7 { width: 70%; }\n  .md-8 { width: 80%; }\n  .md-9 { width: 90%; }\n  .md-10 { width: 100%; }\n}\n.Center {\n  width:200px;\n  height:200px;\n  position: fixed;\n  background-color: blue;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: -100px;\n}\n@media (min-width: 1024px) {\n  .card{\n    height: 255px;\n  }\n  .btn{\n    padding: 5%;\n    padding-left:8% ;\n    padding-right:8% ;\n    border-radius: 15%;\n    margin: 5%;\n  }\n  .lg-1 { width: 10%; }\n  .lg-2 { width: 21%;\n  \n    padding-left: 15px;\n    padding-right: 15px;}\n  \n  .lg-3 { width: 30%; }\n  .lg-4 { width: 40%; }\n  .lg-5 { width: 50%; }\n  .lg-6 { width: 60%; }\n  .lg-7 { width: 72%; }\n  .lg-8 { width: 80%; }\n  .lg-9 { width: 90%; }\n  .lg-10 { width: 100%; }\n}\n.footer {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 0;\n  width: 100%;\n  background-color:#E0E0E0;\n  text-align: center;\n}'],sourceRoot:""}])},function(n){n.exports=JSON.parse('{"client":{"css":["/static/css/client.a705de01.css"],"js":["/static/js/client.8e1c19cc.js"],"map":["/static/css/client.a705de01.css.map","/static/js/client.8e1c19cc.js.map"],"chunks":[0]},"noentry":{"ico":["/favicon.ico"],"txt":["/robots.txt","/static/js/client.8e1c19cc.js.LICENSE.txt"]}}')},function(n,e,t){"use strict";t.r(e);var A=t(0),i=t.n(A),r=t(4),a=t.n(r),o=(t(9),i.a.createElement);function c({flight_number:n,mission_name:e,mission_id:t,launch_year:A,launch_success:i,links:r,rocket:a}){const c=r.mission_patch_small;return o("div",{className:" col sm-10 md-10 lg-2"},o("div",{className:"card"},o("div",{className:"imgCard"},o("img",{src:c,alt:e})),o("div",{className:"cardContain "},o("span",{className:"fieldValue"},e," # ",n),o("div",{className:"fieldTitle"},"Mission ids: ",o("span",{className:"fieldValue"},t)),o("div",null,"Launch Year :",o("span",{className:"fieldValue"},A)),o("div",null,"Successful Launch:"," ",o("span",{className:"fieldValue"},i?"True":"False")),o("div",null,"Successful Land: ",o("span",{className:"fieldValue"},"True")))))}var l=i.a.createElement;var d=({title:n})=>l("h1",null,n),s=i.a.createElement;var p=({title:n})=>s("h1",{className:"footer"},n),E=i.a.createElement;var u=({onSetComponent:n,launchComponent:e,title:t})=>E("div",{className:"cardContainer"},E("div",{className:"CardText cardTitle"},t," "),E("div",{className:"row "},e.map(e=>{return E("div",{class:"colx sm-3 md-3 lg-3"},E("button",{className:"btn ",value:e.val,style:{backgroundColor:e.active?"green":"#90ee90"},onClick:()=>{n(e.val,e.active)}},!1===(t=e.val)||!0===t?e.val?"True":"False":e.val));var t}))),m=i.a.createElement;var C=({onSetYear:n,LaunchYears:e,onSetLaunch:t,onSetLand:A,LaunchSuccess:i,LandSuccess:r})=>m("div",{className:"cardLaunch"},m("h3",{style:{textAlignLast:"left"}},"Filters"),m(u,{onSetComponent:n,launchComponent:e,title:"Launch Year"}),m(u,{onSetComponent:t,launchComponent:i,title:"Launch Success"}),m(u,{onSetComponent:A,launchComponent:r,title:"Land Success"})),h=(t(10),i.a.createElement);function g(){return(g=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var A in t)Object.prototype.hasOwnProperty.call(t,A)&&(n[A]=t[A])}return n}).apply(this,arguments)}function f(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(n);e&&(A=A.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,A)}return t}function B(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?f(Object(t),!0).forEach((function(e){b(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function b(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var v=function(){const{0:n,1:e}=Object(A.useState)([]),{0:t,1:i}=Object(A.useState)(n),r=[{val:"2006",active:!1},{val:"2007",active:!1},{val:"2008",active:!1},{val:"2009",active:!1},{val:"2010",active:!1},{val:"2011",active:!1},{val:"2012",active:!1},{val:"2013",active:!1},{val:"2014",active:!1},{val:"2015",active:!1},{val:"2016",active:!1},{val:"2017",active:!1},{val:"2018",active:!1},{val:"2019",active:!1},{val:"2020",active:!1}],o=[{val:!0,active:!1},{val:!1,active:!1}],{0:l,1:s}=Object(A.useState)(r),{0:E,1:u}=Object(A.useState)(o),{0:m,1:f}=Object(A.useState)(o);Object(A.useEffect)(()=>{b()},[]);const b=async()=>{const n=await a.a.get("https://api.spacexdata.com/v3/launches?limit=100");e(n.data),i(n.data)};return h("div",{className:"App"},h(d,{title:"SpaceX Launch Programs"}),h("div",{className:"row"},h("div",{className:" col sm-10 md-5 lg-2"},h(C,{onSetYear:(e,t)=>{if(t){i(n)}else{const t=n.filter(n=>n.launch_year===e);i(t)}s(l.map(n=>e===n.val?B(B({},n),{},{active:!n.active}):B(B({},n),{},{active:!1}))),u(o),f(o)},LaunchYears:l,onSetLaunch:(e,A)=>{if(A){i(n),s(r),f(o)}else{const n=t.filter(n=>n.launch_success===e);i(n)}u(E.map(n=>e===n.val?B(B({},n),{},{active:!n.active}):B(B({},n),{},{active:!1})))},onSetLand:(e,A)=>{!0===e?(i(t),f([{val:!0,active:!A},{val:!1,active:!1}])):A?(i(n),s(r),u(o),f(o)):(i([]),f([{val:!0,active:!1},{val:!1,active:!0}]))},LaunchSuccess:E,LandSuccess:m})),h("div",{className:"col sm-10 md-5 lg-7"},h("div",{className:"row"},t.map(n=>h(c,g({key:n.id},n)))))),h(p,{title:"Developed by Swati Ahuja"}))},w=t(5),x=t(1),y=t.n(x),U=t(6),k=i.a.createElement;const j=t(11),S=y()();S.disable("x-powered-by").use(y.a.static("build/public")).get("/*",(n,e)=>{const t={},A=Object(U.renderToString)(k(w.StaticRouter,{context:t,location:n.url},k(v,null)));t.url?e.redirect(t.url):e.status(200).send(`<!doctype html>\n    <html lang="">\n    <head>\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta charset="utf-8" />\n        <title></title>\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        ${((n,e)=>n[e]&&n[e].css?n[e].css.map(n=>`<link rel="stylesheet" href="${n}">`).join(""):"")(j,"client")}\n    </head>\n    <body>\n        <div id="root">${A}</div>\n        ${((n,e,t="")=>n[e]&&n[e].js?n[e].js.map(n=>`<script src="${n}"${t}><\/script>`).join(""):"")(j,"client"," defer crossorigin")}\n    </body>\n</html>`)});e.default=S}]);
//# sourceMappingURL=server.js.map