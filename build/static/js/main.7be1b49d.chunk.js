(this.webpackJsonpzomato=this.webpackJsonpzomato||[]).push([[0],{31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(34),i=s.n(c),r=s(7),o=s(6),l=s(2),j=s(3),d=s(5),h=s(4),b=s(11),u=s.n(b),m=s(15),O=(s(31),s(0)),p=function(e){var t=e.showPerPage,s=e.onPaginationChange,a=e.total,c=Object(n.useState)(1),i=Object(m.a)(c,2),r=i[0],o=i[1],l=Object(n.useState)(Number(Math.ceil(a/t))),j=Object(m.a)(l,1)[0];Object(n.useEffect)((function(){var e=t*r;s(e-t,e)}),[r]);var d=function(e){"prev"===e?o(1===r?1:r-1):"next"===e&&o(j===r?r:r+1)};return Object(O.jsxs)("div",{className:"d-flex justify-content-between ml-4",children:[Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){return d("prev")},children:"Previous"}),Object(O.jsx)("button",{className:"btn btn-primary",onClick:function(){return d("next")},children:"Next"})]})},x=function(e){var t=Object(n.useState)(2),s=Object(m.a)(t,1)[0],a=Object(n.useState)({start:0,end:s}),c=Object(m.a)(a,2),i=c[0],o=c[1];return Object(O.jsxs)(O.Fragment,{children:[function(e){var t=e.listData;return t?t.length>0?t.slice(i.start,i.end).map((function(e){return Object(O.jsxs)("div",{className:"container-fluid mb-3 mr-3 filter2",children:[Object(O.jsx)("div",{className:"image_con",children:Object(O.jsx)("img",{src:e.restaurant_thumb,alt:"Business",className:"Img"})}),Object(O.jsxs)("div",{className:"display",children:[Object(O.jsx)("div",{style:{fontSize:"25px",color:"blue",fontWeight:"bold"},children:Object(O.jsx)(r.b,{to:"/details/".concat(e.restaurant_id),children:e.restaurant_name})}),Object(O.jsxs)("div",{style:{fontSize:"19px",fontWeight:"bold"},children:[e.address,Object(O.jsx)("br",{}),Object(O.jsx)("span",{className:"badge badge-danger",children:e.cuisines[0].cuisine_name})," \xa0",Object(O.jsx)("span",{className:"badge badge-info",children:e.cuisines[1].cuisine_name})]})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"display",children:Object(O.jsx)("b",{children:"Cost for two:-"})}),Object(O.jsx)("div",{className:"display",children:e.cost})]})})]},e.restaurant_id)})):Object(O.jsx)("div",{children:Object(O.jsx)("h3",{children:"No data for this"})}):Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:"https://i.ibb.co/b17cWJg/food.gif"})})}(e),Object(O.jsx)(p,{showPerPage:s,onPaginationChange:function(e,t){o({start:e,end:t})},total:e.listData.length})]})},f="https://api-zoma.herokuapp.com/filter",g=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).filterCuisine=function(t){var s,n=sessionStorage.getItem("mealId"),a=t.target.value;s=""===a?"".concat(f,"/").concat(n):"".concat(f,"/").concat(n,"?cuisine=").concat(a),u.a.get(s).then((function(t){e.props.restPerCuisine(t.data)}))},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("hr",{}),Object(O.jsxs)("div",{style:{marginLeft:"20px"},children:[Object(O.jsx)("h4",{children:"Cuisine Filter"}),Object(O.jsxs)("div",{onChange:this.filterCuisine,children:[Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"Cuisine",value:""}),"All"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"Cuisine",value:"1"}),"North Indian"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"Cuisine",value:"2"}),"South Indian"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"Cuisine",value:"3"}),"Chinese"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"Cuisine",value:"4"}),"Fast Food"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"Cuisine",value:"5"}),"Street food"]})]})]})]})}}]),s}(n.Component),v=g,N=(s(69),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).handleLogout=function(){e.setState({userData:""}),sessionStorage.removeItem("ltk"),sessionStorage.removeItem("userData"),e.props.history.push("/")},e.conditionalHeader=function(){if(e.state.userData.name){var t=e.state.userData,s=[t.name,t.email,t.phone,t.role];return sessionStorage.setItem("userData",s),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("button",{className:"btn btn-info",children:["Hi ",e.state.userData.name]}),"\xa0",Object(O.jsx)("button",{className:"btn btn-warning",onClick:e.handleLogout,children:"Logout"})]})}return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(r.b,{to:"/login",className:"btn btn-success",children:"LogIn"})," \xa0",Object(O.jsx)(r.b,{to:"/register",className:"btn btn-warning",children:"Register"})]})},e.state={userData:""},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("header",{id:"headings",children:[Object(O.jsx)("div",{className:"divisions row justify-content-center",children:Object(O.jsx)(r.b,{to:"/",children:Object(O.jsx)("span",{id:"underline",children:"e!"})})}),Object(O.jsx)("div",{className:"clearfix",children:Object(O.jsx)("div",{className:"p-3 float-right",children:this.conditionalHeader()})})]})})}},{key:"componentDidMount",value:function(){var e=this;fetch("http://app-logout.herokuapp.com/api/auth/userInfo",{method:"GET",headers:{"x-access-token":sessionStorage.getItem("ltk")}}).then((function(e){return e.json()})).then((function(t){e.setState({userData:t})}))}}]),s}(n.Component)),y=Object(o.e)(N),C="https://api-zoma.herokuapp.com/filter",k=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).filterCost=function(t){var s,n=sessionStorage.getItem("mealId"),a=t.target.value.split("-"),c=a[0],i=a[1];s=""===t.target.value?"".concat(C,"/").concat(n):"".concat(C,"/").concat(n,"?lcost=").concat(c,"&hcost=").concat(i),u.a.get(s).then((function(t){e.props.restPerCost(t.data)}))},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{style:{marginLeft:"20px"},children:[Object(O.jsx)("h4",{children:"Cost for two"}),Object(O.jsxs)("div",{onChange:this.filterCost,children:[Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"cuisine",value:""}),"All"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"cuisine",value:"151-300"}),"151rs to 300rs"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"cuisine",value:"301-450"}),"300rs to 450rs"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"cuisine",value:"451-600"}),"450rs to 600rs"]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{className:"radio",children:[Object(O.jsx)("input",{type:"radio",name:"cuisine",value:"601-1200"}),"upto 600rs"]}),Object(O.jsx)("br",{})]})]})})}}]),s}(n.Component),S=k,I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this)).setDataAsPerFilter=function(e){n.setState({restaurantList:e})},n.state={restaurantList:""},n}return Object(j.a)(s,[{key:"render",value:function(){var e=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsxs)("div",{className:"row mainContainer",children:[Object(O.jsxs)("div",{className:"col-sm-3 ml-2 mt-4 filter",children:[Object(O.jsx)("h3",{children:"Filters"}),Object(O.jsx)(v,{restPerCuisine:function(t){e.setDataAsPerFilter(t)}}),Object(O.jsx)(S,{restPerCost:function(t){e.setDataAsPerFilter(t)}})]}),Object(O.jsx)("div",{className:"col-lg-6 col-md-4 cl-sm-3 mt-4",children:Object(O.jsx)(x,{listData:this.state.restaurantList})})]})]})}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.mealId;sessionStorage.setItem("mealId",t),u.a.get("".concat("https://api-zoma.herokuapp.com/restaurant?mealtype_id=").concat(t)).then((function(t){e.setState({restaurantList:t.data})}))}}]),s}(n.Component),w=(s(70),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).renderCity=function(e){if(e)return e.map((function(e){return Object(O.jsx)("option",{value:e.state_id,children:e.state},e.state_id)}))},n.renderRestaurants=function(e){if(e)return e.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("option",{value:e.state_id,children:[e.restaurant_name," | ",e.address]},e.state_id)})}))},n.handleCity=function(e){var t=e.target.value;fetch("".concat("https://api-zoma.herokuapp.com/restaurant?stateId=").concat(t),{method:"GET"}).then((function(e){return e.json()})).then((function(e){n.setState({restaurant:e})}))},n.handleRest=function(e){n.props.history.push("details/".concat(e.target.value))},n.state={location:"",restaurant:""},n}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"container-fluid maincontainer",children:[Object(O.jsx)("div",{className:"p-1 d-flex justify-content-center",children:Object(O.jsx)("span",{className:"mb-3 d-flex justify-content-center logo ",children:"e!"})}),Object(O.jsx)("div",{className:"container d-flex justify-content-center heading",style:{color:"#007bff"},children:"Find The Best Rest\xe5ur\xe2nts, C\xe2fes and B\xe2rs"}),Object(O.jsxs)("div",{className:"row align-items-center justify-content-center",children:[Object(O.jsx)("div",{style:{float:"left"},children:Object(O.jsxs)("select",{id:"city",onChange:this.handleCity,children:[Object(O.jsx)("option",{children:"---Select Location---"}),this.renderCity(this.state.location)]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("select",{id:"restaurants",onChange:this.handleRest,children:[Object(O.jsx)("option",{children:"---Select Restaurant---"}),this.renderRestaurants(this.state.restaurant)]})})]})]}),Object(O.jsx)(r.b,{to:"/viewOrder",style:{color:"white"},children:"Orders"})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api-zoma.herokuapp.com/location",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({location:t})}))}}]),s}(n.Component)),_=Object(o.e)(w),D=(s(32),function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{id:"quicksearch",children:[Object(O.jsx)("span",{id:"QuickHeading",children:"Quick Searches"}),Object(O.jsx)("span",{id:"QuickSubHeading",children:"Discover rest\xe5ur\xe2nts by type of meal"}),Object(O.jsx)("div",{id:"mainTileContainer",children:function(e){var t=e.quickData;return t?t.map((function(e){return Object(O.jsx)(r.b,{to:"/list/".concat(e.mealtype_id),children:Object(O.jsxs)("div",{class:"tileContainer",children:[Object(O.jsx)("div",{class:"tileComponent1",children:Object(O.jsx)("img",{src:e.meal_image,alt:"breakfast"})}),Object(O.jsxs)("div",{class:"tileComponent2",children:[Object(O.jsx)("div",{class:"componentHeading",children:e.mealtype}),Object(O.jsx)("div",{class:"componentSubHeading",children:e.content})]})]},e.mealtype_id)})})):Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:"https://i.ibb.co/b17cWJg/food.gif"})})}(e)})]})})}),P=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={QuickData:""},n}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{children:Object(O.jsx)(D,{quickData:this.state.QuickData})})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://api-zoma.herokuapp.com/quicksearch").then((function(e){return e.json()})).then((function(t){e.setState({QuickData:t})}))}}]),s}(n.Component),F=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)(_,{}),Object(O.jsx)(P,{})]})},L=s(22),T=s.n(L),z=s(37),A=s(13),M=(s(72),s(33),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).orderId=[],e.placeOrder=function(t){console.log("id","".concat(t)),e.orderId.push("".concat(t)),e.props.finalOrder(e.orderId)},e.removeOrder=function(t){e.orderId.splice(e.orderId.indexOf(t.toString()),1),e.props.finalOrder(e.orderId)},e.renderMenu=function(t){var s=t.menudata;return s?s.map((function(t){return Object(O.jsx)(a.a.Fragment,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row details",children:[Object(O.jsx)("div",{className:"col-sm-4",children:Object(O.jsx)("img",{src:t.menu_image,alt:"restaurant_image",style:{boxShadow:"0 5px 10px black"},className:"restImage"})}),Object(O.jsxs)("div",{className:"col-md-5",children:[Object(O.jsxs)("h3",{children:[t.menu_id,". ",t.menu_name]}),Object(O.jsx)("p",{children:Object(O.jsx)("span",{className:"badge badge-success",children:t.menu_type})}),Object(O.jsxs)("p",{children:["Rs.",t.menu_price]})]}),Object(O.jsxs)("div",{className:"col-sm-2",children:[Object(O.jsx)("button",{type:"button",className:"btn btn-info",onClick:function(){e.placeOrder(t.menu_id)},children:Object(O.jsx)("i",{className:"fas fa-plus"})}),Object(O.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){e.removeOrder(t.menu_id)},children:Object(O.jsx)("i",{className:"fas fa-minus"})})]})]})},t.menu_id)})})):Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:"https://i.ibb.co/b17cWJg/food.gif",style:{alignItems:"center"}})})},e.renderCart=function(e){if(e)return e.map((function(e,t){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("b",{children:[" ",e," \xa0\xa0 "]},t)})}))},e}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[this.renderMenu(this.props),Object(O.jsx)("div",{children:Object(O.jsxs)("h4",{children:["Item ",this.renderCart(this.orderId)," Added."]})})]})}}]),s}(n.Component)),R=Object(o.e)(M),J=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).addToCart=function(t){e.setState({userItem:t})},e.proceed=function(){sessionStorage.setItem("menu",e.state.userItem),e.props.history.push("/placeOrder/".concat(e.state.details.restaurant_name))},e.state={details:"",menuList:"",userItem:""},e}return Object(j.a)(s,[{key:"render",value:function(){var e=this,t=this.state.details;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"card",style:{width:"80%",marginLeft:"8%",backgroundColor:"white"},children:[Object(O.jsx)("div",{children:Object(O.jsx)("img",{className:"card-img-top",src:t.restaurant_thumb,alt:"Card",style:{width:"100%",height:"250px",boxShadow:"0 5px 10px black"}})}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h2",{className:"card-title restHeading",children:this.state.details.restaurant_name}),Object(O.jsxs)(A.d,{children:[Object(O.jsxs)(A.b,{children:[Object(O.jsx)(A.a,{children:"Overview"}),Object(O.jsx)(A.a,{children:"Menu"}),Object(O.jsx)(A.a,{children:"Contact"})]}),Object(O.jsxs)(A.c,{children:[Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:"About This Place"})}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Average rating"})," - ",t.average_rating]}),Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Rating text"})," - ",t.rating_text]}),Object(O.jsx)("br",{})]}),Object(O.jsxs)(A.c,{children:[Object(O.jsx)("h3",{style:{color:"midnightblue"},children:Object(O.jsx)("b",{children:"Menu"})}),Object(O.jsx)(R,{menudata:this.state.menuList,finalOrder:function(t){e.addToCart(t)}})]}),Object(O.jsxs)(A.c,{children:[Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:"Contact"})}),Object(O.jsx)("p",{children:t.contact_number}),Object(O.jsx)("br",{}),Object(O.jsx)("h4",{children:Object(O.jsx)("b",{children:"Address"})}),Object(O.jsx)("p",{children:t.address})]})]}),Object(O.jsx)("button",{type:"button",className:"btn btn-success",onClick:this.proceed,children:"Proceed"})]})]})},this.state.restaurant_id)]})}},{key:"componentDidMount",value:function(){var e=Object(z.a)(T.a.mark((function e(){var t,s,n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.restId,e.next=3,u.a.get("".concat("https://api-zoma.herokuapp.com/details","/").concat(t));case 3:return s=e.sent,e.next=6,u.a.get("".concat("https://api-zoma.herokuapp.com/menu","/").concat(t));case 6:n=e.sent,console.log(s.data),console.log(n.data),this.setState({details:s.data[0],menuList:n.data});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),s}(n.Component),E=J,H=s(14),W=(s(73),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){fetch("https://api-zoma.herokuapp.com/placeOrder",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then(console.log("payment gateway"))},n.renderItems=function(e){return e?e.map((function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"menu card",children:[Object(O.jsx)("div",{className:"card-image",children:Object(O.jsx)("img",{src:e.menu_image,alt:"menuImage",style:{boxShadow:"0 5px 15px black"}})},n.menu_id),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h4",{children:e.menu_name}),Object(O.jsx)("p",{children:Object(O.jsx)("span",{className:"badge badge-success",children:e.menu_type})}),Object(O.jsxs)("p",{children:["Rs. ",e.menu_price]})]})]})})})):Object(O.jsx)("div",{children:Object(O.jsx)("img",{src:"https://i.ibb.co/b17cWJg/food.gif"})})},n.state={id:Math.floor(1e4*Math.random()),details:"",hotel_name:n.props.match.params.restName,amount:"",name:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[0]:"",phone:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[2]:"",address:"",email:sessionStorage.getItem("userData")?sessionStorage.getItem("userData").split(",")[1]:"",status:"pending"},n}return Object(j.a)(s,[{key:"render",value:function(){return sessionStorage.getItem("userData")?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-heading",style:{backgroundColor:"powderblue"},children:Object(O.jsxs)("h2",{style:{Color:"midnightblue",fontWeight:"bold",margin:"8px 8px"},children:["Your Order from ",this.props.match.params.restName]})}),Object(O.jsx)("div",{className:"card-body",children:this.renderItems(this.state.details)}),Object(O.jsx)("div",{style:{marginLeft:"10px",color:"maroon"},children:Object(O.jsx)("b",{children:Object(O.jsxs)("h3",{children:[" Total Price : ",this.state.amount]})})})]}),Object(O.jsx)("h4",{children:" please! click this.(after filling the address)"}),Object(O.jsx)("button",{onClick:this.handleSubmit,children:"Submit"}),Object(O.jsx)("form",{method:"POST",action:"https://paymentedu.herokuapp.com/paynow",children:Object(O.jsxs)("div",{className:"form row",children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:Object(O.jsx)("b",{children:"Name"})}),Object(O.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:Object(O.jsx)("b",{children:"Email"})}),Object(O.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:Object(O.jsx)("b",{children:"Phone"})}),Object(O.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:Object(O.jsx)("b",{children:"Address"})}),Object(O.jsx)("input",{className:"form-control",name:"address",value:this.state.address,onChange:this.handleChange})]})}),Object(O.jsx)("input",{type:"hidden",name:"amount",value:this.state.amount}),Object(O.jsx)("input",{type:"hidden",name:"id",value:this.state.id}),Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"col-md-4",children:Object(O.jsx)("button",{className:"btn btn-success",type:"submit",children:"Checkout"})})})]})})]},this.state.amount)]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Login first to place booking"}),Object(O.jsx)(r.b,{to:"/login",children:Object(O.jsx)("button",{className:"btn btn-danger",children:"Login"})})]})}},{key:"componentDidMount",value:function(){var e=this,t=sessionStorage.getItem("menu"),s=[];t.split(",").map((function(e){return s.push(parseInt(e)),"ok"})),fetch("https://api-zoma.herokuapp.com/menuItem",{method:"POST",headers:{accept:"application/json","content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(t){var s=0;t.map((function(e){return s+=parseInt(e.menu_price),"ok"})),e.setState({details:t,amount:s})}))}}]),s}(n.Component)),B=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("center",{children:Object(O.jsx)("h3",{children:"Orders"})}),Object(O.jsxs)("table",{className:"table",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Id"}),Object(O.jsx)("th",{children:"Rest Name"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Phone"}),Object(O.jsx)("th",{children:"Email"}),Object(O.jsx)("th",{children:"Address"}),Object(O.jsx)("th",{children:"Price"}),Object(O.jsx)("th",{children:"Status"}),Object(O.jsx)("th",{children:"Bank"}),Object(O.jsx)("th",{children:"Bank Status"})]})}),Object(O.jsx)("tbody",{children:function(e){var t=e.orderData;if(t)return t.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e.id}),Object(O.jsx)("td",{children:e.hotel_name}),Object(O.jsx)("td",{children:e.name}),Object(O.jsx)("td",{children:e.phone}),Object(O.jsx)("td",{children:e.email}),Object(O.jsx)("td",{children:e.address}),Object(O.jsxs)("td",{children:["Rs.",e.amount]}),Object(O.jsx)("td",{children:e.status}),Object(O.jsx)("td",{children:e.bank}),Object(O.jsx)("td",{children:e.bank_status})]})}))}(e)})]})]})},Q=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).state={orders:""},e}return Object(j.a)(s,[{key:"render",value:function(){return sessionStorage.getItem("userData")?Object(O.jsx)("div",{className:"container",children:Object(O.jsx)(B,{orderData:this.state.orders})}):Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Login first to see booking"})})}},{key:"componentDidMount",value:function(){var e=this;if(this.props.location){var t=this.props.location.search;if(t){var s={status:"Delivered",date:t.split("&")[2].split("=")[1],bank_status:t.split("&")[0].split("=")[1],bank:t.split("&")[3].split("=")[1]},n=t.split("&")[1].split("=")[1].split("_")[1];fetch("".concat("https://api-zoma.herokuapp.com/updateOrder","/").concat(n),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)})}}u.a.get("".concat("https://api-zoma.herokuapp.com/viewOrder","?email=").concat(sessionStorage.getItem("userData").split(",")[1])).then((function(t){e.setState({orders:t.data})}))}}]),s}(n.Component),q=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("http://app-logout.herokuapp.com/api/auth/register",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then(n.props.history.push("/login"))},n.state={name:"",phone:"",email:"",password:""},n}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"panel panel-info",children:Object(O.jsxs)("div",{className:"panel-body",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-md-12",children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Name"}),Object(O.jsx)("input",{className:"form-control",name:"name",value:this.state.name,onChange:this.handleChange})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"EmailId"}),Object(O.jsx)("input",{className:"form-control",name:"email",value:this.state.email,onChange:this.handleChange})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Phone"}),Object(O.jsx)("input",{className:"form-control",name:"phone",value:this.state.phone,onChange:this.handleChange})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{className:"form-control",name:"password",value:this.state.password,onChange:this.handleChange})]})})]})}),Object(O.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Register"})]})})]})}}]),s}(n.Component),G=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(H.a)({},e.target.name,e.target.value))},n.handleSubmit=function(){console.log(n.state),fetch("http://app-logout.herokuapp.com/api/auth/login",{method:"POST",headers:{accept:"application/json","content-type":"application/json"},body:JSON.stringify(n.state)}).then((function(e){return e.json()})).then((function(e){!1===e.auth?n.setState({message:e.token}):(sessionStorage.setItem("ltk",e.token),n.props.history.push("/"))}))},n.state={email:"",password:""},n}return Object(j.a)(s,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"panel panel-warning",children:Object(O.jsxs)("div",{className:"panel-body",children:[Object(O.jsx)("h2",{style:{color:"red"},children:this.state.message}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"col-md-12",children:[Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"EmailId"}),Object(O.jsx)("input",{className:"form-control",name:"email",type:"email",placeholder:"Email",value:this.state.email,onChange:this.handleChange})]})}),Object(O.jsx)("div",{className:"col-md-6",children:Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("input",{className:"form-control",name:"password",type:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange})]})})]})}),Object(O.jsx)("button",{className:"btn btn-success",onClick:this.handleSubmit,children:"Login"})]})})]})}}]),s}(n.Component),U=function(){return Object(O.jsxs)(r.a,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:F}),Object(O.jsx)(o.a,{path:"/list/:mealId",component:I}),Object(O.jsx)(o.a,{path:"/details/:restId",component:E}),Object(O.jsx)(o.a,{path:"/placeOrder/:restName",component:W}),Object(O.jsx)(o.a,{path:"/viewOrder",component:Q}),Object(O.jsx)(o.a,{path:"/register",component:q}),Object(O.jsx)(o.a,{path:"/login",component:G})]})};i.a.render(Object(O.jsx)(U,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.7be1b49d.chunk.js.map