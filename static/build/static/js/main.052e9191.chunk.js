(this.webpackJsonpnorthwestlabs=this.webpackJsonpnorthwestlabs||[]).push([[0],{105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),m=(t(78),t(79),t(45),t(39)),i=t.n(m),o=t(56),s=t(43),u=t(57),E=t(58),p=t(71),d=t(72),g=t(59),h=t.n(g),y=l.a.createContext(),b=t(9),f=t(19),v=t(109),w=t(110),x=t(111),k=t(114),A=t(115),C=t(108),N=t(60),O=t.n(N);var j=function(e){return l.a.createElement(k.a,{bg:"primary",expand:"lg",style:{color:"black",opacity:"1"}},l.a.createElement(k.a.Brand,{href:"/home/"},l.a.createElement("img",{alt:"Site Icon",src:O.a}),"    ","COVID-19 Campaigns"),l.a.createElement(k.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(k.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(A.a,{className:"mr-auto"}),l.a.createElement(A.a.Link,{style:{color:"black"},href:"/index/"},"Predict Campaign Success"),l.a.createElement(A.a.Link,{style:{color:"black"},href:"/home/"},"Campaign Search"),l.a.createElement(A.a,{style:{color:"black",opacity:"1"}},l.a.createElement(C.a,{style:{color:"black",opacity:"1"},title:"Welcome, New User",alignRight:!0},l.a.createElement(C.a.Item,{style:{color:"black"},href:"/home/"},"My Account"),l.a.createElement(C.a.Divider,null),l.a.createElement(C.a.Item,{href:"/login/"},"Logout")))))},B=t(14),D=t(28),I=t(22),G=t(68),S=t(40);var P=function(e){var a,t=l.a.useContext(y),n=l.a.useState(0),r=Object(D.a)(n,2),c=r[0],m=r[1],i=l.a.useState(0),o=Object(D.a)(i,2),s=o[0],u=o[1],E={},p={},d={},g=Object(B.a)(t.campaigns);try{for(g.s();!(a=g.n()).done;){var h=a.value;h.category in E?E[h.category]=E[h.category]+1:E[h.category]=1}}catch(x){g.e(x)}finally{g.f()}var f,v=Object(B.a)(t.campaigns);try{for(v.s();!(f=v.n()).done;){var w=f.value;w.currencycode in p?p[w.currencycode]=p[w.currencycode]+1:p[w.currencycode]=1}}catch(x){v.e(x)}finally{v.f()}return d.True=1,d.False=0,l.a.createElement(A.a,{className:"flex-column"},l.a.createElement("div",null,l.a.createElement("h4",null,"Filter Search")),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(I.a,{as:S.a,style:{width:"90%"}},l.a.createElement(G.a,{variant:"primary",style:{width:"90%"}},l.a.createElement(b.b,{to:"/home/",style:{color:"black"}},"All Categories")),l.a.createElement(I.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",style:{width:"10%"}}),l.a.createElement(I.a.Menu,null,Object.keys(E).map((function(e,a){return l.a.createElement(I.a.Item,{key:a,className:"nav-link"},l.a.createElement(b.b,{to:"/campaign-category/"+e,className:"nav-link"},l.a.createElement("i",null,e," (",E[e],")")))}))))),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(I.a,{as:S.a,style:{width:"90%"}},l.a.createElement(G.a,{variant:"primary",style:{width:"90%"}},l.a.createElement(b.b,{to:"/home/",style:{color:"black"}},"All Currencies")),l.a.createElement(I.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",style:{width:"10%"}}),l.a.createElement(I.a.Menu,null,Object.keys(p).map((function(e,a){return l.a.createElement(I.a.Item,{key:a,className:"nav-link"},l.a.createElement(b.b,{to:"/campaign-currency/"+e,className:"nav-link"},l.a.createElement("i",null,e," (",p[e],")")))}))))),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(b.b,{to:"/campaign-charity/1",className:"nav-link btn btn-primary",style:{width:"90%",color:"black"}},"Valid Charities")),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(b.b,{to:"/campaign-goal/minGoal/"+c+"/maxGoal/"+s,className:"nav-link btn btn-primary",style:{width:"90%",color:"black"}},"Apply Goal Range"),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){return m(e.target.value)},placeholder:"Min",style:{width:"44%"}}),"-",l.a.createElement("input",{onChange:function(e){return u(e.target.value)},placeholder:"Max",style:{width:"44%"}})))},T=function(){return Object(n.useEffect)((function(){var e=document.createElement("a");e.setAttribute("class","twitter-timeline"),e.setAttribute("data-theme","dark"),e.setAttribute("data-tweet-limit","5"),e.setAttribute("data-chrome","noheader nofooter noborders"),e.setAttribute("href","https://twitter.com/AlrtCoronaVirus"),document.getElementsByClassName("twitter-embed")[0].appendChild(e);var a=document.createElement("script");a.setAttribute("src","https://platform.twitter.com/widgets.js"),document.getElementsByClassName("twitter-embed")[0].appendChild(a)}),[]),l.a.createElement("section",{className:"twitterContainer"},l.a.createElement("div",{className:"twitter-embed"}))};var F=function(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h4",null,"Coronavirus Alerts")),l.a.createElement("br",null),l.a.createElement(T,null))};var L=function(e){return l.a.createElement("footer",null,l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement("p",null,"\xa9 2020 COVID-19 Campaigns ")))},R=t(116),U=t(35);var V=function(e){var a,t=l.a.useContext(y),n=Object(f.g)("/campaign/:id"),r=null,c=Object(B.a)(t.campaigns);try{for(c.s();!(a=c.n()).done;){var m=a.value;""+m.id===n.params.id&&(r=m)}}catch(i){c.e(i)}finally{c.f()}return r?l.a.createElement("div",{className:"m-4"},l.a.createElement(v.a,null,l.a.createElement("h1",null,r.title),l.a.createElement(w.a,{style:{height:"100%"}},l.a.createElement(x.a,{xs:7},l.a.createElement("div",null,l.a.createElement("img",{alt:r.name,src:r.campaign_image_url,style:{width:"100%"},className:"w-100"})),l.a.createElement("div",null,l.a.createElement("hr",{style:{color:"black",backgroundColor:"black",height:".5px"}}),l.a.createElement("p",null," Category: ",r.category,r.charity_name?"  |  Charity: ".concat(r.charity_name):""),l.a.createElement("hr",{style:{color:"black",backgroundColor:"black",height:".5px"}}),l.a.createElement("p",null," ",r.description))),l.a.createElement(x.a,{xs:5},l.a.createElement(R.a,{size:"lg",color:"secondary",style:{width:"100%"}},l.a.createElement(R.a.Body,null,l.a.createElement(R.a.Text,null,l.a.createElement(R.a.Subtitle,{className:"text-info"},"Overall Ranking: ",r.ranking),l.a.createElement("br",null),l.a.createElement(R.a.Subtitle,null,l.a.createElement(U.a,{variant:"info",now:(100*r.percent_fulfilled).toFixed(2),label:"".concat((100*r.percent_fulfilled).toFixed(2),"%"),style:{marginBottom:"10px"}}),"$",r.current_amount," raised of $",r.goal),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(w.a,{style:{fontSize:".88em",textAlign:"center"}},l.a.createElement(x.a,null,l.a.createElement("span",{style:{textDecoration:"underline"}},"Days Active"),l.a.createElement("br",null),r.days_active),l.a.createElement(x.a,null,l.a.createElement("span",{style:{textDecoration:"underline"}},"Donators"),l.a.createElement("br",null),r.donators),l.a.createElement(x.a,null,l.a.createElement("span",{style:{textDecoration:"underline"}},"Hearts"),l.a.createElement("br",null),r.campaign_hearts),l.a.createElement(x.a,null,l.a.createElement("span",{style:{textDecoration:"underline"}},"Shares"),l.a.createElement("br",null),r.social_share_total))),l.a.createElement("br",null),l.a.createElement(R.a.Subtitle,null,l.a.createElement("div",null,l.a.createElement(w.a,null,l.a.createElement(x.a,null,l.a.createElement("img",{alt:r.name,src:"../media/user.jpg",style:{width:"100%"},className:"w-100"})),l.a.createElement(x.a,null,r.user_first_name," "," "," ",r.user_last_name,l.a.createElement("br",null),r.location_city,", ",r.location_country)))),l.a.createElement(G.a,{variant:"primary",href:r.url,style:{width:"100%"}},"Donate now"),l.a.createElement("br",null)))))))):l.a.createElement("h2",null,"Campaign Not Found")},Z=t(112),X=t(117);var Y=function(e){return l.a.createElement(R.a,{size:"lg",color:"secondary",style:{width:"100%"}},l.a.createElement(R.a.Img,{variant:"top",src:e.campaign.campaign_image_url}),l.a.createElement(R.a.Body,null,l.a.createElement(R.a.Title,null,e.campaign.title),l.a.createElement("br",null),l.a.createElement(R.a.Text,null,l.a.createElement(R.a.Subtitle,null,e.campaign.description.length>150?"".concat(e.campaign.description.substring(0,150),"..."):e.campaign.description),l.a.createElement("br",null),l.a.createElement(R.a.Subtitle,{className:"text-info"},"Overall Ranking: ",e.campaign.ranking),l.a.createElement("br",null),l.a.createElement(R.a.Subtitle,null,l.a.createElement(U.a,{variant:"info",now:(100*e.campaign.percent_fulfilled).toFixed(2),label:"".concat((100*e.campaign.percent_fulfilled).toFixed(2),"%"),style:{marginBottom:"5px"}}),"$",e.campaign.current_amount," raised of $",e.campaign.goal)),l.a.createElement(b.b,{to:"/campaign/"+e.campaign.id,className:"btn btn-primary position-absolute",style:{top:"5px",right:"10px"}},"Details")))};var _=function(e){var a=l.a.useContext(y),t=l.a.useState(0),n=Object(D.a)(t,2),r=n[0],c=n[1],m=0,i=[],o=[],s=Object(f.g)("/campaign-category/:name"),u=Object(f.f)("/campaign-goal/minGoal/:min/maxGoal/:max"),E=Object(f.g)("/campaign-currency/:name"),p=Object(f.g)("/campaign-charity/:name");if(null!=s){var d,g=Object(B.a)(a.campaigns);try{for(g.s();!(d=g.n()).done;){var h=d.value;h.category===s.params.name&&(i.push(h),m++)}}catch(R){g.e(R)}finally{g.f()}}else if(null!=u.min&&null!=u.max){var b,w=u.min,x=u.max,k=Object(B.a)(a.campaigns);try{for(k.s();!(b=k.n()).done;){var A=b.value;A.goal>=w&&A.goal<=x&&(i.push(A),m++)}}catch(R){k.e(R)}finally{k.f()}}else if(null!=p){console.log("match_charity.params.name: ",p.params.name);var C,N=Object(B.a)(a.campaigns);try{for(N.s();!(C=N.n()).done;){var O=C.value;console.log("p.charity_valid: ",O.charity_valid),O.charity_valid==p.params.name&&(i.push(O),m++)}}catch(R){N.e(R)}finally{N.f()}}else if(null!=E){var j,I=Object(B.a)(a.campaigns);try{for(I.s();!(j=I.n()).done;){var G=j.value;G.currencycode===E.params.name&&(i.push(G),m++)}}catch(R){I.e(R)}finally{I.f()}}else{var S,P=Object(B.a)(a.campaigns);try{for(P.s();!(S=P.n()).done;){var T=S.value;i.push(T),m++}}catch(R){P.e(R)}finally{P.f()}}if(i.sort((function(e,a){return e.ranking-a.ranking})),i.length<=6)for(var F=0;F<i.length;F++)o.push(i[F]);else{r<0&&c(0),r>i.length-6&&c(r-6);for(var L=r;L<r+6;L++)o.push(i[L])}return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement("br",null),l.a.createElement("div",null,"Search returned ",m," results."),l.a.createElement("br",null)),l.a.createElement(v.a,null,l.a.createElement(Z.a,null,o.map((function(e,a){return l.a.createElement(Y,{key:ImageBitmapRenderingContext,campaign:e})})))),l.a.createElement(v.a,null,l.a.createElement("div",null,l.a.createElement(X.a,{className:"float-right"},l.a.createElement(X.a.Prev,{onClick:function(e){c(r-6)}},"Previous Page"),l.a.createElement(X.a.Next,{onClick:function(e){c(r+6)}},"Next Page")))))};var M=function(e){return l.a.createElement("div",null,l.a.createElement("input",{placeholder:"Username"}),l.a.createElement("input",{placeholder:"Password"}),l.a.createElement(b.b,{to:"/home",className:"nav-link btn btn-primary",style:{width:"90%",color:"black"}},"Login"))};t(105);var z=function(e){return l.a.createElement(b.a,null,l.a.createElement(v.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},l.a.createElement(w.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},l.a.createElement(x.a,{className:"px-0 py-0 bg-primary"},l.a.createElement(j,null))),l.a.createElement(w.a,{noGutters:!0,className:"flex-grow-1"},l.a.createElement(x.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},l.a.createElement(P,null)),l.a.createElement(x.a,{md:"8",className:"bg-white"},l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/login"},l.a.createElement(M,null)),l.a.createElement(f.a,{path:"/campaign-details"},l.a.createElement(V,null)),l.a.createElement(f.a,{path:"/home"},l.a.createElement(_,null)),l.a.createElement(f.a,{path:"/campaign/:id"},l.a.createElement(V,null)),l.a.createElement(f.a,{path:"/campaign-category/:name"},l.a.createElement(_,null)),l.a.createElement(f.a,{path:"/campaign-goal/minGoal/:min/maxGoal/:max"},l.a.createElement(_,null)),l.a.createElement(f.a,{path:"/campaign-currency/:name"},l.a.createElement(_,null)),l.a.createElement(f.a,{path:"/campaign-charity/:name"},l.a.createElement(_,null)),l.a.createElement(f.a,{path:"/"},l.a.createElement(M,null)))),l.a.createElement(x.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},l.a.createElement(F,null))),l.a.createElement(w.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},l.a.createElement(x.a,{className:"px-0 py-0 bg-primary"},l.a.createElement(L,null)))))},K=t(113),J=function(e){Object(d.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).actions={},n.state={campaigns:null},n}return Object(E.a)(t,[{key:"render",value:function(){return this.state.campaigns?l.a.createElement(y.Provider,{value:Object(s.a)({},this.state,{},this.actions)},l.a.createElement(z,null)):l.a.createElement("div",null,l.a.createElement(K.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"componentDidMount",value:function(){var e=Object(o.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://localhost:8000/api/campaign");case 2:a=e.sent,this.setState(Object(s.a)({},this.state,{campaigns:a.data}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,a,t){},60:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEFElEQVRYR81XXWwUVRT+zszOtLst/aNUW4vV1ZYKxVgSI/68+EPBQLeBRGKQGNAYTKiYVB940CdN9AUTw4NpIhgx3a01CjHZoEZI0WBoZrG2aWHD6laTskXbRbstuzi7M9fcqR27s9POVivlPs797jnfnHPuud8h5Lm8PaFSpPVtEIRHATQzsDsIVC7HY4yA3wH8AoZ+JtJpVUwFo/t2TuZjmpxA3u6+BujCQRA9DcBtxcvxGKxGGJAC0A2Ib4fbt15ayMe8BGo6Q57CFewNEL0EQJrPiB2Bf7CUZsDhhITXY/tak3Y2bAl4u87VQxCPA7TOKUILEzBPD0Oj7Rdfbo1Y7eUQuDugNOuMvgKh0sn5hsoiSJMT+OEKLwGnReOk65svHGjrn4vMIjDz566zAFY5masvLcTJLTxADG3dZ/Dj1SmnI2CgcdLw8NxImARqe75zy5qk5BN27qnGI+OLJ9cCjMEX6MXYNK+7vNbwlFp5/2jHQ8YBk4DXrxwCUYc1PC21ZRhLqhi8mltD960sgjw5gYFfc1PQVFWGW4vdOBUdA7PwYqB3wu2tr5gEjKvGxCFrtXPn7z1yF1RdxwMnBpFQtSxTa0oLIU2OIxLPDn9JgYRv9rZAFgUcOBnC19ExCwV+O4QmfkWNCHj9ylEQ7bUG8N4KDz5+Yg0yGvDg54OYTmcTWF/ugZSYwPBvf2QdLZZd6N2zCS5BwO7PzmLIss/BDPgg3O57jowOp4FTzGkyHFgii9AZ0Hp7OT4diaNAFPBC4y3w1VVgdXGB4Xg0kUTw0mUc7f8J1zUNOxpXIxi5DIEIiT/TtoXBm5UqXa8mbyC0C0CXU/nIAmFPQxV211fhtiLZFh6bSiEw9DOODUSR1nQnk2ACPUPeLuV9CPS8E3qFJCK4Ze28zmfPcxLbu89gSrX/8yw/DEfIG1DOA7TBiUDH+hrsX1ftBDP2O0MRvNsXzgf7Pd3pVyaIaOVcNG8y19I6YknV/Ny7rcnMuZNlXhMtH50yYdXFbhTJLrtmFSevP6SBIMyieXvtebwRyYyGZ3sjSGU0yIKAE5vvcfKbtf/UJ99C1TS4XS4cadsIj0s0bkR/dtvWbwwB30Z4JDsCTL8JUrDcRXgTXMOlbkQjODYwsohGtNyteNkfI4PAh30NkG/0c5xuCrfvmHmO/46CrSDZVFuGKwsIEq4JBxcrSAiHwvt9r3K/2ZIsIykgZyXMD5qSDAw+/xJIMiMK/7MoBWgc84nS2VTUBZRmEfRlPsp4MbKcK2LBSZab9cAjQeLxfNKx5IPJLAlDpmekN//7aKYfnq5a9drozhkZbl3Owym/otK/G07JRW9dfDF3HJtLwpGAmZbOUClKsBXAYzPjOeoIqMgZz0Gn1WupYPRgfuP5X69HNNaGrVG4AAAAAElFTkSuQmCC"},73:function(e,a,t){e.exports=t(106)}},[[73,1,2]]]);
//# sourceMappingURL=main.052e9191.chunk.js.map