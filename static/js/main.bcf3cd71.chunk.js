(this["webpackJsonponline-burger-order"]=this["webpackJsonponline-burger-order"]||[]).push([[0],[,,,,,,,,,,,function(e,t,r){e.exports={BreadTop:"style_BreadTop__3FU4d",Seed:"style_Seed__1KoeQ",Second:"style_Second__1Pqs7",Third:"style_Third__2nCBY",Fourth:"style_Fourth__RddpF",Salad:"style_Salad__1v-fz",Meat:"style_Meat__cgab4",Cheese:"style_Cheese__2P0Zv",Bacon:"style_Bacon__17RRf",BreadBottom:"style_BreadBottom__1f3Es"}},,,,,,,,,,,function(e,t,r){e.exports={BuildControl:"style_BuildControl__1DmoK",Label:"style_Label__Ty7jw",Less:"style_Less__f2RgW",More:"style_More__3xINP"}},function(e,t,r){e.exports={SideBar:"style_SideBar__1Iqr_",Open:"style_Open__3vPQx",Close:"style_Close__unXIH",Logo:"style_Logo__YGH6F"}},,,,,,function(e,t,r){e.exports={Toolbar:"style_Toolbar__1VKMY",HideOnMobile:"style_HideOnMobile__2X2pc"}},function(e,t,r){e.exports={MenuItem:"style_MenuItem__1nY6M",active:"style_active__nPWrr"}},,,function(e,t,r){e.exports={BuildControls:"style_BuildControls__24OOq",OrderButton:"style_OrderButton__7yt1z",enable:"style_enable__2QRl_"}},function(e,t,r){e.exports={Button:"style_Button__Px7OS",Success:"style_Success__1lwPd",Danger:"style_Danger__2urYG"}},,,,,,,,,,,,function(e,t,r){e.exports={Content:"style_Content__229Yj"}},function(e,t,r){e.exports={Logo:"style_Logo__1_Dm9"}},function(e,t,r){e.exports={Menu:"style_Menu__zAink"}},function(e,t,r){e.exports={HamburgerMenu:"style_HamburgerMenu__3OSgz"}},function(e,t,r){e.exports={Burger:"style_Burger__1CM4_"}},function(e,t,r){e.exports={Modal:"style_Modal__3aIYv"}},function(e,t,r){e.exports={Shadow:"style_Shadow__13R-J"}},function(e,t,r){e.exports={Loader:"style_Loader__GcyOU",load1:"style_load1__2FbrO"}},function(e,t,r){e.exports={Order:"style_Order__2x_sy"}},function(e,t,r){e.exports={ShippingPage:"style_ShippingPage__2k_HI"}},function(e,t,r){e.exports={ContactData:"style_ContactData__2kJAD"}},function(e,t,r){e.exports={Login:"style_Login__32cB3"}},function(e,t,r){e.exports={SignUp:"style_SignUp__TX1bf"}},,,,,,,,,,function(e,t,r){},,function(e,t,r){},,,,,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r(1),a=r.n(o),c=r(24),s=r.n(c),i=r(16),u=r(17),l=r(4),d=r(45),j=(r(68),r(6)),O=r(7),b=r(9),h=r(8),p=r(5),g=r(46),f=r.n(g),_=r(29),x=r.n(_),m=r(47),S=r.n(m),v=r.p+"static/media/burger-logo.ec69c7f6.png",y=function(){return Object(n.jsx)("div",{className:S.a.Logo,children:Object(n.jsx)("img",{src:v})})},R=r(48),I=r.n(R),w=r(30),N=r.n(w),k=function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("li",{className:N.a.MenuItem,children:Object(n.jsx)(i.b,{exact:e.exact,activeClassName:N.a.active,to:e.link,children:e.children})})})},C=Object(l.b)((function(e){return{userId:e.loginSignUpReducer.userId}}))((function(e){return Object(n.jsx)("nav",{className:I.a.Menu,children:e.userId?Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(k,{exact:!0,link:"/",children:"\u0428\u0418\u041d\u042d \u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0410"}),Object(n.jsx)(k,{link:"/orders",children:"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u0423\u0423\u0414"}),Object(n.jsx)(k,{link:"/logout",children:"\u0413\u0410\u0420\u0410\u0425"})]}):Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(k,{link:"/login",children:"\u041d\u042d\u0412\u0422\u0420\u042d\u0425"}),Object(n.jsx)(k,{link:"/signup",children:"\u0411\u04ae\u0420\u0422\u0413\u04ae\u04ae\u041b\u042d\u0425"})]})})})),T=r(49),E=r.n(T),B=function(e){return Object(n.jsxs)("div",{onClick:e.callBack,className:E.a.HamburgerMenu,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})},D=function(e){return Object(n.jsxs)("header",{className:x.a.Toolbar,children:[Object(n.jsx)(B,{callBack:e.showSideBar}),Object(n.jsx)(y,{}),Object(n.jsx)("div",{className:x.a.HideOnMobile,children:Object(n.jsx)(C,{})})]})},U=(r(70),r(50)),A=r.n(U),L=r(11),P=r.n(L),M=function(e){switch(e.type){case"bread-top":return Object(n.jsxs)("div",{className:P.a.BreadTop,children:[Object(n.jsx)("div",{className:P.a.Seed}),Object(n.jsx)("div",{className:P.a.Seed+" "+P.a.Second}),Object(n.jsx)("div",{className:P.a.Seed+" "+P.a.Third}),Object(n.jsx)("div",{className:P.a.Seed+" "+P.a.Fourth})]});case"bacon":return Object(n.jsx)("div",{className:P.a.Bacon});case"cheese":return Object(n.jsx)("div",{className:P.a.Cheese});case"salad":return Object(n.jsx)("div",{className:P.a.Salad});case"meat":return Object(n.jsx)("div",{className:P.a.Meat});case"bread-bottom":return Object(n.jsx)("div",{className:P.a.BreadBottom});default:return Object(n.jsx)("div",{children:"..."})}},G=Object(l.b)((function(e){return{ingredients:e.burgerReducer.ingredients}}))((function(e){var t=[];return Object.entries(e.ingredients).map((function(e,r){for(var o=1;o<=e[1];o++)t.push(Object(n.jsx)(M,{type:e[0]},r+""+o))})),0==t.length&&(t=Object(n.jsx)("p",{children:"\u0422\u0430 \u043e\u0440\u0446\u043e\u043e \u0441\u043e\u043d\u0433\u043e\u043d \u0443\u0443."})),Object(n.jsxs)("div",{className:A.a.Burger,children:[Object(n.jsx)(M,{type:"bread-top"}),t,Object(n.jsx)(M,{type:"bread-bottom"})]})})),F=r(2),H=r(33),V=r.n(H),Y=r(22),J=r.n(Y),X=function(e){return Object(n.jsxs)("div",{className:J.a.BuildControl,children:[Object(n.jsx)("span",{className:J.a.Label,children:e.name}),Object(n.jsx)("button",{className:J.a.More,onClick:function(){return e.add(e.type)},children:"\u041d\u044d\u043c\u044d\u0445"}),Object(n.jsx)("button",{className:J.a.Less,onClick:function(){return e.remove(e.type)},disabled:e.disabled[e.type],children:"\u0425\u0430\u0441\u0430\u0445"})]})},z=Object(l.b)((function(e){return{ingredients:e.burgerReducer.ingredients,price:e.burgerReducer.totalPrice,ingredientsNames:e.burgerReducer.ingredientsNames,purchasing:e.burgerReducer.purchasing}}),(function(e){return{add:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ortsNer:e}}(t))},remove:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ortsNer:e}}(t))}}}))((function(e){var t=Object(F.a)({},e.ingredients);for(var r in t)t[r]=t[r]<=0;return Object(n.jsxs)("div",{className:V.a.BuildControls,children:[Object(n.jsxs)("h5",{children:["\u041d\u0438\u0439\u0442 \u04af\u043d\u044d ",e.price]}),Object.keys(e.ingredientsNames).map((function(r){return Object(n.jsx)(X,{disabled:t,type:r,name:e.ingredientsNames[r],add:e.add,remove:e.remove},r)})),Object(n.jsx)("button",{onClick:e.show,className:V.a.OrderButton,disabled:!e.purchasing,children:"\u0417\u0430\u0445\u0438\u0430\u043b\u0430\u0445"})]})})),W=r(51),q=r.n(W),K=r(52),Q=r.n(K),Z=function(e){return e.isShow?Object(n.jsx)("div",{className:Q.a.Shadow,onClick:e.hide}):null},$=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Z,{isShow:e.isShow,hide:e.hide}),Object(n.jsx)("div",{className:q.a.Modal,style:{transform:e.isShow?"translateY(0)":"translateY(-100vh)",opacity:e.isShow?1:0},children:e.children})]})},ee=r(34),te=r.n(ee),re=function(e){return Object(n.jsx)("button",{className:te.a.Button+" "+te.a[e.btnType],onClick:e.callBack,children:e.text})},ne=Object(l.b)((function(e){return{ingredients:e.burgerReducer.ingredients,ingredientsNames:e.burgerReducer.ingredientsNames,price:e.burgerReducer.totalPrice}}))((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"\u0422\u0430\u043d\u044b \u0437\u0430\u0445\u0438\u0430\u043b\u0433\u0430"}),Object.keys(e.ingredients).map((function(t){return Object(n.jsxs)("li",{children:[e.ingredientsNames[t]," : ",e.ingredients[t]]},t)})),Object(n.jsxs)("strong",{children:["\u041d\u0438\u0439\u0442 \u04af\u043d\u044d : ",e.price]}),Object(n.jsx)("br",{}),Object(n.jsx)(re,{text:"\u0426\u0423\u0426\u041b\u0410\u0425",btnType:"Danger",callBack:e.onCancelOrder}),Object(n.jsx)(re,{text:"\u04ae\u0420\u0413\u042d\u041b\u0416\u041b\u04ae\u04ae\u041b\u042d\u0425",btnType:"Success",callBack:e.onContinueOrder})]})})),oe=r(19),ae=r.n(oe),ce=ae.a.create({baseURL:"https://online-burger-order-ad12d-default-rtdb.europe-west1.firebasedatabase.app/"}),se=r(53),ie=r.n(se),ue=function(){return Object(n.jsx)("div",{className:ie.a.Loader})},le=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={confirmOrder:!1,loading:!1},e.showConfirmOrder=function(){e.setState({confirmOrder:!0})},e.hideConfirmOrder=function(){e.setState({confirmOrder:!1})},e.continueOrder=function(){e.props.history.push({pathname:"/ship"}),e.hideConfirmOrder()},e}return Object(O.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)($,{isShow:this.state.confirmOrder,hide:this.hideConfirmOrder,children:this.state.loading?Object(n.jsx)(ue,{}):Object(n.jsx)(ne,{onCancelOrder:this.hideConfirmOrder,onContinueOrder:this.continueOrder})}),Object(n.jsx)(G,{}),Object(n.jsx)(z,{show:this.showConfirmOrder})]})}}]),r}(o.Component),de=r(23),je=r.n(de),Oe=function(e){var t=[je.a.SideBar];return e.isShow?t.push(je.a.Open):t.push(je.a.Close),Object(n.jsxs)("div",{onClick:e.hideSideBar,children:[Object(n.jsx)(Z,{isShow:e.isShow}),Object(n.jsxs)("div",{className:t.join(" "),children:[Object(n.jsx)("div",{className:je.a.Logo,children:Object(n.jsx)(y,{})}),Object(n.jsx)(C,{})]})]})},be=(r(88),r(54)),he=r.n(be),pe=function(e){return Object(n.jsxs)("div",{className:he.a.Order,children:[Object(n.jsxs)("p",{children:["\u041d\u0438\u0439\u0442 \u04af\u043d\u044d : ",e.order.une]}),Object(n.jsxs)("p",{children:["\u041e\u0440\u0446 : ",Object.entries(e.order.orts).map((function(e){return e[0]+" : "+e[1]+" "}))]}),Object(n.jsxs)("p",{children:["\u0425\u0430\u044f\u0433 : ",e.order.tuhai.hayg]})]})},ge=function(){return{type:"LOAD_ORDERS_START"}},fe=function(e){return{type:"LOAD_ORDERS_SUCCESS",orders:e}},_e=function(e){return{type:"LOAD_ORDERS_ERROR",error:e}},xe=function(){return{type:"SAVE_ORDER_START"}},me=function(){return{type:"SAVE_ORDER_SUCCESS"}},Se=function(e){return{type:"SAVE_ORDER_ERROR",error:e}},ve=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).componentDidMount=function(){e.props.servereesUnshih()},e}return Object(O.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{children:this.props.loading?Object(n.jsx)(ue,{}):this.props.orders.map((function(e){return Object(n.jsx)(pe,{order:e[1]},e[0])}))})}}]),r}(a.a.Component),ye=Object(l.b)((function(e){return{loading:e.orderReducer.loading,orders:e.orderReducer.orders,error:e.orderReducer.error}}),(function(e){return{servereesUnshih:function(){return e((function(e,t){e(ge());var r=t().loginSignUpReducer.userId,n=t().loginSignUpReducer.token;ce.get("/orders.json?auth=".concat(n,'&orderBy="userId"&equalTo="').concat(r,'"')).then((function(t){return e(fe(Object.entries(t.data).reverse()))})).catch((function(t){return e(_e(t))}))}))}}}))(ve),Re=r(55),Ie=r.n(Re),we=r(56),Ne=r.n(we),ke=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={dugaar:null,hayg:null,ner:null},e.componentDidUpdate=function(){e.props.finished&&!e.props.error&&e.props.history.replace("/orders")},e.confirmOrder=function(){var t=Object(F.a)({},e.state);delete t.loading;var r={orts:e.props.ingredients,une:e.props.totalPrice,tuhai:t,userId:e.props.userId};e.props.saveOrder(r)},e.changeName=function(t){e.setState({ner:t.target.value})},e.changeHayag=function(t){e.setState({hayg:t.target.value})},e.changePhone=function(t){e.setState({dugaar:t.target.value})},e}return Object(O.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{children:this.props.loading?Object(n.jsx)(ue,{}):Object(n.jsxs)("div",{className:Ne.a.ContactData,children:[Object(n.jsx)("input",{onChange:this.changeName,type:"text",name:"name",placeholder:"neree oruulna uu"}),Object(n.jsx)("input",{onChange:this.changeHayag,type:"text",name:"location",placeholder:"hayagaa oruulna uu"}),Object(n.jsx)("input",{onChange:this.changePhone,type:"text",name:"phone",placeholder:"utsaa oruulna uu"}),Object(n.jsx)(re,{btnType:"Success",callBack:this.confirmOrder,text:"\u04ae\u0420\u0413\u042d\u041b\u0416\u041b\u04ae\u04ae\u041b\u042d\u0425"})]})})}}]),r}(a.a.Component),Ce=Object(l.b)((function(e){return{ingredients:e.burgerReducer.ingredients,totalPrice:e.burgerReducer.totalPrice,loading:e.orderReducer.newOrder.loading,error:e.orderReducer.newOrder.error,finished:e.orderReducer.newOrder.finished,userId:e.loginSignUpReducer.userId}}),(function(e){return{saveOrder:function(t){return e(function(e){return function(t,r){t(xe());var n=r().loginSignUpReducer.token;ce.post("/orders.json?auth=".concat(n),e).then((function(e){return t(me())})).catch((function(e){return t(Se(e))}))}}(t))}}}))(Object(p.g)(ke)),Te=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).cancelOrder=function(){e.props.history.goBack()},e.showContuctData=function(){e.props.history.replace("/ship/contuct")},e}return Object(O.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:Ie.a.ShippingPage,children:[Object(n.jsx)(G,{}),Object(n.jsx)(re,{btnType:"Danger",text:"\u0417\u0410\u0425\u0418\u0410\u041b\u0413\u042b\u0413 \u0426\u0423\u0426\u041b\u0410\u0425",callBack:this.cancelOrder}),Object(n.jsx)(re,{btnType:"Success",text:"\u0425\u04ae\u0420\u0413\u042d\u041b\u0422\u0418\u0419\u041d \u041c\u042d\u0414\u042d\u042d\u041b\u042d\u041b \u041e\u0420\u0423\u0423\u041b\u0410\u0425",callBack:this.showContuctData}),Object(n.jsx)(p.b,{path:"/ship/contuct",children:Object(n.jsx)(Ce,{})})]})}}]),r}(a.a.Component),Ee=r(57),Be=r.n(Ee),De=function(){return{type:"LOGIN_START"}},Ue=function(e,t,r){return{type:"LOGIN_SUCCESS",token:e,userId:t,refreshToken:r}},Ae=function(e){return{type:"LOGIN_ERROR",error:e}},Le=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("refreshToken"),localStorage.removeItem("expireIn"),{type:"LOGOUT"}},Pe=function(e){return function(t){setTimeout((function(){return t(Le())}),e)}},Me=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={email:null,password:null},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword=function(t){e.setState({password:t.target.value})},e.login=function(){e.props.login(e.state.email,e.state.password)},e}return Object(O.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{children:this.props.loginIn?Object(n.jsx)(ue,{}):Object(n.jsxs)("div",{children:[this.props.userId&&Object(n.jsx)(p.a,{to:"/orders"}),Object(n.jsxs)("div",{className:Be.a.Login,children:[Object(n.jsx)("input",{onChange:this.changeEmail,type:"text",name:"email",placeholder:"John Doe"}),Object(n.jsx)("input",{onChange:this.changePassword,type:"text",name:"password",placeholder:"123456"}),this.props.error&&Object(n.jsx)("div",{style:{color:"red"},children:this.props.error.message}),Object(n.jsx)(re,{btnType:"Success",callBack:this.login,text:"\u041d\u042d\u0412\u0422\u0420\u042d\u0425"})]})]})})}}]),r}(a.a.Component),Ge=Object(l.b)((function(e){return console.log(e),{loginIn:e.loginSignUpReducer.loginIn,error:e.loginSignUpReducer.error,userId:e.loginSignUpReducer.userId}}),(function(e){return{login:function(t,r){return e(function(e,t){return function(r){r(De());var n={email:e,password:t,returnSecureToken:!0};ae.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvuh7Pf4J6kiMW8iyAEjNmMAxuIywX8i4",n).then((function(e){var t=e.data.idToken,n=e.data.localId,o=e.data.refreshToken,a=new Date((new Date).getTime()+36e5);r(Ue(t,n,o)),r(Pe(36e5)),localStorage.setItem("token",t),localStorage.setItem("userId",n),localStorage.setItem("refreshToken",o),localStorage.setItem("expireIn",a)})).catch((function(e){console.log(e),r(Ae(e))}))}}(t,r))}}}))(Me),Fe=r(58),He=r.n(Fe),Ve=function(){return{type:"SIGN_UP_START"}},Ye=function(e,t,r){return{type:"SIGN_UP_SUCCESS",token:e,userId:t,refreshToken:r}},Je=function(e){return{type:"SIGN_UP_ERROR",error:e}},Xe=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={email:null,password1:null,password2:null,error:null},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword1=function(t){e.setState({password1:t.target.value})},e.changePassword2=function(t){e.setState({password2:t.target.value})},e.signUp=function(){e.state.password1===e.state.password2?(e.props.signUp(e.state.email,e.state.password1),e.setState({error:null})):e.setState({error:"\u0422\u0430\u043d\u044b \u043d\u0443\u0443\u0446 \u04af\u0433\u044d\u044d \u0431\u0443\u0440\u0443\u0443 \u043e\u0440\u0443\u0443\u043b\u043b\u0430\u0430"})},e}return Object(O.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{children:this.props.saving?Object(n.jsx)(ue,{}):Object(n.jsxs)("div",{children:[this.props.userId&&Object(n.jsx)(p.a,{to:"/"}),Object(n.jsxs)("div",{className:He.a.SignUp,children:[Object(n.jsx)("input",{onChange:this.changeEmail,type:"text",name:"email",placeholder:"John Doe"}),Object(n.jsx)("input",{onChange:this.changePassword1,type:"text",name:"password1",placeholder:"123456"}),Object(n.jsx)("input",{onChange:this.changePassword2,type:"text",name:"password2",placeholder:"123456"}),Object(n.jsx)("div",{style:{color:"red"},children:this.state.error}),this.props.error&&Object(n.jsx)("div",{style:{color:"red"},children:this.props.error.message}),Object(n.jsx)(re,{btnType:"Success",callBack:this.signUp,text:"\u0411\u04ae\u0420\u0422\u0413\u04ae\u04ae\u041b\u042d\u0425"})]})]})})}}]),r}(a.a.Component),ze=Object(l.b)((function(e){return{saving:e.loginSignUpReducer.saving,error:e.loginSignUpReducer.error,userId:e.loginSignUpReducer.userId}}),(function(e){return{signUp:function(t,r){return e(function(e,t){return function(r){r(Ve());var n={email:e,password:t,returnSecureToken:!0};ae.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvuh7Pf4J6kiMW8iyAEjNmMAxuIywX8i4",n).then((function(e){console.log(e);var t=e.data.idToken,n=e.data.localId,o=e.data.refreshToken;r(Ye(t,n,o)),localStorage.setItem("token",t),localStorage.setItem("userId",n),localStorage.setItem("refreshToken",o)})).catch((function(e){console.log(e),r(Je(e))}))}}(t,r))}}}))(Xe),We=Object(l.b)(null,(function(e){return{logout:function(){return e(Le())}}}))((function(e){return e.logout(),Object(n.jsxs)("div",{children:[" ",Object(n.jsx)(p.a,{to:"/"})]})})),qe=function(e){Object(b.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={showSideBar:!1},e.toggleSideBar=function(){e.setState((function(e){return{showSideBar:!e.showSideBar}}))},e.componentDidMount=function(){var t=localStorage.getItem("token"),r=localStorage.getItem("userId"),n=localStorage.getItem("refreshToken"),o=new Date(localStorage.getItem("expireIn")).getTime();t&&((new Date).getTime()<o?(e.props.autoLogin(t,r,n),e.props.autoLogoutAfterMillisec(o-(new Date).getTime())):e.props.logout())},e}return Object(O.a)(r,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Oe,{isShow:this.state.showSideBar,hideSideBar:this.toggleSideBar}),Object(n.jsx)(D,{showSideBar:this.toggleSideBar}),Object(n.jsx)("main",{className:f.a.Content,children:this.props.userId?Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{path:"/ship",component:Te}),Object(n.jsx)(p.b,{path:"/orders",component:ye}),Object(n.jsx)(p.b,{path:"/logout",component:We}),Object(n.jsx)(p.b,{path:"/",exact:!0,component:le}),Object(n.jsx)(p.a,{to:"/orders"})]}):Object(n.jsxs)(p.d,{children:[Object(n.jsx)(p.b,{path:"/login",component:Ge}),Object(n.jsx)(p.b,{path:"/signup",component:ze}),Object(n.jsx)(p.a,{to:"/login"})]})})]})}}]),r}(o.Component),Ke=Object(l.b)((function(e){return{userId:e.loginSignUpReducer.userId}}),(function(e){return{autoLogin:function(t,r,n){return e(Ue(t,r,n))},logout:function(){return e(Le())},autoLogoutAfterMillisec:function(t){return e(Pe(t))}}}))(qe),Qe=r(21),Ze={ingredients:{cheese:0,meat:0,salad:0,bacon:0},ingredientsNames:{meat:"\u041c\u0430\u0445",cheese:"\u0411\u044f\u0441\u043b\u0430\u0433",bacon:"\u0425\u0438\u0430\u043c",salad:"\u0421\u0430\u043b\u0430\u0434"},totalPrice:1e3,purchasing:!1},$e={cheese:200,meat:450,salad:100,bacon:500},et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0;if("ADD_INGREDIENT"===t.type)return Object(F.a)(Object(F.a)({},e),{},{ingredients:Object(F.a)(Object(F.a)({},e.ingredients),{},Object(Qe.a)({},t.ortsNer,e.ingredients[t.ortsNer]+1)),totalPrice:e.totalPrice+$e[t.ortsNer],purchasing:!0});if("REMOVE_INGREDIENT"===t.type){var r=e.totalPrice-$e[t.ortsNer];return Object(F.a)(Object(F.a)({},e),{},{ingredients:Object(F.a)(Object(F.a)({},e.ingredients),{},Object(Qe.a)({},t.ortsNer,e.ingredients[t.ortsNer]-1)),totalPrice:r,purchasing:r>1e3})}return"LOGOUT"===t.type?Object(F.a)({},Ze):e},tt={orders:[],loading:!1,errors:null,newOrder:{loading:!1,finished:!1,error:null}},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ORDERS_START":return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case"LOAD_ORDERS_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{loading:!1,orders:t.orders});case"LOAD_ORDERS_ERROR":return Object(F.a)(Object(F.a)({},e),{},{loading:!1,errors:t.errors});case"SAVE_ORDER_START":return Object(F.a)(Object(F.a)({},e),{},{newOrder:Object(F.a)(Object(F.a)({},e.newOrder),{},{loading:!0,finished:!1})});case"SAVE_ORDER_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{newOrder:Object(F.a)(Object(F.a)({},e.newOrder),{},{loading:!1,finished:!0,error:null})});case"SAVE_ORDER_ERROR":return Object(F.a)(Object(F.a)({},e),{},{newOrder:Object(F.a)(Object(F.a)({},e.newOrder),{},{loading:!1,finished:!1,error:t.error})});case"LOGOUT":return Object(F.a)({},tt);default:return e}},nt={userId:null,token:null,refreshToken:null,saving:!1,loginIn:!1,error:null},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_UP_START":return Object(F.a)(Object(F.a)({},e),{},{saving:!0});case"SIGN_UP_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{saving:!1,error:null,userId:t.userId,token:t.token,refreshToken:t.refreshToken});case"SIGN_UP_ERROR":return Object(F.a)(Object(F.a)({},e),{},{saving:!1,error:t.error});case"LOGIN_START":return Object(F.a)(Object(F.a)({},e),{},{loginIn:!0});case"LOGIN_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{loginIn:!1,error:null,userId:t.userId,token:t.token,refreshToken:t.refreshToken});case"LOGIN_ERROR":return Object(F.a)(Object(F.a)({},e),{},{loginIn:!1,error:t.error});case"LOGOUT":return Object(F.a)(Object(F.a)({},e),{},{error:null,userId:null,token:null,refreshToken:null});default:return e}},at=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,ct={burgerReducer:et,orderReducer:rt,loginSignUpReducer:ot},st=[function(e){return function(t){return function(r){console.log("===> "+r.type),console.log("===> BEFORE ",e.getState());var n=t(r);return console.log("===> AFTER ",e.getState()),n}}},d.a],it=Object(u.e)(Object(u.c)(ct),at(u.a.apply(void 0,st)));s.a.render(Object(n.jsx)(l.a,{store:it,children:Object(n.jsx)(i.a,{children:Object(n.jsx)(Ke,{})})}),document.getElementById("root"))}],[[89,1,2]]]);
//# sourceMappingURL=main.bcf3cd71.chunk.js.map