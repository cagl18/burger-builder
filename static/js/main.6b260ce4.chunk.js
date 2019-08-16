(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__1jYc3",Label:"BuildControl__Label__33Z-p",Less:"BuildControl__Less__377MJ",More:"BuildControl__More__28-hQ"}},,,,,,function(e,t,n){e.exports={Content:"Layout__Content__LhJtv"}},,,,function(e,t,n){e.exports={Burger:"Burger__Burger__3K4F-"}},function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__3_01f"}},,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),l=(n(20),function(e){return e.children}),c=n(8),s=n.n(c),d=function(e){return r.a.createElement(l,null,console.log(s.a),r.a.createElement("div",null,"Toolbar, SideDrawer, Backdrop"),r.a.createElement("main",{className:s.a.Content},e.children))},u=n(11),m=n(3),b=n(4),_=n(6),g=n(5),p=n(7),f=n(14),v=n(1),B=n.n(v),h=function(e){function t(){return Object(m.a)(this,t),Object(_.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:B.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:B.a.BreadTop},r.a.createElement("div",{className:B.a.Seeds1}),r.a.createElement("div",{className:B.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:B.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:B.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:B.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:B.a.Salad});break;default:e=null}return e}}]),t}(a.Component),y=n(12),E=n.n(y),O=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(f.a)(Array(e.ingredients[t])).map(function(e,n){return r.a.createElement(h,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:E.a.Burger},r.a.createElement(h,{type:"bread-top"}),t,r.a.createElement(h,{type:"bread-bottom"}))},j=n(13),C=n.n(j),w=n(2),k=n.n(w),P=function(e){return r.a.createElement("div",{className:k.a.BuildControl},r.a.createElement("div",{className:k.a.Label},e.label),r.a.createElement("button",{className:k.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:k.a.More,onClick:e.added},"More"))},N=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],S=function(e){return r.a.createElement("div",{className:C.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,"$",e.price.toFixed(2))),N.map(function(t){return r.a.createElement(P,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}))};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){Object(u.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var L={salad:.5,cheese:.4,meat:1.3,bacon:.7},M=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(_.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:1,bacon:1,cheese:2,meat:2},totalPrice:4},n.addIngredientHandler=function(e){var t=n.state.ingredients[e]+1,a=x({},n.state.ingredients);a[e]=t;var r=L[e]+n.state.totalPrice;n.setState({totalPrice:r,ingredients:a})},n.removeIngredientHandler=function(e){var t=n.state.ingredients[e];if(!(t<=0)){var a=t-1,r=x({},n.state.ingredients);r[e]=a;var o=L[e]-n.state.totalPrice;n.setState({totalPrice:o,ingredients:r})}},n}return Object(p.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=x({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(l,null,r.a.createElement(O,{ingredients:this.state.ingredients}),r.a.createElement(S,{ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,price:this.state.totalPrice}))}}]),t}(a.Component);var A=function(){return r.a.createElement(d,null,r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.6b260ce4.chunk.js.map