(this.webpackJsonpzomato=this.webpackJsonpzomato||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(35),i=s.n(n),r=s(7),l=s(6),o=s(2),d=s(3),j=s(5),h=s(4),b=s(11),m=s.n(b),u=s(15),p=(s(31),s(0)),O=function(e){var t=e.showPerPage,s=e.onPaginationChange,c=e.total,n=Object(a.useState)(1),i=Object(u.a)(n,2),r=i[0],l=i[1],o=Object(a.useState)(Number(Math.ceil(c/t))),d=Object(u.a)(o,1)[0];Object(a.useEffect)((function(){var e=t*r;s(e-t,e)}),[r]);var j=function(e){"prev"===e?l(1===r?1:r-1):"next"===e&&l(d===r?r:r+1)};return Object(p.jsxs)("div",{className:"d-flex justify-content-between ml-4",children:[Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){return j("prev")},children:"Previous"}),Object(p.jsx)("button",{className:"btn btn-primary",onClick:function(){return j("next")},children:"Next"})]})},x=function(e){var t=Object(a.useState)(3),s=Object(u.a)(t,1)[0],c=Object(a.useState)({start:0,end:s}),n=Object(u.a)(c,2),i=n[0],l=n[1];return Object(p.jsxs)(p.Fragment,{children:[function(e){var t=e.listData;return t?t.length>0?t.slice(i.start,i.end).map((function(e){return Object(p.jsxs)("div",{className:"container-fluid mb-3 mr-3 filter2",style:{borderRadius:"15px"},children:[Object(p.jsx)("div",{className:"image_con",children:Object(p.jsx)("img",{src:e.restaurant_thumb,alt:"Business",className:"Img"})}),Object(p.jsxs)("div",{className:"display",children:[Object(p.jsx)("div",{style:{fontSize:"25px",color:"blue",fontWeight:"bold"},children:Object(p.jsx)(r.b,{to:"/details/".concat(e.restaurant_id),children:e.restaurant_name})}),Object(p.jsxs)("div",{style:{fontSize:"19px",fontWeight:"bold"},children:[e.address,Object(p.jsx)("br",{}),Object(p.jsx)("span",{className:"badge badge-danger",children:e.cuisines[0].cuisine_name})," \xa0",Object(p.jsx)("span",{className:"badge badge-info",children:e.cuisines[1].cuisine_name})]})]}),Object(p.jsx)("hr",{}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"display",children:Object(p.jsx)("b",{children:"Cost for two:-"})}),Object(p.jsx)("div",{className:"display",children:e.cost})]})})]},e.restaurant_id)})):Object(p.jsx)("div",{children:Object(p.jsx)("h3",{children:"No data for this"})}):Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"https://i.ibb.co/b17cWJg/food.gif",alt:"food"})})}(e),Object(p.jsx)(O,{showPerPage:s,onPaginationChange:function(e,t){l({start:e,end:t})},total:e.listData.length})]})},g=(s(70),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).handleLogout=function(){e.setState({userData:""}),sessionStorage.removeItem("ltk"),sessionStorage.removeItem("userData"),e.props.history.push("/")},e.conditionalHeader=function(){if(e.state.userData.name){var t=e.state.userData,s=[t.name,t.email,t.phone,t.role];return sessionStorage.setItem("userData",s),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("button",{className:"btn btn-info",children:["Hi ",e.state.userData.name]}),"\xa0",Object(p.jsx)("button",{className:"btn btn-warning",onClick:e.handleLogout,children:"Logout"})]})}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(r.b,{to:"/login",className:"btn btn-success",children:"LogIn"})," \xa0",Object(p.jsx)(r.b,{to:"/register",className:"btn btn-warning",children:"Register"})]})},e.state={userData:""},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("header",{id:"headings",children:[Object(p.jsx)("div",{className:"divisions row justify-content-center",children:Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("span",{id:"underline",children:"e!"})})}),Object(p.jsx)("div",{className:"clearfix",children:Object(p.jsx)("div",{className:"p-3 float-right",children:this.conditionalHeader()})})]})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://login-api-logout.herokuapp.com/api/auth/userInfo",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("ltk")}}).then((function(e){return e.json()})).then((function(t){e.setState({userData:t})}))}}]),s}(a.Component)),f=Object(l.e)(g),v="https://api-zoma.herokuapp.com/filter",N=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).filterCuisine=function(t){var s,a=sessionStorage.getItem("mealId"),c=t.target.value;s=""===c?"".concat(v,"/").concat(a):"".concat(v,"/").concat(a,"?cuisine=").concat(c),m.a.get(s).then((function(t){e.props.restPerCuisine(t.data)}))},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{style:{marginLeft:"20px"},children:[Object(p.jsx)("h4",{children:"Cuisine Filter"}),Object(p.jsxs)("div",{onChange:this.filterCuisine,children:[Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"Cuisine",value:""}),"All"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"Cuisine",value:"1"}),"North Indian"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"Cuisine",value:"2"}),"South Indian"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"Cuisine",value:"3"}),"Chinese"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"Cuisine",value:"4"}),"Fast Food"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"Cuisine",value:"5"}),"Street food"]})]})]})]})}}]),s}(a.Component),y=N,k="https://api-zoma.herokuapp.com/filter",C=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).filterCost=function(t){var s,a=sessionStorage.getItem("mealId"),c=t.target.value.split("-"),n=c[0],i=c[1];s=""===t.target.value?"".concat(k,"/").concat(a):"".concat(k,"/").concat(a,"?lcost=").concat(n,"&hcost=").concat(i),m.a.get(s).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{style:{marginLeft:"20px"},children:[Object(p.jsx)("h4",{children:"Cost for two"}),Object(p.jsxs)("div",{onChange:this.filterCost,children:[Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"cuisine",value:"151-300"}),"151rs to 300rs"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"cuisine",value:"301-450"}),"300rs to 450rs"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"cuisine",value:"451-600"}),"450rs to 600rs"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("label",{className:"radio",children:[Object(p.jsx)("input",{type:"radio",name:"cuisine",value:"601-1200"}),"upto 600rs"]}),Object(p.jsx)("br",{})]})]})})}}]),s}(a.Component),S=C,I=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this)).setDataAsPerFilter=function(e){a.setState({restaurantList:e})},a.state={restaurantList:""},a}return Object(d.a)(s,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsxs)("div",{className:"row mainContainer",children:[Object(p.jsxs)("div",{className:"col-sm-3 ml-2 mt-4 filter",style:{borderRadius:"15px"},children:[Object(p.jsx)("h3",{children:"Filters"}),Object(p.jsx)(y,{restPerCuisine:function(t){e.setDataAsPerFilter(t)}}),Object(p.jsx)(S,{restPerCost:function(t){e.setDataAsPerFilter(t)}})]}),Object(p.jsx)("div",{className:"col-lg-6 col-md-4 cl-sm-3 mt-4",children:Object(p.jsx)(x,{listData:this.state.restaurantList})})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),m.a.get("".concat("https://api-zoma.herokuapp.com/restaurant?mealtype_id=").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),s}(a.Component),w=(s(71),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).renderCity=function(e){if(e)return e.map((function(e){return Object(p.jsx)("option",{value:e.state_id,children:e.state},e.state_id)}))},a.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("option",{value:e.state_id,children:[e.restaurant_name," | ",e.address]},e.state_id)})}))},a.handleCity=function(e){var t=e.target.value;fetch("".concat("https://api-zoma.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){a.setState({restaurant:e})}))},a.handleRest=function(e){a.props.history.push("details/".concat(e.target.value))},a.state={location:"",restaurant:""},a}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"container-fluid maincontainer",children:[Object(p.jsx)("div",{className:"p-1 d-flex justify-content-center",children:Object(p.jsx)("span",{className:"mb-3 d-flex justify-content-center logo ",children:"e!"})}),Object(p.jsx)("div",{className:" d-flex justify-content-center heading",id:"container d-flex justify-content-center heading",style:{color:"#007bff"},children:"Find The Best Rest\xe5ur\xe2nts, C\xe2fes and B\xe2rs"}),Object(p.jsxs)("div",{className:"row align-items-center justify-content-center",children:[Object(p.jsx)("div",{style:{float:"left"},children:Object(p.jsxs)("select",{id:"city",onChange:this.handleCity,style:{height:"30px"},children:[Object(p.jsx)("option",{children:"---Select Location---"}),this.renderCity(this.state.location)]})}),"\xa0",Object(p.jsx)("div",{children:Object(p.jsxs)("select",{id:"restaurants",onChange:this.handleRest,style:{height:"30px"},children:[Object(p.jsx)("option",{children:"---Select Restaurant---"}),this.renderRestaurants(this.state.restaurant)]})})]})]}),Object(p.jsx)(r.b,{to:"/viewOrder",style:{color:"black"},children:"Orders"})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api-zoma.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),s}(a.Component)),_=Object(l.e)(w),D=(s(32),function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{id:"quicksearch",children:[Object(p.jsx)("span",{id:"QuickHeading",children:"Quick Searches"}),Object(p.jsx)("span",{id:"QuickSubHeading",children:"Discover restaurants by type of meal"}),Object(p.jsx)("div",{id:"mainTileContainer",children:function(e){var t=e.quickData;return t?t.map((function(e){return Object(p.jsx)(r.b,{to:"/list/".concat(e.mealtype_id),children:Object(p.jsxs)("div",{className:"tileContainer",style:{borderRadius:"15px"},children:[Object(p.jsx)("div",{className:"tileComponent1",children:Object(p.jsx)("img",{src:e.meal_image,style:{borderRadius:"15px 0px 0px 15px"},alt:"breakfast"})}),Object(p.jsxs)("div",{className:"tileComponent2",children:[Object(p.jsx)("div",{className:"componentHeading",children:e.mealtype}),Object(p.jsx)("div",{className:"componentSubHeading",children:e.content})]})]},e.mealtype_id)})})):Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"https://i.ibb.co/b17cWJg/food.gif",alt:"gif jpeg"})})}(e)})]})})}),P=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={QuickData:""},a}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{children:Object(p.jsx)(D,{quickData:this.state.QuickData})})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api-zoma.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),s}(a.Component),L=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsx)(_,{}),Object(p.jsx)(P,{})]})},F=s(22),T=s.n(F),R=s(38),E=s(13),A=(s(73),s(33),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).orderId=[],e.placeOrder=function(t){console.log("id","".concat(t)),e.orderId.push("".concat(t)),e.props.finalOrder(e.orderId)},e.removeOrder=function(t){e.orderId.splice(e.orderId.indexOf(t.toString()),1),e.props.finalOrder(e.orderId)},e.renderMenu=function(t){var s=t.menudata;return s?s.map((function(t){return Object(p.jsx)(c.a.Fragment,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row details",children:[Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsx)("img",{src:t.menu_image,alt:"restaurant_image",style:{boxShadow:"0 5px 10px black",borderRadius:"5px"},className:"restImage"})}),Object(p.jsxs)("div",{className:"col-md-5",children:[Object(p.jsxs)("h3",{children:[t.menu_id,". ",t.menu_name]}),Object(p.jsx)("p",{children:Object(p.jsx)("span",{className:"badge badge-success",children:t.menu_type})}),Object(p.jsxs)("p",{children:["Rs.",t.menu_price]})]}),Object(p.jsxs)("div",{className:"col-sm-2",children:[Object(p.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){e.placeOrder(t.menu_id)},children:Object(p.jsx)("i",{className:"fas fa-plus"})}),"\xa0",Object(p.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){e.removeOrder(t.menu_id)},children:Object(p.jsx)("i",{className:"fas fa-minus"})})]})]})},t.menu_id)})})):Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"https://i.ibb.co/b17cWJg/food.gif",style:{alignItems:"center"},alt:"food"})})},e.renderCart=function(e){if(e)return e.map((function(e,t){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("b",{children:[" ",e," \xa0\xa0 "]},t)})}))},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[this.renderMenu(this.props),Object(p.jsx)("div",{children:Object(p.jsxs)("h4",{children:["Item ",this.renderCart(this.orderId)," Added."]})})]})}}]),s}(a.Component)),q=Object(l.e)(A),z=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).addToCart=function(t){e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeOrder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:""},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this,t=this.state.details;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"card",style:{width:"80%",marginLeft:"8%",backgroundColor:"white"},children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{className:"card-img-top",src:t.restaurant_thumb,alt:"Card",style:{width:"100%",height:"250px",boxShadow:"0 5px 10px black"}})}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h2",{className:"card-title restHeading",children:this.state.details.restaurant_name}),Object(p.jsxs)(E.d,{children:[Object(p.jsxs)(E.b,{children:[Object(p.jsx)(E.a,{children:"Overview"}),Object(p.jsx)(E.a,{children:"Menu"}),Object(p.jsx)(E.a,{children:"Contact"})]}),Object(p.jsxs)(E.c,{children:[Object(p.jsx)("h4",{children:Object(p.jsx)("b",{children:"About This Place"})}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Average rating"})," - ",t.average_rating]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Rating text"})," - ",t.rating_text]}),Object(p.jsx)("br",{})]}),Object(p.jsxs)(E.c,{children:[Object(p.jsx)("h3",{style:{color:"midnightblue"},children:Object(p.jsx)("b",{children:"Menu"})}),Object(p.jsx)(q,{menudata:this.state.menuList,finalOrder:function(t){e.addToCart(t)}})]}),Object(p.jsxs)(E.c,{children:[Object(p.jsx)("h4",{children:Object(p.jsx)("b",{children:"Contact"})}),Object(p.jsx)("p",{children:t.contact_number}),Object(p.jsx)("br",{}),Object(p.jsx)("h4",{children:Object(p.jsx)("b",{children:"Address"})}),Object(p.jsx)("p",{children:t.address})]})]}),Object(p.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.proceed,children:"Proceed"})]})]})},this.state.restaurant_id)]})}},{key:"componentDidMount",value:function(){var e=Object(R.a)(T.a.mark((function e(){var t,s,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,m.a.get("".concat("https://api-zoma.herokuapp.com/details","/").concat(t));case 3:return s=e.sent,e.next=6,m.a.get("".concat("https://api-zoma.herokuapp.com/menu","/").concat(t));case 6:a=e.sent,console.log(s.data),console.log(a.data),this.setState({details:s.data[0],menuList:a.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),s}(a.Component),M=z,H=s(14),J=(s(74),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(H.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){fetch("https://api-zoma.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(a.state)}).then(console.log("payment gateway"))},a.renderItems=function(e){return e?e.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"menu card",style:{borderRadius:"15px"},children:[Object(p.jsx)("div",{className:"card-image",children:Object(p.jsx)("img",{src:e.menu_image,alt:"menuImage",style:{boxShadow:"0 5px 15px black",borderRadius:"15px 15px 0px 0px"}})},a.menu_id),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h4",{children:e.menu_name}),Object(p.jsx)("p",{children:Object(p.jsx)("span",{className:"badge badge-success",children:e.menu_type})}),Object(p.jsxs)("p",{children:["Rs. ",e.menu_price]})]})]})})})):Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:"https://i.ibb.co/b17cWJg/food.gif",alt:"gif"})})},a.state={id:Math.floor(1e4*Math.random()),details:"",hotel_name:a.props.match.params.restName,amount:"",name:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[0]:"",phone:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[2]:"",address:"",email:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[1]:"",status:"pending"},a}return Object(d.a)(s,[{key:"render",value:function(){return sessionStorage.getItem("userData")?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(f,{}),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"card-heading",style:{backgroundColor:"powderblue"},children:Object(p.jsxs)("h2",{style:{Color:"midnightblue",fontWeight:"bold",margin:"8px 8px"},children:["Your Order from ",this.props.match.params.restName]})}),Object(p.jsx)("div",{className:"card-body",children:this.renderItems(this.state.details)}),Object(p.jsx)("div",{style:{marginLeft:"10px",color:"maroon"},children:Object(p.jsx)("b",{children:Object(p.jsxs)("h3",{children:[" Total Price : ",this.state.amount]})})})]}),Object(p.jsx)("h4",{children:" please! click this.(after filling the address)"}),Object(p.jsx)("button",{onClick:this.handleSubmit,children:"Submit"}),Object(p.jsx)("form",{method:"POST",action:"https://paymentedu.herokuapp.com/paynow",children:Object(p.jsxs)("div",{className:"form row",children:[Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:Object(p.jsx)("b",{children:"Name"})}),Object(p.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:Object(p.jsx)("b",{children:"Email"})}),Object(p.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:Object(p.jsx)("b",{children:"Phone"})}),Object(p.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{children:Object(p.jsx)("b",{children:"Address"})}),Object(p.jsx)("input",{className:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]})}),Object(p.jsx)("input",{type:"hidden",name:"amount",value:this.state.amount}),Object(p.jsx)("input",{type:"hidden",name:"id",value:this.state.id}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)("button",{className:"btn btn-success",type:"submit",children:"Checkout"})})})]})})]},this.state.amount)]}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Login first to place booking"}),Object(p.jsx)(r.b,{to:"/login",children:Object(p.jsx)("button",{className:"btn btn-danger",children:"Login"})})]})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),s=[];t.split(",").map((function(e){return s.push(parseInt(e)),"ok"})),fetch("https://api-zoma.herokuapp.com/menuItem",{method:"POST",headers:{accept:"application/json","content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(t){var s=0;t.map((function(e){return s+=parseInt(e.menu_price),"ok"})),e.setState({details:t,amount:s})}))}}]),s}(a.Component)),W=function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("center",{children:Object(p.jsx)("h3",{children:"Orders"})}),Object(p.jsxs)("table",{className:"table",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Id"}),Object(p.jsx)("th",{children:"Rest Name"}),Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Phone"}),Object(p.jsx)("th",{children:"Email"}),Object(p.jsx)("th",{children:"Address"}),Object(p.jsx)("th",{children:"Price"}),Object(p.jsx)("th",{children:"Status"}),Object(p.jsx)("th",{children:"Bank"}),Object(p.jsx)("th",{children:"Bank Status"})]})}),Object(p.jsx)("tbody",{children:function(e){var t=e.orderData;if(t)return t.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.id}),Object(p.jsx)("td",{children:e.hotel_name}),Object(p.jsx)("td",{children:e.name}),Object(p.jsx)("td",{children:e.phone}),Object(p.jsx)("td",{children:e.email}),Object(p.jsx)("td",{children:e.address}),Object(p.jsxs)("td",{children:["Rs.",e.amount]}),Object(p.jsx)("td",{children:e.status}),Object(p.jsx)("td",{children:e.bank}),Object(p.jsx)("td",{children:e.bank_status})]})}))}(e)})]})]})},U=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={orders:""},e}return Object(d.a)(s,[{key:"render",value:function(){return sessionStorage.getItem("userData")?Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)(f,{}),Object(p.jsx)(W,{orderData:this.state.orders})]}):Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Login first to see booking"})})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.location){var t=this.props.location.search;if(t){var s={status:"Delivered",date:t.split("&")[2].split("=")[1],bank_status:t.split("&")[0].split("=")[1],bank:t.split("&")[3].split("=")[1]},a=t.split("&")[1].split("=")[1].split("_")[1];fetch("".concat("https://api-zoma.herokuapp.com/updateOrder","/").concat(a),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)})}}m.a.get("".concat("https://api-zoma.herokuapp.com/viewOrder","?email=").concat(sessionStorage.getItem("userData").split(",")[1])).then((function(t){e.setState({orders:t.data})}))}}]),s}(a.Component),B=(s(34),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(H.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){console.log(a.state),fetch("https://login-api-logout.herokuapp.com/api/auth/register",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(a.state)}).then(a.props.history.push("/login"))},a.state={name:"",phone:"",email:"",password:""},a}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:{marginTop:"-3%"},className:"divisions row justify-content-center",children:Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("span",{id:"underline",children:"e!"})})}),Object(p.jsx)("section",{className:"login-block",style:{marginTop:"-3%"},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-4 login-sec",children:[Object(p.jsx)("h2",{className:"text-center",children:"Register Now"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"name",className:"text-uppercase",children:"Name"}),Object(p.jsx)("input",{className:"form-control",id:"name",placeholder:"Name",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"emailId",className:"text-uppercase",children:"EMAIL"}),Object(p.jsx)("input",{className:"form-control",id:"emailId",placeholder:"EMAIL ID",name:"email",value:this.state.email,onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"phone",className:"text-uppercase",children:"Phone"}),Object(p.jsx)("input",{className:"form-control",id:"phone",placeholder:"PHONE",name:"phone",value:this.state.phone,onChange:this.handleChange})]}),Object(p.jsx)("label",{for:"password",className:"text-uppercase",children:"Password"}),Object(p.jsx)("input",{className:"form-control",name:"password",type:"password",value:this.state.password,id:"password",placeholder:"PASSWORD",onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("label",{className:"form-check-label"}),Object(p.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Register"})]}),Object(p.jsxs)("div",{className:"copy-text",children:["Created with ",Object(p.jsx)("i",{className:"fa fa-heart"})]})]}),Object(p.jsx)("div",{className:"col-md-8 banner-sec",children:Object(p.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel",children:[Object(p.jsxs)("ol",{className:"carousel-indicators",children:[Object(p.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),Object(p.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"})]}),Object(p.jsxs)("div",{className:"carousel-inner",role:"listbox",children:[Object(p.jsxs)("div",{className:"carousel-item active",children:[Object(p.jsx)("img",{className:"d-block img-fluid",style:{height:"573px"},src:"https://i.ibb.co/ZNrKZPn/image1-Logindisplay.jpg",alt:"First slide"}),Object(p.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)("h2",{children:"This is Heaven"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"})]})})]}),Object(p.jsxs)("div",{className:"carousel-item",children:[Object(p.jsx)("img",{className:"d-block img-fluid",style:{height:"573px"},src:"https://i.ibb.co/cCCqbpN/image2-Logindisplay.jpg",alt:"First slide"}),Object(p.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)("h2",{children:"This is Heaven"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"})]})})]}),Object(p.jsxs)("div",{className:"carousel-item",children:[Object(p.jsx)("img",{className:"d-block img-fluid",style:{height:"573px"},src:"https://images.pexels.com/photos/872957/pexels-photo-872957.jpeg",alt:"First slide"}),Object(p.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)("h2",{children:"This is Heaven"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"})]})})]})]})]})})]})})})]})})}}]),s}(a.Component)),Q=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).handleChange=function(e){a.setState(Object(H.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){console.log(a.state),fetch("https://login-api-logout.herokuapp.com/api/auth/login",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(a.state)}).then((function(e){return e.json()})).then((function(e){!1===e.auth?a.setState({message:e.token}):(sessionStorage.setItem("ltk",e.token),a.props.history.push("/"))}))},a.state={email:"",password:""},a}return Object(d.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{style:{marginTop:"-3%"},className:"divisions row justify-content-center",children:Object(p.jsx)(r.b,{to:"/",children:Object(p.jsx)("span",{id:"underline",children:"e!"})})}),Object(p.jsx)("section",{className:"login-block",style:{marginTop:"-3%"},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-4 login-sec",children:[Object(p.jsx)("h2",{className:"text-center",children:"Login Now"}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputEmail1",className:"text-uppercase",children:"Username"}),Object(p.jsx)("input",{className:"form-control",id:"exampleInputEmail1",name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{for:"exampleInputPassword1",className:"text-uppercase",children:"Password"}),Object(p.jsx)("input",{className:"form-control",id:"exampleInputPassword1",name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})]}),Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("label",{className:"form-check-label"}),Object(p.jsx)("button",{className:"btn btn-success",style:{marginLeft:"29%"},onClick:this.handleSubmit,children:"Login"})]}),Object(p.jsxs)("div",{className:"copy-text",children:["Created with ",Object(p.jsx)("i",{className:"fa fa-heart"})]})]}),Object(p.jsx)("div",{className:"col-md-8 banner-sec",children:Object(p.jsxs)("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel",children:[Object(p.jsxs)("ol",{className:"carousel-indicators",children:[Object(p.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",className:"active"}),Object(p.jsx)("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"})]}),Object(p.jsxs)("div",{className:"carousel-inner",role:"listbox",children:[Object(p.jsxs)("div",{className:"carousel-item active",children:[Object(p.jsx)("img",{className:"d-block img-fluid",style:{height:"550px"},src:"https://i.ibb.co/ZNrKZPn/image1-Logindisplay.jpg",alt:"First slide"}),Object(p.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)("h2",{children:"This is Heaven"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"})]})})]}),Object(p.jsxs)("div",{className:"carousel-item",children:[Object(p.jsx)("img",{className:"d-block img-fluid",style:{height:"550px"},src:"https://i.ibb.co/cCCqbpN/image2-Logindisplay.jpg",alt:"First slide"}),Object(p.jsx)("div",{className:"carousel-caption d-none d-md-block",children:Object(p.jsxs)("div",{className:"banner-text",children:[Object(p.jsx)("h2",{children:"This is Heaven"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation"})]})})]})]})]})})]})})})]})}}]),s}(a.Component),Z=function(){return Object(p.jsxs)(r.a,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",component:L}),Object(p.jsx)(l.a,{path:"/list/:mealId",component:I}),Object(p.jsx)(l.a,{path:"/details/:restId",component:M}),Object(p.jsx)(l.a,{path:"/placeOrder/:restName",component:J}),Object(p.jsx)(l.a,{path:"/viewOrder",component:U}),Object(p.jsx)(l.a,{path:"/register",component:B}),Object(p.jsx)(l.a,{path:"/login",component:Q})]})};i.a.render(Object(p.jsx)(Z,{}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.0aa56719.chunk.js.map