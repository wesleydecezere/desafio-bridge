(this["webpackJsonppwa-duodigit"]=this["webpackJsonppwa-duodigit"]||[]).push([[0],{688:function(e,t,n){"use strict";n.r(t);var r,o,a=n(0),i=n(20),c=n.n(i),s=n(95),u=n(16),l=n(6),d=n(4),b=function(e){var t=e.data,n=Object(a.useState)({sort:[""]}),r=Object(u.a)(n,2),o=r[0],i=r[1],c=t.sort((function(e,t){return function(e,t,n){var r="-"===n[0]?[n.slice(1),-1]:[n,1],o=Object(u.a)(r,2),a=o[0],i=o[1];return e[a]>t[a]?i:-i}(e,t,o.sort[0])}));return Object(d.jsx)(l.DataTable,{rows:c,sort:o.sort,onSortChange:function(e){return i((function(t){return Object(s.a)(Object(s.a)({},t),{},{sort:e})}))},loading:!1,columns:[{header:"N\xfamero",name:"number",render:function(e){return e.number},sortable:!0},{header:"Menor m\xfaltiplo duod\xedgito",name:"duodigit",render:function(e){return e.duodigit},sortable:!0},{header:"Tempo c\xe1lculo",name:"time",render:function(e){return e.time},sortable:!0}]})},m=function(){return Object(d.jsxs)(l.VFlow,{vSpacing:0,style:{paddingBottom:"30px"},children:[Object(d.jsx)(l.Heading,{level:1,children:"Calculadora de menor m\xfaltiplo duod\xedgito"}),Object(d.jsx)(l.Text,{"aria-label":"description",fontStyle:"italic",children:"Insira um n\xfamero real maior que 100. Ao clicar em \u201cCalcular\u201d, o app ir\xe1 lhe informar qual o menor m\xfaltiplo duod\xedgito (somente dois d\xedgitos distintos) do n\xfamero informado."})]})},j=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(d.jsx)(l.Modal,{size:"small",onClose:function(){return r(!1)},open:n,children:Object(d.jsxs)(l.ModalBody,{children:[Object(d.jsxs)(l.HFlow,{alignItems:"center",children:[Object(d.jsx)(l.Icon,{icon:"infoCircleOutline",style:{marginRight:"0.5rem"},size:3,fill:"info"}),Object(d.jsxs)("div",{children:[Object(d.jsx)(l.Heading,{level:1,children:"Tempo excedido"}),Object(d.jsx)(l.Heading,{level:5,children:"A opera\xe7\xe3o solicitada \xe9 muito longa"})]})]}),Object(d.jsx)("p",{children:"O servidor est\xe1 configurado para testar os m\xfaltiplos do n\xfamero informado com fatores de valor at\xe9 5 milh\xf5es, o que leva cerca de 5 segundos. Caso nenhum destes m\xfaltiplos seja duod\xedgito, este erro \xe9 retornado."})]})})},f=n(66),p=n(67),h=Object(p.a)(r||(r=Object(f.a)(["\n  body {\n    margin: 0;\n    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"]))),O=n(22),g=n.n(O),x=n(38),v=null!==(o=Object({NODE_ENV:"production",PUBLIC_URL:"/wesleydecezere.github.io/desafio-bridge",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_BACKEND_URL)&&void 0!==o?o:"http://localhost:5000";function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(x.a)(g.a.mark((function e(t,n){var r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.concat(t),o={method:"POST",body:JSON.stringify(n),headers:{"content-type":"application/json"}},e.abrupt("return",fetch(r,o).then((function(e){if(!e.ok)throw new Error("Communication has failed");return e})).then((function(e){return e.json()})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return C.apply(this,arguments)}function C(){return(C=Object(x.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/duodigit",e.next=3,w("/duodigit",{number:t});case 3:if((n=e.sent).ok){e.next=6;break}throw new Error("Opera\xe7\xe3o muito longa...");case 6:return e.abrupt("return",n.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k,T=function(e,t){for(var n=0;n<t.length;n+=1)if(e===t[n].number)return!0;return!1},F=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),i=Object(u.a)(o,2),c=i[0],s=i[1],m=Object(a.useState)(),f=Object(u.a)(m,2),p=f[0],h=f[1],O=Object(a.useState)(""),v=Object(u.a)(O,2),w=v[0],y=v[1],C=function(){var e=Object(x.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n<100||Number.isNaN(n))){e.next=3;break}return y("Insira um n\xfamero maior que 100."),e.abrupt("return");case 3:if(!T(n,c)){e.next=6;break}return y("O n\xfamero informado j\xe1 foi processado."),e.abrupt("return");case 6:return y(""),e.next=9,S(n).then((function(e){return s((function(t){return t.concat(e)}))})).catch((function(){h(Object(d.jsx)(d.Fragment,{})),h(Object(d.jsx)(j,{}))}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(l.VFlow,{vSpacing:2,style:{justifyContent:"space-between",flexGrow:1},children:[Object(d.jsx)(l.TextField,{type:"Number",label:"Numero",placeholder:"Digite um n\xfamero inteiro maior que 100",error:w,required:!0,onChange:function(e){return r(parseFloat(e.target.value))}}),Object(d.jsx)(b,{data:c}),Object(d.jsx)(l.Button,{kind:"primary",size:"large",onClick:C,children:"Calcular"}),p]})},E=p.b.div(k||(k=Object(f.a)(["\n  width: 90vw;\n  height: 100vh;\n  padding: 20px 0;\n  margin: auto;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n"])));var N=function(){return Object(d.jsxs)(E,{children:[Object(d.jsx)(m,{}),Object(d.jsx)(F,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,695)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),a(e),i(e)}))};c.a.render(Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(N,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),_()}},[[688,1,2]]]);
//# sourceMappingURL=main.7a728aaf.chunk.js.map