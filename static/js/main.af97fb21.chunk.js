(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l",Logo:"SideDrawer__Logo__3TkPv"}},function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",Logo:"Toolbar__Logo__1efBD",DesktopOnly:"Toolbar__DesktopOnly__WADUd"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__3_01f",OrderButton:"BuildControls__OrderButton__myBwT",enable:"BuildControls__enable__3jYIq"}},function(e,t,a){e.exports={Button:"Button__Button__QI7b2",Success:"Button__Success__2dHUt",Danger:"Button__Danger__2xnhN"}},,,,,,,,,,,function(e,t,a){e.exports={Content:"Layout__Content__3pLYC"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo__Logo__19WaN"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__26to0"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},,function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,a){e.exports={Modal:"Modal__Modal__32_-a"}},function(e,t,a){e.exports={Loader:"Spinner__Loader__1DDwY",load5:"Spinner__load5__3b3Nk"}},,,function(e,t,a){e.exports=a(59)},,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=(a(41),a(2)),i=a(3),s=a(5),u=a(4),d=a(6),p=function(e){return e.children},m=a(24),_=a.n(m),h=a(10),g=a.n(h),b=a(25),f=a.n(b),v=a(26),E=a.n(v),y=function(e){return r.a.createElement("div",{className:E.a.Logo,style:{height:e.height}},r.a.createElement("img",{src:f.a,alt:"MyBurger"}))},w=a(27),O=a.n(w),C=a(11),k=a.n(C),B=function(e){return r.a.createElement("li",{className:k.a.NavigationItem},r.a.createElement("a",{href:"{props.link}",className:e.active?k.a.active:null},e.children))},j=function(){return r.a.createElement("ul",{className:O.a.NavigationItems},r.a.createElement(B,{link:"/",active:!0},"Burger Builder"),r.a.createElement(B,{link:"/"},"Checkout"))},S=a(28),N=a.n(S),D=function(e){return r.a.createElement("div",{className:N.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},I=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement(D,{clicked:e.drawerToggleClicked}),r.a.createElement("div",{className:g.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",{className:g.a.DesktopOnly},r.a.createElement(j,null)))},T=a(29),L=a.n(T),x=function(e){return e.show?r.a.createElement("div",{className:L.a.Backdrop,onClick:e.clicked}):null},P=a(8),H=a.n(P),M=function(e){var t=[H.a.SideDrawer,H.a.Close];return e.open&&(t=[H.a.SideDrawer,H.a.Open]),r.a.createElement(p,null,r.a.createElement(x,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" ")},r.a.createElement("div",{className:H.a.Logo},r.a.createElement(y,null)),r.a.createElement("nav",null,r.a.createElement(j,null))))},A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.tooglerSideDrawerHanlder=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(I,{drawerToggleClicked:this.tooglerSideDrawerHanlder}),r.a.createElement(M,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:_.a.Content},this.props.children))}}]),t}(n.Component),Y=a(30),U=a(35),W=a(7),J=a.n(W),z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:J.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:J.a.BreadTop},r.a.createElement("div",{className:J.a.Seeds1}),r.a.createElement("div",{className:J.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:J.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:J.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:J.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:J.a.Salad});break;default:e=null}return e}}]),t}(n.Component),R=a(31),F=a.n(R),$=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(U.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(z,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:F.a.Burger},r.a.createElement(z,{type:"bread-top"}),t,r.a.createElement(z,{type:"bread-bottom"}))},Q=a(12),Z=a.n(Q),q=a(9),G=a.n(q),K=function(e){return r.a.createElement("div",{className:G.a.BuildControl},r.a.createElement("div",{className:G.a.Label},e.label),r.a.createElement("button",{className:G.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:G.a.More,onClick:e.added},"More"))},V=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],X=function(e){return r.a.createElement("div",{className:Z.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),V.map(function(t){return r.a.createElement(K,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:Z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},ee=a(32),te=a.n(ee),ae=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"componentWillUpdate",value:function(){console.log("[Modal.js] will update")}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(x,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:te.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),ne=a(13),re=a.n(ne),oe=function(e){return r.a.createElement("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},le=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillUpdate",value:function(){console.log("[OrderSummary] will update")}},{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}}," ",t),":",e.props.ingredients[t])});return r.a.createElement(p,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicius burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: $",this.props.price.toFixed(2))),r.a.createElement(oe,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),r.a.createElement(oe,{btnType:"Success",clicked:this.props.purchaseContinueHandler},"CONTINUE"))}}]),t}(n.Component),ce=a(33),ie=a.n(ce),se=function(){return r.a.createElement("div",{className:ie.a.Loader},"Loading...")},ue=a(34),de=a.n(ue).a.create({baseURL:"https://react-burger-builde.firebaseio.com/"});function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(a,!0).forEach(function(t){Object(Y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var _e={salad:.5,cheese:.4,meat:1.3,bacon:.7},he=function(e,t){return function(a){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={error:null},t}return Object(d.a)(n,a),Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;t.interceptors.response.use(null,function(t){e.setState({error:t})})}},{key:"render",value:function(){return r.a.createElement(p,null,r.a.createElement(ae,{show:!0},"Something didn't work!"),r.a.createElement(e,this.props))}}]),n}(n.Component)}(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1,loading:!1},a.addIngredientHandler=function(e){var t=a.state.ingredients[e]+1,n=me({},a.state.ingredients);n[e]=t;var r=a.state.totalPrice+_e[e];a.setState({totalPrice:r,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=me({},a.state.ingredients);r[e]=n;var o=a.state.totalPrice-_e[e];a.setState({totalPrice:o,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){a.setState({loading:!0});var e={ingredients:a.state.ingredients,price:a.state.totalPrice,customer:{name:"Carlos Gonzalez",address:{street:"123 main st",zipCode:"10021",country:"USA"},email:"test@test.com"},deliveryMethod:"fastest"};de.post("/orders.json",e).then(function(e){console.log(e),a.setState({loading:!1,purchasing:!1})}).catch(function(e){console.log(e),a.setState({loading:!1,purchasing:!1})})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=me({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;var a=r.a.createElement(le,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinueHandler:this.purchaseContinueHandler});return this.state.loading&&(a=r.a.createElement(se,null)),r.a.createElement(p,null,r.a.createElement(ae,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},a),r.a.createElement($,{ingredients:this.state.ingredients}),r.a.createElement(X,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,price:this.state.totalPrice,ordered:this.purchaseHandler}))}}]),t}(n.Component));var ge=function(){return r.a.createElement(A,null,r.a.createElement(he,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[36,1,2]]]);
//# sourceMappingURL=main.af97fb21.chunk.js.map