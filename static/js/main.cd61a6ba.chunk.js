(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l",Logo:"SideDrawer__Logo__3TkPv"}},function(e,t,n){e.exports={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx"}},,function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},,function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",Logo:"Toolbar__Logo__1efBD",DesktopOnly:"Toolbar__DesktopOnly__WADUd"}},,function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT",enable:"BuildControls__enable__3jYIq"}},function(e,t,n){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout__Content__3pLYC"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo__Logo__19WaN"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},,,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__26to0"}},function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},function(e,t,n){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,n){e.exports={Modal:"Modal__Modal__32_-a"}},function(e,t,n){e.exports={Loader:"Spinner__Loader__1DDwY",load5:"Spinner__load5__3b3Nk"}},,function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},function(e,t,n){e.exports={ContactData:"ContactData__ContactData__1J81r"}},function(e,t,n){e.exports={Order:"Order__Order__4yi4Z"}},,function(e,t,n){e.exports=n(82)},,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(37),c=n.n(o),l=n(13),i=(n(59),n(1)),s=n(2),u=n(4),d=n(3),p=n(5),m=n(12),h=function(e){return e.children},g=n(38),_=n.n(g),b=n(20),f=n.n(b),v=n(39),E=n.n(v),y=n(40),O=n.n(y),C=function(e){return r.a.createElement("div",{className:O.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:E.a,alt:"MyBurger"}))},k=n(41),j=n.n(k),w=n(22),S=n.n(w),B=function(e){return r.a.createElement("li",{className:S.a.NavigationItem},r.a.createElement(l.b,{activeClassName:S.a.active,exact:e.exact,to:e.link},e.children))},N=function(){return r.a.createElement("ul",{className:j.a.NavigationItems},r.a.createElement(B,{link:"/",exact:!0},"Burger Builder"),r.a.createElement(B,{link:"/orders"},"Orders"))},D=n(44),x=n.n(D),I=function(e){return r.a.createElement("div",{className:x.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},P=function(e){return r.a.createElement("header",{className:f.a.Toolbar},r.a.createElement(I,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:f.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",{className:f.a.DesktopOnly},r.a.createElement(N,null)))},T=n(45),L=n.n(T),H=function(e){return e.show?r.a.createElement("div",{className:L.a.Backdrop,onClick:e.clicked}):null},M=n(15),A=n.n(M),U=function(e){var t=[A.a.SideDrawer,A.a.Close];return e.open&&(t=[A.a.SideDrawer,A.a.Open]),r.a.createElement(h,null,r.a.createElement(H,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:A.a.Logo},r.a.createElement(C,null)),r.a.createElement("nav",null,r.a.createElement(N,null))))},W=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},n.sideDrawerClosedHandler=function(){n.setState({showSideDrawer:!1})},n.tooglerSideDrawerHanlder=function(){n.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(P,{drawerToggleClicked:this.tooglerSideDrawerHanlder}),r.a.createElement(U,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:_.a.Content},this.props.children))}}]),t}(a.Component),Y=n(19),R=n(53),F=n(11),J=n.n(F),z=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:J.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:J.a.BreadTop},r.a.createElement("div",{className:J.a.Seeds1}),r.a.createElement("div",{className:J.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:J.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:J.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:J.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:J.a.Salad});break;default:e=null}return e}}]),t}(a.Component),q=n(46),$=n.n(q),Z=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(R.a)(Array(e.ingredients[t])).map(function(e,n){return r.a.createElement(z,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:$.a.Burger},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))},Q=n(25),G=n.n(Q),K=n(18),V=n.n(K),X=function(e){return r.a.createElement("div",{className:V.a.BuildControl},r.a.createElement("div",{className:V.a.Label},e.label),r.a.createElement("button",{className:V.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:V.a.More,onClick:e.added},"More"))},ee=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],te=function(e){return r.a.createElement("div",{className:G.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),ee.map(function(t){return r.a.createElement(X,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:G.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},ne=n(47),ae=n.n(ne),re=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal.js] will update")}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(H,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ae.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),oe=n(26),ce=n.n(oe),le=function(e){return r.a.createElement("button",{className:[ce.a.Button,ce.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ie=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] will update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}}," ",t),":",e.props.ingredients[t])});return r.a.createElement(h,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicius burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),r.a.createElement(le,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(le,{btnType:"Success",clicked:this.props.purchaseContinueHandler},"CONTINUE"))}}]),t}(a.Component),se=n(48),ue=n.n(se),de=function(){return r.a.createElement("div",{className:ue.a.Loader},"Loading...")},pe=n(49),me=n.n(pe).a.create({baseURL:"https://react-burger-builde.firebaseio.com/"}),he=function(e,t){return function(n){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHanlder=function(){t.setState({error:null})},t}return Object(p.a)(a,n),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(re,{show:this.state.error,modalClosed:this.errorConfirmedHanlder},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),a}(a.Component)};function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(n,!0).forEach(function(t){Object(Y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var be={salad:.5,cheese:.4,meat:1.3,bacon:.7},fe=he(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,totalPrice:4,purchasable:!1,purchasing:!1,loading:!1,error:!1},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=_e({},n.state.ingredients);a[e]=t;var r=n.state.totalPrice+be[e];n.setState({totalPrice:r,ingredients:a}),n.updatePurchaseState(a)},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var a=t-1,r=_e({},n.state.ingredients);r[e]=a;var o=n.state.totalPrice-be[e];n.setState({totalPrice:o,ingredients:r}),n.updatePurchaseState(r)}},n.purchaseHandler=function(){n.setState({purchasing:!0})},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){var e=[];for(var t in n.state.ingredients)e.push(encodeURIComponent(t)+"="+encodeURIComponent(n.state.ingredients[t]));e.push("price="+n.state.totalPrice);var a=e.join("&");n.props.history.push({pathname:"/checkout",search:"?"+a})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;me.get("/ingredients.json").then(function(t){e.setState({ingredients:t.data})}).catch(function(t){e.setState({error:!0})})}},{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=_e({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,a=this.state.error?r.a.createElement("p",null,"ingredients can't be loaded!! "):r.a.createElement(de,null);return this.state.ingredients&&(a=r.a.createElement(h,null,r.a.createElement(Z,{ingredients:this.state.ingredients}),r.a.createElement(te,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:this.purchaseHandler})),n=r.a.createElement(ie,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinueHandler:this.purchaseContinueHandler})),this.state.loading&&(n=r.a.createElement(de,null)),r.a.createElement(h,null,r.a.createElement(re,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),a)}}]),t}(a.Component),me),ve=n(50),Ee=n.n(ve),ye=function(e){return r.a.createElement("div",{className:Ee.a.CheckoutSummary},r.a.createElement("h1",null,"We hope it tastes well!"),r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(Z,{ingredients:e.ingredients})),r.a.createElement(le,{clicked:e.checkoutCancelled,btnType:"Danger"},"CANCEL"),r.a.createElement(le,{clicked:e.checkoutContinue,btnType:"Success"},"CONTINUE"))},Oe=n(51),Ce=n.n(Oe),ke=n(16),je=n.n(ke),we=function(e){var t=null;switch(e.inputtype){case"input":t=r.a.createElement("input",Object.assign({className:je.a.InputElement},e));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:je.a.InputElement},e));break;default:t=r.a.createElement("input",Object.assign({className:je.a.InputElement},e))}return r.a.createElement("div",{className:je.a.Input},r.a.createElement("label",{className:je.a.Label,htmlFor:""},e.label),t)},Se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orderForm:{name:"Carlos Gonzalez",street:"123 main st",zipCode:"10021",country:"USA",email:"test@test.com",deliveryMethod:"fastest"},loading:!1},n.orderHanlder=function(e){e.preventDefault(),n.setState({loading:!0});var t={ingredients:n.props.ingredients,price:n.props.price};me.post("/orders.json",t).then(function(e){console.log(e),n.setState({loading:!1}),n.props.history.push("/")}).catch(function(e){console.log(e),n.setState({loading:!1})})},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=r.a.createElement("form",null,r.a.createElement(we,{inputtype:"input",name:"name",type:"text",placeholder:"Your Name"}),r.a.createElement(we,{inputtype:"input",name:"email",type:"text",placeholder:"Your Mail"}),r.a.createElement(we,{inputtype:"input",name:"street",type:"text",placeholder:"Street"}),r.a.createElement(we,{inputtype:"input",name:"postal",type:"text",placeholder:"Postal Code"}),r.a.createElement(le,{btnType:"Success",clicked:this.orderHanlder},"ORDER"));return this.state.loading&&(e=r.a.createElement(de,null)),r.a.createElement("div",{className:Ce.a.ContactData},r.a.createElement("h4",null,"Enter your Contact Data"),e)}}]),t}(a.Component),Be=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:null,price:0},n.checkoutCancelHandler=function(){n.props.history.goBack()},n.checkoutContinueHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){console.log(this.props.location.search);var e=new URLSearchParams(this.props.location.search),t={},n=0,a=!0,r=!1,o=void 0;try{for(var c,l=e.entries()[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var i=c.value;"price"===i[0]?n=i[1]:t[i[0]]=+i[1]}}catch(s){r=!0,o=s}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}this.setState({ingredients:t,totalPrice:n})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(ye,{checkoutCancelled:this.checkoutCancelHandler,checkoutContinue:this.checkoutContinueHandler,ingredients:this.state.ingredients}),r.a.createElement(m.a,{path:this.props.match.path+"/contact-data",render:function(t){return r.a.createElement(Se,Object.assign({ingredients:e.state.ingredients,price:e.state.totalPrice},t))}}))}}]),t}(a.Component),Ne=n(52),De=n.n(Ne),xe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var a=t.map(function(e){return r.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")});return r.a.createElement("div",{className:De.a.Order},r.a.createElement("p",null,"Ingredients: ",a),r.a.createElement("p",null,"Price: ",r.a.createElement("strong",null,"USD $",Number.parseFloat(e.price).toFixed(2))))};function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach(function(t){Object(Y.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Te=he(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={orders:[],loading:!0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;me.get("/orders.json").then(function(t){var n=[];for(var a in t.data)n.push(Pe({},t.data[a],{id:a}));e.setState({loading:!1,orders:n})}).catch(function(t){e.setState({loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.orders.map(function(e){return r.a.createElement(xe,{key:e.id,ingredients:e.ingredients,price:e.price})}))}}]),t}(a.Component),me),Le=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(W,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/checkout",component:Be}),r.a.createElement(m.a,{path:"/orders",component:Te}),r.a.createElement(m.a,{path:"/",exact:!0,component:fe})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var He=r.a.createElement(l.a,null,r.a.createElement(Le,null));c.a.render(He,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[54,1,2]]]);
//# sourceMappingURL=main.cd61a6ba.chunk.js.map