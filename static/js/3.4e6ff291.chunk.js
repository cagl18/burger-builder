(window["webpackJsonpburger-builder"]=window["webpackJsonpburger-builder"]||[]).push([[3],{100:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},101:function(e,t,a){e.exports={ContactData:"ContactData__ContactData__1J81r"}},104:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(5),l=a(7),i=a(6),o=a(8),c=a(0),u=a.n(c),d=a(22),s=a(54),p=a(34),m=a(100),h=a.n(m),v=function(e){return u.a.createElement("div",{className:h.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(s.a,{ingredients:e.ingredients})),u.a.createElement(p.a,{clicked:e.checkoutCancelled,btnType:"Danger"},"CANCEL"),u.a.createElement(p.a,{clicked:e.checkoutContinue,btnType:"Success"},"CONTINUE"))},g=a(18),f=a(16),b=a(42),C=a(101),y=a.n(C),E=a(21),k=a(97),_=a(43),j=a(17),O=a(3),I=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHanlder=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.inputChangedHandler=function(e,t){var n=Object(O.b)(a.state.orderForm[t],{value:e.target.value,valid:Object(O.a)(e.target.value,a.state.orderForm[t].validation),touched:!0}),r=Object(O.b)(a.state.orderForm,Object(g.a)({},t,n)),l=!0;for(var i in r)if(!(l=r[i].valid&&l))break;a.setState({orderForm:r,formIsValid:l})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHanlder},t.map(function(t){return u.a.createElement(k.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,touched:t.config.touched,shouldValidate:t.config.validation,changed:function(a){e.inputChangedHandler(a,t.id)}})}),u.a.createElement(p.a,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(n=u.a.createElement(b.a,null)),u.a.createElement("div",{className:y.a.ContactData},u.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(c.Component),T=Object(f.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(j.g(t,a))}}})(Object(_.a)(I,E.a)),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelHandler=function(){a.props.history.goBack()},a.checkoutContinueHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(d.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(d.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(v,{checkoutCancelled:this.checkoutCancelHandler,checkoutContinue:this.checkoutContinueHandler,ingredients:this.props.ings}),u.a.createElement(d.b,{path:this.props.match.path+"/contact-data",component:T}))}return e}}]),t}(c.Component);t.default=Object(f.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(x)},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(98),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{onChange:e.changed,value:e.value}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:a.join(" ")},e.elementConfig,{onChange:e.changed,value:e.value}));break;case"select":t=r.a.createElement("select",{className:a.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:a.join(" ")},e.elementConfig,{onChange:e.changed,value:e.value}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Label,htmlFor:""},e.label),t)}},98:function(e,t,a){e.exports={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx",Invalid:"Input__Invalid__1sl1p"}}}]);
//# sourceMappingURL=3.4e6ff291.chunk.js.map