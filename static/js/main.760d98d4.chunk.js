(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(e,t,n){e.exports=n.p+"static/media/README.317c6561.md"},167:function(e,t,n){e.exports=n(437)},172:function(e,t,n){},437:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),o=n.n(i),c=(n(172),n(35)),l=n(15),u=n(44),s=n(16);function p(){var e=Object(l.a)(["\n  padding: 2rem;\n  background: #eee;\n"]);return p=function(){return e},e}function h(){var e=Object(l.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n  height: 100vh;\n"]);return h=function(){return e},e}var d=s.a.div(h()),f=s.a.div(p()),m=function(e){var t=e.Sidebar,n=e.children;return r.a.createElement(u.a,null,r.a.createElement(d,null,r.a.createElement(t,null),r.a.createElement(f,null,n)))},g=n(25),v=n(26),b=n(28),E=n(27),y=n(29),O=n(52),j=n(53),k=n.n(j),C=n(161),w=n.n(C),S=n(162),P=n.n(S),x=n(66),D=n.n(x),A=n(160),N=n.n(A),R=n(88),q=n.n(R),I=n(163),B=n.n(I),L=n(150),T=n.n(L),F=function(e){return new Date(e).toISOString().slice(0,10)},z=function(e,t){return"trades"===e?function(e){return e.forEach(function(e){e.updatedAt=F(e.updatedAt),e.tradingPair=e.tradingPair.symbol}),e}(t):function(e){return e.forEach(function(e){e.createdAt=F(e.createdAt)}),e}(t)},H=n(92),M=n(67),W=n.n(M),J=n(93),V=n.n(J),$=n(47),G=n.n($),K=n(45),Q=n.n(K),U=n(152),X=n.n(U);function Y(){var e=Object(l.a)(["\n  padding: 2px 0 !important;\n  & > div {\n    margin: 0 20px;\n  }\n  & > Button {\n    margin: 13px;\n  }\n"]);return Y=function(){return e},e}function Z(){var e=Object(l.a)(["\n  position: absolute !important;\n  color: white !important;\n  right: 6rem;\n  top: 2.5rem;\n  display: block;\n"]);return Z=function(){return e},e}var _=Object(s.a)(Q.a)(Z()),ee=s.a.form(Y()),te=function(e){function t(e){var n;Object(g.a)(this,t);var a=(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).props,r=a.filter,i=a.dateRangeName,o=r&&r[i]&&r[i].lte?r[i].lte:"",c=r&&r[i]&&r[i].gte?r[i].gte:"";return n.state={display:!1,lte:o,gte:c,inputs:{}},n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"onDateChange",value:function(e,t){this.setState(Object(H.a)({},e,t))}},{key:"onInputChange",value:function(e,t,n){t[n]=e.target.value,this.setState({inputs:t})}},{key:"clearSearch",value:function(){var e=this,t={};this.setState({inputs:{},lte:"",gte:""},function(){e.updateFilter(t)})}},{key:"onSearchClick",value:function(){var e=this.props.dateRangeName,t=this.state,n=t.gte,a=t.lte,r=t.inputs,i=Object.assign(Object(H.a)({},e,{lte:a,gte:n}),r);this.updateFilter(i)}},{key:"updateFilter",value:function(e){var t=this.props,n=t.filter,a=t.onPropsChange;for(var r in n)delete n[r];a(Object.assign(n,e))}},{key:"displaySearch",value:function(e){this.setState({display:!e})}},{key:"render",value:function(){var e=this,t=this.props.attributes,n=this.state,a=n.lte,i=n.gte,o=n.display,c=n.inputs;return r.a.createElement("div",null,r.a.createElement(G.a,{title:"Search list"},r.a.createElement(_,{"aria-label":"Search list",className:"searchButton",onClick:function(){return e.displaySearch(o)}},r.a.createElement(X.a,null))),o&&r.a.createElement(ee,null,t.map(function(t){return r.a.createElement(W.a,{label:t,placeholder:t,key:t,margin:"normal",type:"search",value:c[t]||"",onChange:function(n){return e.onInputChange(n,c,t)}})})),o&&r.a.createElement(ee,{noValidate:!0},r.a.createElement(W.a,{id:"date",label:"Start Date",type:"date",value:i,onChange:function(t){return e.onDateChange("gte",t.target.value)},InputLabelProps:{shrink:!0}}),r.a.createElement(W.a,{id:"date",label:"End Date",type:"date",value:a,onChange:function(t){return e.onDateChange("lte",t.target.value)},InputLabelProps:{shrink:!0}}),r.a.createElement(G.a,{title:"Clear Search"},r.a.createElement(V.a,{variant:"contained",color:"primary",onClick:function(){return e.onSearchClick()}},"Search")),r.a.createElement(G.a,{title:"Clear Search"},r.a.createElement(V.a,{variant:"contained",onClick:function(){return e.clearSearch()}},"Clear"))))}}]),t}(r.a.Component),ne=n(86),ae=n.n(ne),re=n(87),ie=n.n(re),oe=n(153),ce=n.n(oe),le=n(155),ue=n.n(le),se=n(156),pe=n.n(se),he=n(154),de=n.n(he);function fe(){var e=Object(l.a)(["\n  flex-direction: row !important;\n  padding: 0 0 8px;\n  & > .form-label {\n    padding: 1rem !important;\n  }\n"]);return fe=function(){return e},e}function me(){var e=Object(l.a)(["\n  position: absolute !important;\n  color: white !important;\n  right: 3rem;\n  top: 2.5rem;\n  display: block;\n"]);return me=function(){return e},e}var ge=Object(s.a)(Q.a)(me()),ve=Object(s.a)(ce.a)(fe()),be=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={selected:{},display:!1},n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"handleCheckbox",value:function(e,t){var n=this.props;return function(e,t,n,a){if("withdraws"===a)return!!n[e[0]]&&!!n[e[0]].includes(t);for(var r=[],i=0;i<e.length;i++){var o=0===r.length?n:r[r.length-1];if(!o[e[i]])return!1;r.push(o[e[i]])}return!!r[r.length-1].inq&&!!r[r.length-1].inq.includes(t)}(e,t,n.filter,n.pageType)}},{key:"onOptionChange",value:function(e,t){var n=this.props,a=n.onPropsChange,r=n.filter;!function(e,t,n,a){if("withdraws"===a)return n[e[0]]||(n[e[0]]=[]),void(n[e[0]].includes(t)?n[e[0]].splice(n[e[0]].indexOf(t),1):n[e[0]].push(t));for(var r=[],i=0;i<e.length;i++){var o=0===r.length?n:r[r.length-1];o[e[i]]||(o[e[i]]={}),r.push(o[e[i]])}r[r.length-1].inq||(r[r.length-1].inq=[]),r[r.length-1].inq.includes(t)?r[r.length-1].inq.splice(r[r.length-1].inq.indexOf(t),1):r[r.length-1].inq.push(t)}(e,t,r,n.pageType),a(r)}},{key:"displayOption",value:function(e){this.setState({display:!e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.option,a=t.filterOptions,i=this.state.display;return r.a.createElement("div",null,r.a.createElement(G.a,{title:"Filter list"},r.a.createElement(ge,{"aria-label":"Filter list",className:"filterButton",onClick:function(){return e.displayOption(i)}},r.a.createElement(de.a,null))),i&&r.a.createElement(ie.a,{component:"fieldset"},a.map(function(t){var a=t.split("."),i=function(e,t){for(var n=[],a=0;a<e.length;a++){var r=0===n.length?t:n[n.length-1];n.push(r[e[a]])}return n[n.length-1]}(a,n);return r.a.createElement(ve,{key:a[0]},r.a.createElement(ae.a,{component:"legend",className:"form-label"},a[0]),i.map(function(t){return r.a.createElement(ue.a,{control:r.a.createElement(pe.a,{checked:e.handleCheckbox(a,t),onChange:function(){return e.onOptionChange(a,t)},value:t}),label:t,key:t})}))})))}}]),t}(r.a.Component),Ee=n(157),ye=n.n(Ee),Oe=n(94),je=n.n(Oe),ke=n(54),Ce=n.n(ke),we=n(158),Se=n.n(we),Pe=n(68),xe=n.n(Pe),De=n(51),Ae=n.n(De);function Ne(){var e=Object(l.a)(["\n  min-width: 700px;\n  width: auto;\n"]);return Ne=function(){return e},e}function Re(){var e=Object(l.a)(["\n  width: '100%';\n  overflow-x: 'auto';\n"]);return Re=function(){return e},e}var qe=Object(s.a)(Ae.a)(Re()),Ie=Object(s.a)(ye.a)(Ne()),Be=function(e){var t=e.columns,n=void 0===t?[]:t,a=e.data,i=void 0===a?[]:a;return r.a.createElement(qe,null,r.a.createElement(Ie,null,r.a.createElement(Se.a,null,r.a.createElement(xe.a,null,n.map(function(e){return r.a.createElement(Ce.a,{key:e},e)}))),0===i.length?r.a.createElement(je.a,null,r.a.createElement(xe.a,null,r.a.createElement(Ce.a,{colSpan:6,key:"noData",align:"center"},"Sorry, there is no data available"))):r.a.createElement(je.a,null,i.map(function(e){return r.a.createElement(xe.a,{key:e.uuid},Object.values(e).map(function(e){return r.a.createElement(Ce.a,{key:e},"".concat(e))}))}))))},Le=n(159),Te=n.n(Le),Fe=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleChangePage=function(e,t){var a=n.props,r=a.pagination,i=a.onPropsChange;r.number=t+1,i(r)},n.handleChangeRowsPerPage=function(e){var t=e.target.value,a=n.props,r=a.pagination,i=a.onPropsChange;r.size=t,r.number=1,i(r)},n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this,t=this.props.pagination,n=t.number,a=void 0===n?1:n,i=t.size,o=void 0===i?10:i,c=t.total,l=void 0===c?0:c;return r.a.createElement(Te.a,{rowsPerPageOptions:[3,5,10,20],component:"div",count:l,rowsPerPage:Number(o),page:Number(a-1),backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(t,n){return e.handleChangePage(t,n)},onChangeRowsPerPage:function(t){return e.handleChangeRowsPerPage(t)}})}}]),t}(r.a.Component);function ze(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n"]);return ze=function(){return e},e}var He=s.a.div(ze()),Me=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={data:[],isLoading:!0,pagination:{},filter:{},option:{}},n.onStateChange=n.onStateChange.bind(Object(O.a)(Object(O.a)(n))),n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location,n=k.a.parse(t.search.slice(1)),a=n.pagination?function(e){for(var t in e)e[t]=Number(e[t]);return e}(n.pagination):{},r=n.filter?n.filter:{};this.setState({pagination:a,filter:r},function(){return e.updateState()})}},{key:"updateHistory",value:function(){var e=this.props,t=e.type,n=e.history,a=this.state,r={filter:a.filter,pagination:a.pagination};n.push("/".concat(t,"?").concat(k.a.stringify(r)))}},{key:"updateState",value:function(){var e=this,t=this.props.type,n=this.state,a=n.filter,r=n.pagination;(function(e,t,n){return T.a.get("https://dynamic-table-server.herokuapp.com/".concat(e,".json"),{params:{filter:t,pagination:n},paramsSerializer:function(e){return k.a.stringify(e)}})})(t,a,r).then(function(n){var a=n.data;e.setState({data:z(t,a[t]),pagination:a.pagination,option:a.option,isLoading:!1},function(){return e.updateHistory()})})}},{key:"onStateChange",value:function(e){var t=this;this.setState({key:e,isLoading:!0},function(){t.updateState()})}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.columns,a=e.searchDateRange,i=e.searchAttributes,o=e.filterOptions,c=this.state,l=c.data,u=c.isLoading,s=c.pagination,p=c.filter,h=c.option;return r.a.createElement("div",null,r.a.createElement(N.a,{position:"static"},r.a.createElement(q.a,null,r.a.createElement(D.a,{variant:"h6",color:"inherit"},"".concat(t," Table")))),r.a.createElement(w.a,null,r.a.createElement(P.a,null,r.a.createElement(te,{filter:p,attributes:i,onPropsChange:this.onStateChange,dateRangeName:a}),r.a.createElement(be,{filter:p,option:h,onPropsChange:this.onStateChange,pageType:t,filterOptions:o}),u?r.a.createElement(He,null,r.a.createElement(B.a,{position:"center"})):r.a.createElement(Be,{columns:n,data:l}),r.a.createElement(Fe,{pagination:s,onPropsChange:this.onStateChange}))))}}]),t}(r.a.Component),We=Object(c.e)(Me),Je=["uuid","update at","volumn","price","side","symbol"],Ve=["uuid","volume","price"],$e=["tradingPair.symbol","side"],Ge=function(){return r.a.createElement(We,{type:"trades",columns:Je,searchAttributes:Ve,searchDateRange:"updatedAt",filterOptions:$e})},Ke=["uuid","create at","amount","status","bank reference number"],Qe=["uuid","amount","bankReferenceNumber"],Ue=["status"],Xe=function(){return r.a.createElement(We,{type:"withdraws",columns:Ke,searchAttributes:Qe,searchDateRange:"createAt",filterOptions:Ue})};function Ye(){var e=Object(l.a)(["\n  padding: 0.5rem 0;\n  :hover {\n    background-color: #eeeeee;\n    border: 1px solid #dadde9;\n  }\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(l.a)(["\n  color: rgba(0, 0, 0, 0.87);;\n  padding: var(--padding);\n  text-decoration: none;\n  opacity: 0.8;\n  &.active {\n    color: #2196f3;\n    font: large lighter bolder;\n    opacity: 1;\n  }\n"]);return Ze=function(){return e},e}function _e(){var e=Object(l.a)(["\n  color: rgba(0, 0, 0, 0.87);;\n  font-size: 1.25rem;\n"]);return _e=function(){return e},e}function et(){var e=Object(l.a)(["\n  display: grid;\n"]);return et=function(){return e},e}function tt(){var e=Object(l.a)(["\n  display: flex;\n  /* background: #002140; */\n  padding: var(--padding);\n"]);return tt=function(){return e},e}function nt(){var e=Object(l.a)(['\n  --padding: 1rem 2rem;\n  /* background: #001529; */\n  font-family: "Roboto", "Helvetica", "Arial", sans-serif;\n']);return nt=function(){return e},e}var at=s.a.div(nt()),rt=s.a.div(tt()),it=s.a.div(et()),ot=s.a.h3(_e()),ct=Object(s.a)(u.b).attrs({exact:!0,activeClassName:"active"})(Ze()),lt=s.a.div(Ye()),ut=function(){return r.a.createElement(at,null,r.a.createElement(rt,null,r.a.createElement(ot,null,"Dynamic Table")),r.a.createElement("hr",null),r.a.createElement(it,null,r.a.createElement(lt,null,r.a.createElement(ct,{to:"/"},"Home")),r.a.createElement(lt,null,r.a.createElement(ct,{to:"/trades"},"Trade")),r.a.createElement(lt,null,r.a.createElement(ct,{to:"/withdraws"},"Withdraw"))))},st=function(){return r.a.createElement("div",null,"Error 404, this page not found.")},pt=n(164),ht=n.n(pt),dt=n(165),ft=n.n(dt),mt=function(e){function t(e){var n;return Object(g.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={input:""},n}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(ft.a).then(function(e){return e.text()}).then(function(t){e.setState({input:t})})}},{key:"render",value:function(){var e=this.state.input;return r.a.createElement(ht.a,{source:e})}}]),t}(r.a.Component),gt=function(){return r.a.createElement(m,{Sidebar:ut},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:mt}),r.a.createElement(c.a,{exact:!0,path:"/trades",component:Ge}),r.a.createElement(c.a,{exact:!0,path:"/withdraws",component:Xe}),r.a.createElement(c.a,{component:st})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(gt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.760d98d4.chunk.js.map