(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){e.exports=t(111)},111:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),i=t(25),o=t(31),m=t(37),s=t(38),u=t(42),p=t(39),d=t(43),g=t(10),h=t(34),E=t(158),f=t(159),b=t(160),v=t(47),y=t(174),O=t(155),j=t(12),w=t(161),C=t(57),k=t(82),x=t.n(k),N=t(147),S=t(77),P=t(83),F=t(162),T=t(44),L=t.n(T),A=t(53),W=t(171),D=t(173),R=t(154),B=t(151),I=t(152),M=t(150);function q(e){var a=e.ifSignup,t=r.a.useState(!1),n=Object(g.a)(t,2),l=n[0],c=n[1],i=r.a.useState(""),o=Object(g.a)(i,2),m=o[0],s=o[1],u=r.a.useState(""),p=Object(g.a)(u,2),d=p[0],h=p[1],E=r.a.useState(""),f=Object(g.a)(E,2),b=f[0],v=f[1];function y(){c(!1)}var O=function(){var e=Object(A.a)(L.a.mark(function e(){var t,n,r;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c(!1),t={email:m,username:d,password:b},console.log(t),e.next=5,fetch("http://localhost:8000/signup ",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,console.log(r),a(r.userName);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(N.a,{color:"inherit",onClick:function(){c(!0)}},"Signup"),r.a.createElement(D.a,{open:l,onClose:y,"aria-labelledby":"form-dialog-title"},r.a.createElement(M.a,{id:"form-dialog-title"},"Signup"),r.a.createElement(B.a,null,r.a.createElement(I.a,null,"To subscribe to this website, please enter your email address here. We will send updates occasionally."),r.a.createElement(W.a,{autoFocus:!0,margin:"dense",id:"email",label:"Email Address",type:"email",fullWidth:!0,value:m,onChange:function(e){var a=e.target;return s(a.value)}}),r.a.createElement(W.a,{autoFocus:!0,margin:"dense",id:"name",label:"User Name",type:"text",fullWidth:!0,value:d,onChange:function(e){var a=e.target;return h(a.value)}}),r.a.createElement(W.a,{autoFocus:!0,margin:"dense",id:"password",label:"Password",type:"text",fullWidth:!0,value:b,onChange:function(e){var a=e.target;return v(a.value)}})),r.a.createElement(R.a,null,r.a.createElement(N.a,{onClick:y,color:"primary"},"Cancel"),r.a.createElement(N.a,{onClick:O,color:"primary"},"Signup"))))}function z(e){var a=e.handleLogin,t=r.a.useState(!1),n=Object(g.a)(t,2),l=n[0],c=n[1],i=r.a.useState(""),o=Object(g.a)(i,2),m=o[0],s=o[1],u=r.a.useState(""),p=Object(g.a)(u,2),d=p[0],h=p[1];function E(){c(!1)}return r.a.createElement("div",null,r.a.createElement(N.a,{color:"inherit",onClick:function(){c(!0)}},"Login"),r.a.createElement(D.a,{open:l,onClose:E,"aria-labelledby":"form-dialog-title"},r.a.createElement(M.a,{id:"form-dialog-title"},"Login"),r.a.createElement(B.a,null,r.a.createElement(I.a,null,"To subscribe to this website, please enter your email address here. We will send updates occasionally."),r.a.createElement(W.a,{autoFocus:!0,margin:"dense",id:"email",label:"Email Address",type:"email",fullWidth:!0,value:m,onChange:function(e){var a=e.target;return s(a.value)}}),r.a.createElement(W.a,{autoFocus:!0,margin:"dense",id:"password",label:"Password",type:"text",fullWidth:!0,value:d,onChange:function(e){var a=e.target;return h(a.value)}})),r.a.createElement(R.a,null,r.a.createElement(N.a,{onClick:E,color:"primary"},"Cancel"),r.a.createElement(N.a,{onClick:function(){c(!1),a(m,d),s(""),h("")},color:"primary"},"Login"))))}var G=t(80),J=t.n(G),U=t(157),Y=(t(3),t(112)),H=t(153),V=t(156),_=t(29),K=t.n(_);function Q(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var X=Object(O.a)(function(e){return{container:{display:"flex",flexWrap:"wrap"},grid:{textAlign:"center",marginLeft:"15%"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200},image:{padding:e.spacing(3,2),margin:"3%",width:"100%"}}});function Z(e){var a=e.userName,t=X(),n=r.a.useState({name:"",price:"",author:"",theme:"",description:""}),l=Object(g.a)(n,2),c=l[0],i=l[1],o=function(e){return function(a){i(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Q(t,!0).forEach(function(a){Object(h.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Q(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},c,Object(h.a)({},e,a.target.value)))}},m=function(){var e=Object(A.a)(L.a.mark(function e(){var t,n,r;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:c.name,price:c.price,author:c.author,theme:c.theme,description:c.description,seller:a},console.log(t),e.next=4,fetch("http://localhost:8000/paintings/add",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,console.log(r.message),i({name:"",price:"",author:"",theme:"",description:""}),alert("upload success!!");case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:t.container,noValidate:!0,autoComplete:"off"},r.a.createElement(V.a,{container:!0,spacing:3,className:t.grid},r.a.createElement(V.a,{item:!0,xs:4},r.a.createElement("img",{src:"".concat(K.a),className:t.image,alt:"painting"})),r.a.createElement(V.a,{className:t.grid,item:!0,xs:4},r.a.createElement(H.a,null,r.a.createElement(Y.a,null,r.a.createElement(W.a,{id:"standard-name",label:"Name",className:t.textField,value:c.name,onChange:o("name"),margin:"normal"})),r.a.createElement(Y.a,null,r.a.createElement(W.a,{id:"standard-uncontrolled",label:"Price",value:c.price,className:t.textField,onChange:o("price"),margin:"normal"})),r.a.createElement(Y.a,null,r.a.createElement(W.a,{required:!0,id:"standard-required",label:"Author",value:c.author,className:t.textField,onChange:o("author"),margin:"normal"})),r.a.createElement(Y.a,null,r.a.createElement(W.a,{required:!0,id:"standard-required",label:"Theme",value:c.theme,className:t.textField,onChange:o("theme"),margin:"normal"})),r.a.createElement(Y.a,null,r.a.createElement(W.a,{required:!0,id:"standard-required",label:"Description",multiline:!0,value:c.description,className:t.textField,onChange:o("description"),margin:"normal"})),r.a.createElement(Y.a,null,r.a.createElement(N.a,{size:"medium",variant:"contained",color:"primary",onClick:m},"Save"))))))}var $=Object(O.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}),ee=r.a.forwardRef(function(e,a){return r.a.createElement(U.a,Object.assign({direction:"up",ref:a},e))});function ae(e){var a=e.userName,t=$(),n=r.a.useState(!1),l=Object(g.a)(n,2),c=l[0],i=l[1];function o(){i(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{color:"inherit",onClick:function(){i(!0)}},"Sell Your Painting"),r.a.createElement(D.a,{fullScreen:!0,open:c,onClose:o,TransitionComponent:ee},r.a.createElement(E.a,{className:t.appBar},r.a.createElement(f.a,null,r.a.createElement(b.a,{edge:"start",color:"inherit",onClick:o,"aria-label":"close"},r.a.createElement(J.a,null)),r.a.createElement(v.a,{variant:"h6",className:t.title},"Painting"),r.a.createElement(N.a,{color:"inherit",onClick:o},"save"))),r.a.createElement(Z,{userName:a})))}var te=Object(O.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},link:{color:"white",textDecoration:"none",marginRight:25},title:Object(h.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(h.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(h.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}})}});function ne(e){return r.a.createElement(S.a,e,r.a.createElement("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}))}function re(e){e.onClickSignup;var a=te(),t=Object(n.useState)(!1),l=Object(g.a)(t,2),c=(l[0],l[1]),o=Object(n.useState)(""),m=Object(g.a)(o,2),s=m[0],u=m[1];var p=r.a.useState(null),d=Object(g.a)(p,2),h=d[0],O=d[1];function j(){c(!1)}return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,{position:"static"},r.a.createElement(f.a,null,r.a.createElement(b.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(ne,{color:"primary",fontSize:"large",component:function(e){return r.a.createElement("svg",e,r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"gradient1"},r.a.createElement("stop",{offset:"30%",stopColor:w.a[400]}),r.a.createElement("stop",{offset:"70%",stopColor:C.a[400]}))),r.a.cloneElement(e.children[0],{fill:"url(#gradient1)"}))}})),r.a.createElement(v.a,{className:a.title,variant:"h6",noWrap:!0},r.a.createElement(i.b,{className:a.link,to:"/"},"Home"),r.a.createElement(i.b,{className:a.link,to:"/paintings"},"Paintings"),r.a.createElement(ae,{userName:s})),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(x.a,null)),r.a.createElement(y.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})),""===s?r.a.createElement(z,{handleLogin:function(e,a){console.log(e);var t={email:e,password:a};fetch("http://localhost:8000/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){console.log(e),"User and password is correct"===e.message?u(e.userName):alert("invalid email or password")})}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{"aria-controls":"simple-menu","aria-haspopup":"true",variant:"outlined",style:{color:"white",marginTop:5},onClick:function(e){O(e.currentTarget)}},s),r.a.createElement(P.a,{id:"simple-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:function(){O(null)}},r.a.createElement(F.a,{onClick:j},"Profile"),r.a.createElement(F.a,{onClick:j},"My account"),r.a.createElement(F.a,{onClick:function(){c(!1),u(" ")}},"Logout"))),""===s?r.a.createElement(q,{ifSignup:function(e){u(e)}}):null)))}t(78);var le={image:{backgroundImage:"url(".concat(K.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover"}},ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"banner",style:le.image},r.a.createElement("div",{className:"welcome"},r.a.createElement("h1",null,"Welcome to Art World"),r.a.createElement(i.b,{to:"/paintings",className:"button"}," Enter Gallery"))))},ie=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={signupStatus:!1},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,{onClickSignup:this.onClickSignupHandler}),r.a.createElement(ce,null))}}]),a}(r.a.Component),oe=t(163),me=t(164),se=t(167),ue=t(166),pe=t(165),de=Object(O.a)({card:{maxWidth:345},media:{height:140},link:{textDecoration:"none",marginRight:10}});function ge(e){var a=e.name,t=e.description,n=de();return r.a.createElement(oe.a,{className:n.card},r.a.createElement(i.b,{to:"/paintings/detail/".concat(a),className:n.link},r.a.createElement(me.a,null,r.a.createElement(pe.a,{className:n.media,image:"".concat(K.a),title:"Contemplative Reptile"}),r.a.createElement(ue.a,null,r.a.createElement(v.a,{gutterBottom:!0,variant:"h5",component:"h2"},console.log(a),a),r.a.createElement(v.a,{variant:"body2",color:"textSecondary",component:"p"},t)))),r.a.createElement(se.a,null,r.a.createElement(N.a,{variant:"contained",color:"primary",className:n.button},"BUY NOW"),r.a.createElement(N.a,{size:"small",color:"primary"},"Share"),r.a.createElement(N.a,{size:"small",color:"primary"},"Learn More")))}var he=t(169),Ee=t(170),fe=t(168),be=t(58),ve=t.n(be),ye=Object(O.a)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,marginTop:"12%",marginLeft:10}}});function Oe(){var e=ye(),a=r.a.useState(1),t=Object(g.a)(a,2),n=t[0],l=t[1];function c(e,a){l(a)}return r.a.createElement("div",{className:e.root},r.a.createElement("h1",null,"Themes"),r.a.createElement(fe.a,null),r.a.createElement(H.a,{component:"nav","aria-label":"main mailbox folders"},r.a.createElement(Y.a,{button:!0,selected:0===n,onClick:function(e){return c(0,0)}},r.a.createElement(he.a,null,r.a.createElement(ve.a,null)),r.a.createElement(Ee.a,{primary:"LOVE"})),r.a.createElement(Y.a,{button:!0,selected:0===n,onClick:function(e){return c(0,0)}},r.a.createElement(he.a,null,r.a.createElement(ve.a,null)),r.a.createElement(Ee.a,{primary:"PEACE"})),r.a.createElement(Y.a,{button:!0,selected:0===n,onClick:function(e){return c(0,0)}},r.a.createElement(he.a,null,r.a.createElement(ve.a,null)),r.a.createElement(Ee.a,{primary:"FREEDOM"}))))}var je=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={paintings:[]},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8000/paintings").then(function(e){return e.json()}).then(function(a){e.setState({paintings:a}),console.log(e.state.paintings)})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(V.a,{item:!0,xs:3},r.a.createElement(Oe,null)),r.a.createElement(V.a,{item:!0,xs:9},r.a.createElement(V.a,{container:!0,spacing:1,style:{marginTop:10}},r.a.createElement(V.a,{item:!0,xs:12},r.a.createElement("h1",{style:{textAlign:"center"}},"ALL PAINTINGS")),this.state.paintings.map(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{item:!0,xs:4},r.a.createElement(ge,{name:e.name,description:e.description,id:e._id})))})))))}}]),a}(r.a.Component),we={image:{margin:"3%",width:"100%"},price:{margin:"8% 8%"}},Ce=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={name:t.props.match.params.name,price:"",author:"",theme:"",description:""},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.state.name;console.log(this.props.match.params),fetch("http://localhost:8000/paintings/detail/".concat(a)).then(function(e){return e.json()}).then(function(a){e.setState({price:a[0].price,author:a[0].author,theme:a[0].theme,description:a[0].description}),console.log(e.state.price)})}},{key:"render",value:function(){var e=this.state,a=e.name,t=e.price,n=e.author,l=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(V.a,{container:!0,spacing:3},r.a.createElement(V.a,{item:!0,xs:7},r.a.createElement("img",{src:"".concat(K.a),style:we.image,alt:"painting"})),r.a.createElement(V.a,{item:!0,xs:5},r.a.createElement(H.a,{component:"nav",style:we.price},r.a.createElement(Y.a,null,r.a.createElement(v.a,{variant:"h3"},"Name: ",a)),r.a.createElement(Y.a,null,r.a.createElement(v.a,{variant:"h3"},"Author: ",n)),r.a.createElement(Y.a,null,r.a.createElement(v.a,{variant:"h3"},"Price: ",t)),r.a.createElement(Y.a,null,r.a.createElement(v.a,{variant:"h3",wrap:!0},"Description:",r.a.createElement(v.a,{variant:"h5",wrap:!0},l))),r.a.createElement(Y.a,null,r.a.createElement(N.a,{variant:"contained",color:"primary",style:we.button},"BUY NOW"),r.a.createElement(N.a,{variant:"contained",color:"primary",style:{marginLeft:"5%"}},"ADD To CART"))))))}}]),a}(r.a.Component),ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"User"))};var xe=document.getElementById("root");c.a.render(r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(o.a,{path:"/",component:ie,exact:!0}),r.a.createElement(o.a,{path:"/paintings",component:je,exact:!0}),r.a.createElement(o.a,{path:"/paintings/detail/:name",component:Ce,exact:!0}),r.a.createElement(o.a,{path:"/user",component:ke,exact:!0})))},null),xe)},29:function(e,a,t){e.exports=t.p+"static/media/gallery.fbc3dcb8.jpeg"},78:function(e,a,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.27a3b73a.chunk.js.map