(this.webpackJsonpnorthwestlabs=this.webpackJsonpnorthwestlabs||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(37),c=a.n(l),o=(a(89),a(90),a(57),a(30)),i=a.n(o),u=a(39),m=a(55),s=a(68),d=a(69),p=a(83),E=a(84),f=a(32),b=a.n(f),h=r.a.createContext(),A=a(14),v=a(23),y=a(118),g=a(119),C=a(79),x=a(123),w=a(124),N=a(121),O=a(70),j=a.n(O);var k=function(e){var t=r.a.useContext(h);return r.a.createElement(x.a,{bg:"primary",expand:"lg"},r.a.createElement(x.a.Brand,{href:"/home"},r.a.createElement("img",{alt:"Site Icon",src:j.a}),"    ","Northwest Labs"),r.a.createElement(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(w.a,{className:"mr-auto"}),r.a.createElement(w.a,null,r.a.createElement(w.a.Link,{href:"/cart"},r.a.createElement("i",{className:"fas fa-shopping-cart"}),"\xa0\xa0",t.cartCount,"\xa0\xa0"),r.a.createElement(N.a,{title:"Welcome, Matt",alignRight:!0,id:"basic-nav-dropdown"},r.a.createElement(N.a.Item,null,"My Account"),r.a.createElement(N.a.Divider,null),r.a.createElement(N.a.Item,{href:"#action/3.4"},"Logout")))))},T=a(16);var S=function(e){var t,a=r.a.useContext(h),n={},l=0,c=Object(T.a)(a.products);try{for(c.s();!(t=c.n()).done;){var o=t.value;o.category.title in n?(n[o.category.title]=n[o.category.title]+1,l+=1):(n[o.category.title]=1,l+=1)}}catch(i){c.e(i)}finally{c.f()}return r.a.createElement(w.a,{className:"flex-column"},r.a.createElement(A.b,{to:"/",className:"nav-link"},"All Products (",l,")"),Object.keys(n).map((function(e,t){return r.a.createElement(A.b,{key:t,to:"/category/"+e,className:"nav-link"},r.a.createElement("i",null,e," (",n[e],")"))})))};var B=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Recent:"),r.a.createElement("ul",null))};var z=function(e){return r.a.createElement("footer",null,r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("p",null,"\xa9 2020 Northwest Labs ")))},H=a(125);var F=function(e){return r.a.createElement(H.a,{size:"lg",color:"secondary"},r.a.createElement(H.a.Img,{variant:"top",src:"".concat("/static/build","/media/products/").concat(e.product.filename,"-1.png")}),r.a.createElement(H.a.Body,null,r.a.createElement(H.a.Title,null,e.product.name),r.a.createElement(H.a.Text,null,"$",e.product.price),r.a.createElement(A.b,{to:"/product/"+e.product.id,className:"btn btn-primary position-absolute",style:{top:"5px",right:"10px"}},"Details")))};var J=function(e){var t=r.a.useContext(h),a=[],n=Object(v.g)("/category/:name");if(null!=n){var l,c=Object(T.a)(t.products);try{for(c.s();!(l=c.n()).done;){var o=l.value;o.category.title===n.params.name&&a.push(o)}}catch(s){c.e(s)}finally{c.f()}}else{var i,u=Object(T.a)(t.products);try{for(u.s();!(i=u.n()).done;){var m=i.value;a.push(m)}}catch(s){u.e(s)}finally{u.f()}}return r.a.createElement(y.a,{fluid:!0,className:"p-4"},r.a.createElement(g.a,null,a.map((function(e,t){return r.a.createElement(C.a,{key:t,className:"col-3 my-2"},r.a.createElement(F,{product:e}))}))))};var M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{fluid:!0,className:"p-4"},r.a.createElement(g.a,{noGutters:!0},r.a.createElement(C.a,null,r.a.createElement("h1",null,"About"))),r.a.createElement(g.a,{noGutters:!0},r.a.createElement(C.a,null,"This site is about the Northwest Labs Assay Tests. Dang, more Northwest Labs!!"))))};var K=function(e){return r.a.createElement(y.a,{fluid:!0,className:"p-4"},r.a.createElement(g.a,{noGutters:!0},r.a.createElement(C.a,null,r.a.createElement("h1",null,"Help"))),r.a.createElement(g.a,{noGutters:!0},r.a.createElement(C.a,null,"If you need help, please contact the real Northwest Labs, not me lol")))},Q=a(77);var Z=function(e){var t=r.a.useContext(h),a=[],n=Object(v.f)(),l=0;return Object.keys(t.cart).forEach((function(e){var n,r=null,c=Object(T.a)(t.products);try{for(c.s();!(n=c.n()).done;){var o=n.value;""+o.id===e&&(r=o)}}catch(u){c.e(u)}finally{c.f()}var i=t.cart[e]*r.price;r&&a.push({id:r.id,filename:r.filename,name:r.name,quantity:t.cart[e],price:r.price,extended:i}),l+=i})),r.a.createElement("div",{className:"m-4 table-responsive text-nowrap"},r.a.createElement("p",null,"Shopping Cart"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Product"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Extended"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("img",{alt:e.name,src:"/products/"+e.filename+"-1.png",className:"border rounded mt-1 mx-1",style:{height:"100px",width:"100px"}})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,r.a.createElement(Q.a,{variant:"secondary",onClick:function(a){t.subQuantity(e.id)}},"-"),"\xa0 \xa0",e.quantity,"\xa0 \xa0",r.a.createElement(Q.a,{variant:"secondary",onClick:function(a){t.addQuantity(e.id)}},"+")),r.a.createElement("td",null,e.price),r.a.createElement("td",null,e.extended),r.a.createElement("td",null,r.a.createElement(Q.a,{variant:"secondary",onClick:function(a){t.removeFromCart(e.id)}},"Remove")))})))),r.a.createElement("p",null,"Total: ",l),r.a.createElement(Q.a,{variant:"secondary",onClick:function(e){n.push("/checkout"),t.updateCartTotal(l)}},"Checkout"))},G=a(47);var I=function(e){var t,a=r.a.useContext(h),n=Object(v.g)("/product/:id"),l=r.a.useState("1"),c=Object(G.a)(l,2),o=c[0],i=c[1],u=null,m=Object(v.f)(),s=Object(T.a)(a.products);try{for(s.s();!(t=s.n()).done;){var d=t.value;""+d.id===n.params.id&&(u=d)}}catch(p){s.e(p)}finally{s.f()}return u?r.a.createElement("div",{className:"m-4"},r.a.createElement("div",{className:"float-right border rounded m-0 p-0",style:{width:"300px",height:"300px"}},r.a.createElement("img",{alt:u.name,src:"".concat("/static/build","/media/products/").concat(u.filename,"-").concat(o,".png"),style:{width:"300px",height:"300px"},className:"w-100"}),r.a.createElement("div",null,["1","2","3","4"].map((function(e){return r.a.createElement("img",{key:u.id+e,alt:u.name,src:"".concat("/static/build","/media/products/").concat(u.filename,"-").concat(e,".png"),className:"border rounded mt-3 mx-1",style:{height:"30px",width:"30px"},onMouseEnter:function(t){i(e)}})})))),r.a.createElement("h1",null,u.name),r.a.createElement("h2",null,"$",u.price),r.a.createElement("p",null," ",u.description),r.a.createElement(Q.a,{variant:"warning",onClick:function(e){a.addToCart(u.id),m.push("/cart")}},"Add To Cart")):r.a.createElement("h2",null,"Product Not Found")},P=a(120),R=a(122),Y=a(50),L=a(26),X=a(82),D=Object(X.a)("pk_test_S21YezIw2QBn8SXH89kB0uQ200rYoIY56T");var U=function(e){return r.a.createElement(L.Elements,{stripe:D},r.a.createElement(q,null))},q=function(e){var t=r.a.useContext(h),a=Object(L.useStripe)(),n=Object(L.useElements)(),l=t.getCartTotal(),c=Object(v.f)(),o=r.a.useState(null),m=Object(G.a)(o,2),s=m[0],d=m[1];return r.a.createElement(Y.c,{initialValues:{name:"Conrad Fox",address1:"1234",address2:"5678",city:"Provo",state:"UT",zipcode:"84602"},validateOnChange:!1,validateOnBlur:!1,validate:function(e){var t={};return e.name||(t.name="Required"),e.address1||(t.address1="Required"),e.city||(t.city="Required"),e.state||(t.state="Required"),e.zipcode||(t.zipcode="Required"),t},onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(r,o){var u,m,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=[],Object.keys(t.cart).forEach((function(e){var a,n=null,r=Object(T.a)(t.products);try{for(r.s();!(a=r.n()).done;){var l=a.value;""+l.id===e&&(n=l)}}catch(c){r.e(c)}finally{r.f()}n&&u.push({pid:n.id,qty:t.cart[e],price:parseFloat(n.price)})})),console.log(t.cart),console.log("cart",u),e.next=6,b.a.post("http://localhost:8000/api/sale/",{name:r.name,address1:r.address1,address2:r.address2,city:r.city,state:r.state,zipcode:r.zipcode,total:l.total,items:u});case 6:return m=e.sent,console.log("card element",n.getElement(L.CardElement)),e.next=10,a.confirmCardPayment(m.data.client_secret,{payment_method:{card:n.getElement(L.CardElement),billing_details:{name:r.name}}});case 10:if(s=e.sent,console.log(s),!s.error){e.next=17;break}return d(s.error.message),e.abrupt("return");case 17:t.clearCart(),c.push("/receipt");case 19:return e.next=21,new Promise((function(e){setTimeout((function(){e()}),3e3)}));case 21:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){return r.a.createElement("div",null,s&&r.a.createElement("p",{className:"danger"},s),r.a.createElement(V,{form:e,total:l}))}))},V=function(e){return r.a.createElement("div",null,r.a.createElement(y.a,null,"\xa0",r.a.createElement("h2",null,"Checkout"),"\xa0",r.a.createElement(Y.b,null,r.a.createElement(g.a,null,r.a.createElement(C.a,null,r.a.createElement("div",{className:"p-3 mb-0 bg-info rounded-top border border-bottom-0 border-dark"},r.a.createElement("h5",null,"Shipping")),r.a.createElement("div",{className:"p-3 mb-0 bg-white rounded-bottom border border-dark"},r.a.createElement(W,{title:"Name:",name:"name",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(W,{title:"Address 1:",name:"address1",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(W,{title:"Address 2:",name:"address2",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(W,{title:"City:",name:"city",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(W,{title:"State:",name:"state",type:"text",disabled:e.form.isSubmitting}),r.a.createElement(W,{title:"Zip Code:",name:"zipcode",type:"text",disabled:e.form.isSubmitting}))),r.a.createElement(C.a,null,r.a.createElement("div",{className:"p-3 mb-0 bg-info rounded-top border border-bottom-0 border-dark"},r.a.createElement("h5",null,"Payment")),r.a.createElement("div",{className:"p-3 mb-0 bg-white rounded-bottom border border-dark"},r.a.createElement(L.CardElement,null)),"\xa0",r.a.createElement("div",null,"Your card will be charged ",e.total.total),"\xa0",r.a.createElement("div",null,r.a.createElement(Q.a,{variant:"secondary",type:"submit",disabled:e.form.isSubmitting},e.form.isSubmitting&&r.a.createElement(P.a,{animation:"border",variant:"dark",size:"sm"})," "," "," ",e.form.isSubmitting&&r.a.createElement("span",null,"Loading"),!e.form.isSubmitting&&r.a.createElement("span",null,"Purchase"))))))))},W=function(e){return r.a.createElement(Y.a,{name:e.name},(function(t){return r.a.createElement(R.a.Group,null,e.title&&r.a.createElement(R.a.Label,null,e.title),r.a.createElement(R.a.Control,Object.assign({type:e.type,placeholder:e.placeholder,disabled:e.disabled},t.field)),t.meta.touched&&t.meta.error&&r.a.createElement("div",{className:"text-danger"},t.meta.error))}))};var _=function(e){return r.a.createElement("div",{className:"m-4"},r.a.createElement("h1",null,"Thank you for your purchase!"))};a(115);var $=function(e){return r.a.createElement(A.a,null,r.a.createElement(y.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},r.a.createElement(g.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},r.a.createElement(C.a,{className:"px-0 py-0 bg-primary"},r.a.createElement(k,null))),r.a.createElement(g.a,{noGutters:!0,className:"flex-grow-1"},r.a.createElement(C.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},r.a.createElement(S,null)),r.a.createElement(C.a,{md:"8",className:"bg-white"},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/about"},r.a.createElement(M,null)),r.a.createElement(v.a,{path:"/cart"},r.a.createElement(Z,null)),r.a.createElement(v.a,{path:"/checkout"},r.a.createElement(U,null)),r.a.createElement(v.a,{path:"/help"},r.a.createElement(K,null)),r.a.createElement(v.a,{path:"/receipt"},r.a.createElement(_,null)),r.a.createElement(v.a,{path:"/product/:id"},r.a.createElement(I,null)),r.a.createElement(v.a,{path:"/category/:name"},r.a.createElement(J,null)),r.a.createElement(v.a,{path:"/"},r.a.createElement(J,null)))),r.a.createElement(C.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},r.a.createElement(B,null))),r.a.createElement(g.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},r.a.createElement(C.a,{className:"px-0 py-0 bg-primary"},r.a.createElement(z,null)))))},ee=a(27),te=function(e){Object(E.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addToCart=function(e){n.setState((function(t){return Object(ee.a)(t,(function(t){if(t.cart[e]){var a=t.cart[e];t.cart[e]=a+1,t.cartCount=t.cartCount+1}else t.cart[e]=1,t.cartCount=t.cartCount+1}))}))},n.removeFromCart=function(e){n.setState((function(t){return Object(ee.a)(t,(function(t){t.cart[e]&&(t.cartCount=t.cartCount-t.cart[e],delete t.cart[e])}))}))},n.addQuantity=function(e){n.setState((function(t){return Object(ee.a)(t,(function(t){if(t.cart[e]){var a=t.cart[e];t.cart[e]=a+1,t.cartCount=t.cartCount+1}}))}))},n.subQuantity=function(e){n.setState((function(t){return Object(ee.a)(t,(function(t){if(t.cart[e])if(t.cart[e]<=1)delete t.cart[e],t.cartCount=t.cartCount-1;else{var a=t.cart[e];t.cart[e]=a-1,t.cartCount=t.cartCount-1}}))}))},n.updateCartTotal=function(e){n.setState((function(t){return Object(ee.a)(t,(function(t){t.cartTotal=e}))}))},n.getCartTotal=function(){return{total:n.state.cartTotal}},n.clearCart=function(){n.setState((function(e){return Object(ee.a)(e,(function(e){e.cartTotal=0,e.cartCount=0,e.cart={}}))}))},n.actions={addToCart:n.addToCart,removeFromCart:n.removeFromCart,addQuantity:n.addQuantity,subQuantity:n.subQuantity,updateCartTotal:n.updateCartTotal,getCartTotal:n.getCartTotal,clearCart:n.clearCart},n.state={categories:null,products:null,cart:{},cartCount:0,cartTotal:0},n}return Object(d.a)(a,[{key:"render",value:function(){return this.state.categories&&this.state.products&&this.state.cart?r.a.createElement(h.Provider,{value:Object(m.a)({},this.state,{},this.actions)},r.a.createElement($,null)):r.a.createElement("div",null,r.a.createElement(P.a,{animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://localhost:8000/api/category");case 2:return t=e.sent,e.next=5,b.a.get("http://localhost:8000/api/product");case 5:a=e.sent,this.setState(Object(m.a)({},this.state,{categories:t.data,products:a.data}));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},57:function(e,t,a){},70:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABfVBMVEUAAADr6+vt7e3t7e3b2t3f3+Hu7u7t7e3i4ubs7Oze3uDt7e3f3+Hz8/Pt7e3b2t3h4eHt7e3T09Xc293i4uKhoKfd3N6/v8Pt7e3Pz9KurbPd3N63t7rh4eH////o6Ojh4eHt7e3e3d/v7+/i4uKPj4+SkZnOztHMzMyKiJHW1tiJiZLHx8mJiZOKiJHo6Oi/v8T///+JiJDZ2Nr///+KiJHJx8yJiZCKiJHBvsGKiZLS0dSKiJHp6emAgJ+KiJHIyMiKiJHi4uOJiZHKysyZmZmKiJHY2NrMzMyAgICJh5CKiZGKiJHf3uDKyc2/v7/t7e3Y19rZ2NvMy87d3d6KiJGNi5Tr6+u5uLzJyczHx8qPjZXe3d+dnKOwr7WMipOYl57s7Ozm5ufT0tbOzdDR0NPPz9LPztGtrLHY2Nrn5+fq6urd3N6lo6rFxMjLys24t7yRj5jo5+jg4OGYlp6urbPl5ebEw8eUk5uTkpqjoajb29zc296UkpoAAADxtdvrAAAAUHRSTlMATtb9+IYs+lB7vHOyFeX8Khzc9zXl58yuwNzoUV8H1BGOzz59EN/+LaXkUpYa7f44AbbtAm2uJ/VKqN/0/gj+Dt/7eboFu+wKBHPT+feyCAhrXWsAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH5AEcFSMFsoDQ1gAAAUBJREFUOMul0VVXw0AQBeBAi7u7u7u7O2wIQ4oUaIFSCC7F/ztJdtNM0zl54b7k4X7ZczeRpGgSEj2MMVmPN0kikpzCmADybioB0pgN5HQCZGCQSYCsbBvk5FIj8vIVZc8EBYUSmSKAfdUAxXQvlfh8B8wNlFobXE44dAX6hiPXDWWKcvy/DeV+/4kJKui+8hTgLGD+qyqqr64JBoMB/qm9tQSowz+rPr5v8AhwfnEZupIbnX1Tc/ja6G9CmvG4bWl1gDYAuLt/eHxiIu2xfQdYsQDrxH1Xdzzo6bX7vn7A4Fk1xcBgFAwBBqr8ws8YtvqRUd69vvETIhoH2pgA4+Lld/aBNuiZEAsmBfj8AghHEJjiYHoGTfj+wUfMcjGHwK+K+nmxYQFibmFnUYClZRqsrFr3XFvf2HQCbWt7x+j+ACItpRQ9ZVUCAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTI4VDIxOjM1OjA1KzAwOjAwbVp26AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0yOFQyMTozNTowNSswMDowMBwHzlQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},85:function(e,t,a){e.exports=a(116)}},[[85,1,2]]]);
//# sourceMappingURL=main.a54cbb43.chunk.js.map