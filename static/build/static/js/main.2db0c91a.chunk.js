(this.webpackJsonpnorthwestlabs=this.webpackJsonpnorthwestlabs||[]).push([[0],{106:function(e,a,t){},107:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(29),c=t.n(r),i=(t(79),t(80),t(45),t(39)),m=t.n(i),o=t(56),s=t(43),u=t(57),E=t(58),g=t(72),p=t(73),d=t(59),h=t.n(d),y=l.a.createContext(),b=t(11),f=t(19),v=t(110),A=t(111),w=t(112),x=t(115),C=t(116),O=t(109),N=t(60),k=t.n(N);var I=function(e){return l.a.createElement(x.a,{bg:"primary",expand:"lg",style:{color:"black"}},l.a.createElement(x.a.Brand,{href:"/home/"},l.a.createElement("img",{alt:"Site Icon",src:k.a}),"    ","COVID-19 Campaigns"),l.a.createElement(x.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(x.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(C.a,{className:"mr-auto"}),l.a.createElement(C.a.Link,{style:{color:"black",opacity:".5"},href:"/prediction/"},"Predict Campaign Success"),l.a.createElement(C.a.Link,{style:{color:"black",opacity:".5"},href:"/home/"},"Campaign Search"),l.a.createElement(C.a,{style:{color:"black"}},l.a.createElement(O.a,{style:{color:"black"},title:"Welcome, New User",alignRight:!0,id:"basic-nav-dropdown"},l.a.createElement(O.a.Item,{style:{color:"black"},href:"/home/"},"My Account"),l.a.createElement(O.a.Divider,null),l.a.createElement(O.a.Item,{href:"/login/"},"Logout")))))},j=t(14),B=t(28),D=t(22),S=t(68),P=t(40);var G=function(e){var a,t=l.a.useContext(y),n=l.a.useState(0),r=Object(B.a)(n,2),c=r[0],i=r[1],m=l.a.useState(0),o=Object(B.a)(m,2),s=o[0],u=o[1],E={},g={},p={},d=Object(j.a)(t.campaigns);try{for(d.s();!(a=d.n()).done;){var h=a.value;h.category in E?E[h.category]=E[h.category]+1:E[h.category]=1}}catch(w){d.e(w)}finally{d.f()}var f,v=Object(j.a)(t.campaigns);try{for(v.s();!(f=v.n()).done;){var A=f.value;A.currencycode in g?g[A.currencycode]=g[A.currencycode]+1:g[A.currencycode]=1}}catch(w){v.e(w)}finally{v.f()}return p.True=1,p.False=0,l.a.createElement(C.a,{className:"flex-column"},l.a.createElement("div",null,l.a.createElement("h4",null,"Filter Search")),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(D.a,{as:P.a,style:{width:"90%"}},l.a.createElement(S.a,{variant:"primary",style:{width:"90%"}},l.a.createElement(b.b,{to:"/home/",style:{color:"black"}},"All Categories")),l.a.createElement(D.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",style:{width:"10%"}}),l.a.createElement(D.a.Menu,null,Object.keys(E).map((function(e,a){return l.a.createElement(D.a.Item,{key:a,className:"nav-link"},l.a.createElement(b.b,{to:"/campaign-category/"+e,className:"nav-link"},l.a.createElement("i",null,e," (",E[e],")")))}))))),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(D.a,{as:P.a,style:{width:"90%"}},l.a.createElement(S.a,{variant:"primary",style:{width:"90%"}},l.a.createElement(b.b,{to:"/home/",style:{color:"black"}},"All Currencies")),l.a.createElement(D.a.Toggle,{split:!0,variant:"success",id:"dropdown-split-basic",style:{width:"10%"}}),l.a.createElement(D.a.Menu,null,Object.keys(g).map((function(e,a){return l.a.createElement(D.a.Item,{key:a,className:"nav-link"},l.a.createElement(b.b,{to:"/campaign-currency/"+e,className:"nav-link"},l.a.createElement("i",null,e," (",g[e],")")))}))))),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(b.b,{to:"/campaign-charity/1",className:"nav-link btn btn-primary",style:{width:"90%",color:"black"}},"Valid Charities")),l.a.createElement("hr",{style:{border:"1px solid primary"}}),l.a.createElement("div",null,l.a.createElement(b.b,{to:"/campaign-goal/minGoal/"+c+"/maxGoal/"+s,className:"nav-link btn btn-primary",style:{width:"90%",color:"black"}},"Apply Goal Range"),l.a.createElement("br",null),l.a.createElement("input",{onChange:function(e){return i(e.target.value)},placeholder:"Min",style:{width:"44%"}}),"-",l.a.createElement("input",{onChange:function(e){return u(e.target.value)},placeholder:"Max",style:{width:"44%"}})))},M=function(){return Object(n.useEffect)((function(){var e=document.createElement("a");e.setAttribute("class","twitter-timeline"),e.setAttribute("data-theme","dark"),e.setAttribute("data-tweet-limit","5"),e.setAttribute("data-chrome","noheader nofooter noborders"),e.setAttribute("href","https://twitter.com/AlrtCoronaVirus"),document.getElementsByClassName("twitter-embed")[0].appendChild(e);var a=document.createElement("script");a.setAttribute("src","https://platform.twitter.com/widgets.js"),document.getElementsByClassName("twitter-embed")[0].appendChild(a)}),[]),l.a.createElement("section",{className:"twitterContainer"},l.a.createElement("div",{className:"twitter-embed"}))};var R=function(e){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h4",null,"Coronavirus Alerts")),l.a.createElement("br",null),l.a.createElement(M,null))};var T=function(e){return l.a.createElement("footer",null,l.a.createElement("div",{className:"text-center mt-5"},l.a.createElement("p",null,"\xa9 2020 COVID-19 Campaigns ")))},z=t(117),L=t(35),U=t(71),K=t.n(U);var V=function(e){var a,t=l.a.useContext(y),n=Object(f.g)("/campaign/:id"),r=null,c=Object(j.a)(t.campaigns);try{for(c.s();!(a=c.n()).done;){var i=a.value;""+i.id===n.params.id&&(r=i)}}catch(m){c.e(m)}finally{c.f()}return r?l.a.createElement("div",{className:"m-4"},l.a.createElement(v.a,null,l.a.createElement("h1",null,r.title),l.a.createElement(A.a,{style:{height:"100%"}},l.a.createElement(w.a,{xs:7},l.a.createElement("div",null,l.a.createElement("img",{alt:r.name,src:r.campaign_image_url,style:{width:"100%"},className:"w-100"})),l.a.createElement("div",null,l.a.createElement("hr",{style:{color:"black",backgroundColor:"black",height:".5px"}}),l.a.createElement("p",null,l.a.createElement("strong",null," Category: ",r.category,r.charity_name?"  |  Charity: ".concat(r.charity_name):"")),l.a.createElement("hr",{style:{color:"black",backgroundColor:"black",height:".5px"}}),l.a.createElement("p",null," ",r.description))),l.a.createElement(w.a,{xs:5},l.a.createElement(z.a,{size:"lg",color:"secondary",style:{width:"100%"}},l.a.createElement(z.a.Body,null,l.a.createElement(z.a.Text,null,l.a.createElement(z.a.Subtitle,{className:"text-info"},"Overall Ranking: ",r.ranking),l.a.createElement("br",null),l.a.createElement(z.a.Subtitle,null,l.a.createElement(L.a,{variant:"info",now:(100*r.percent_fulfilled).toFixed(2),label:"".concat((100*r.percent_fulfilled).toFixed(2),"%"),style:{marginBottom:"10px"}}),"$",r.current_amount," raised of $",r.goal),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(A.a,{style:{fontSize:".88em",textAlign:"center"}},l.a.createElement(w.a,null,l.a.createElement("span",{style:{textDecoration:"underline"}},"Days Active"),l.a.createElement("br",null),r.days_active),l.a.createElement(w.a,null,l.a.createElement("span",{style:{textDecoration:"underline"}},"Donors"),l.a.createElement("br",null),r.donators),l.a.createElement(w.a,null,l.a.createElement("span",{style:{textDecoration:"underline"}},"Hearts"),l.a.createElement("br",null),r.campaign_hearts),l.a.createElement(w.a,null,l.a.createElement("span",{style:{textDecoration:"underline"}},"Shares"),l.a.createElement("br",null),r.social_share_total))),l.a.createElement("br",null),l.a.createElement(z.a.Subtitle,null,l.a.createElement("div",null,l.a.createElement(A.a,null,l.a.createElement(w.a,null,l.a.createElement("img",{alt:r.name,src:K.a,style:{width:"50px"}})),l.a.createElement(w.a,null,r.user_first_name," "," "," ",r.user_last_name,l.a.createElement("br",null),r.location_city,", ",r.location_country),l.a.createElement(w.a,null)))),l.a.createElement("br",null),l.a.createElement(S.a,{variant:"primary",href:r.url,style:{width:"100%"}},"Donate now"),l.a.createElement("br",null)))))))):l.a.createElement("h2",null,"Campaign Not Found")},Z=t(113),J=t(118);var Y=function(e){return l.a.createElement(z.a,{size:"lg",color:"secondary",style:{width:"100%"}},l.a.createElement(z.a.Img,{variant:"top",src:e.campaign.campaign_image_url}),l.a.createElement(z.a.Body,null,l.a.createElement(z.a.Title,null,e.campaign.title),l.a.createElement("br",null),l.a.createElement(z.a.Text,null,l.a.createElement(z.a.Subtitle,null,e.campaign.description.length>150?"".concat(e.campaign.description.substring(0,150),"..."):e.campaign.description),l.a.createElement("br",null),l.a.createElement(z.a.Subtitle,{className:"text-info"},"Overall Ranking: ",e.campaign.ranking),l.a.createElement("br",null),l.a.createElement(z.a.Subtitle,null,l.a.createElement(L.a,{variant:"info",now:(100*e.campaign.percent_fulfilled).toFixed(2),label:"".concat((100*e.campaign.percent_fulfilled).toFixed(2),"%"),style:{marginBottom:"5px"}}),"$",e.campaign.current_amount," raised of $",e.campaign.goal)),l.a.createElement(b.b,{to:"/campaign/"+e.campaign.id,className:"btn btn-primary position-absolute",style:{top:"5px",right:"10px"}},"Details")))};var F=function(e){var a=l.a.useContext(y),t=l.a.useState(0),n=Object(B.a)(t,2),r=n[0],c=n[1],i=0,m=[],o=[],s=Object(f.g)("/campaign-category/:name"),u=Object(f.f)("/campaign-goal/minGoal/:min/maxGoal/:max"),E=Object(f.g)("/campaign-currency/:name"),g=Object(f.g)("/campaign-charity/:name");if(null!=s){var p,d=Object(j.a)(a.campaigns);try{for(d.s();!(p=d.n()).done;){var h=p.value;h.category===s.params.name&&(m.push(h),i++)}}catch(z){d.e(z)}finally{d.f()}}else if(null!=u.min&&null!=u.max){var b,A=u.min,w=u.max,x=Object(j.a)(a.campaigns);try{for(x.s();!(b=x.n()).done;){var C=b.value;C.goal>=A&&C.goal<=w&&(m.push(C),i++)}}catch(z){x.e(z)}finally{x.f()}}else if(null!=g){console.log("match_charity.params.name: ",g.params.name);var O,N=Object(j.a)(a.campaigns);try{for(N.s();!(O=N.n()).done;){var k=O.value;console.log("p.charity_valid: ",k.charity_valid),k.charity_valid==g.params.name&&(m.push(k),i++)}}catch(z){N.e(z)}finally{N.f()}}else if(null!=E){var I,D=Object(j.a)(a.campaigns);try{for(D.s();!(I=D.n()).done;){var S=I.value;S.currencycode===E.params.name&&(m.push(S),i++)}}catch(z){D.e(z)}finally{D.f()}}else{var P,G=Object(j.a)(a.campaigns);try{for(G.s();!(P=G.n()).done;){var M=P.value;m.push(M),i++}}catch(z){G.e(z)}finally{G.f()}}if(m.sort((function(e,a){return e.ranking-a.ranking})),m.length<=6)for(var R=0;R<m.length;R++)o.push(m[R]);else{r<0&&c(0),r>m.length-6&&c(r-6);for(var T=r;T<r+6;T++)o.push(m[T])}return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement("br",null),l.a.createElement("div",null,"Search returned ",i," results."),l.a.createElement("br",null)),l.a.createElement(v.a,null,l.a.createElement(Z.a,null,o.map((function(e,a){return l.a.createElement(Y,{key:ImageBitmapRenderingContext,campaign:e})})))),l.a.createElement(v.a,null,l.a.createElement("div",null,l.a.createElement(J.a,{className:"float-right"},l.a.createElement(J.a.Prev,{onClick:function(e){c(r-6)}},"Previous Page"),l.a.createElement(J.a.Next,{onClick:function(e){c(r+6)}},"Next Page")))))};t(106);var Q=function(e){return l.a.createElement(b.a,null,l.a.createElement(v.a,{fluid:!0,className:"p-0 min-vh-100 d-flex flex-column"},l.a.createElement(A.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},l.a.createElement(w.a,{className:"px-0 py-0 bg-primary"},l.a.createElement(I,null))),l.a.createElement(A.a,{noGutters:!0,className:"flex-grow-1"},l.a.createElement(w.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},l.a.createElement(G,null)),l.a.createElement(w.a,{md:"8",className:"bg-white"},l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/campaign-details"},l.a.createElement(V,null)),l.a.createElement(f.a,{path:"/home"},l.a.createElement(F,null)),l.a.createElement(f.a,{path:"/campaign/:id"},l.a.createElement(V,null)),l.a.createElement(f.a,{path:"/campaign-category/:name"},l.a.createElement(F,null)),l.a.createElement(f.a,{path:"/campaign-goal/minGoal/:min/maxGoal/:max"},l.a.createElement(F,null)),l.a.createElement(f.a,{path:"/campaign-currency/:name"},l.a.createElement(F,null)),l.a.createElement(f.a,{path:"/campaign-charity/:name"},l.a.createElement(F,null)))),l.a.createElement(w.a,{md:"2",className:"px-3 py-4 shadow bg-secondary"},l.a.createElement(R,null))),l.a.createElement(A.a,{noGutters:!0,className:"flex-grow-0 flex-shrink-0 shadow-sm"},l.a.createElement(w.a,{className:"px-0 py-0 bg-primary"},l.a.createElement(T,null)))))},X=t(114),W=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).actions={},n.state={campaigns:null},n}return Object(E.a)(t,[{key:"render",value:function(){return this.state.campaigns?l.a.createElement(y.Provider,{value:Object(s.a)({},this.state,{},this.actions)},l.a.createElement(Q,null)):l.a.createElement("div",null,l.a.createElement(X.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))}},{key:"componentDidMount",value:function(){var e=Object(o.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/campaign");case 2:a=e.sent,this.setState(Object(s.a)({},this.state,{campaigns:a.data}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},45:function(e,a,t){},60:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEFElEQVRYR81XXWwUVRT+zszOtLst/aNUW4vV1ZYKxVgSI/68+EPBQLeBRGKQGNAYTKiYVB940CdN9AUTw4NpIhgx3a01CjHZoEZI0WBoZrG2aWHD6laTskXbRbstuzi7M9fcqR27s9POVivlPs797jnfnHPuud8h5Lm8PaFSpPVtEIRHATQzsDsIVC7HY4yA3wH8AoZ+JtJpVUwFo/t2TuZjmpxA3u6+BujCQRA9DcBtxcvxGKxGGJAC0A2Ib4fbt15ayMe8BGo6Q57CFewNEL0EQJrPiB2Bf7CUZsDhhITXY/tak3Y2bAl4u87VQxCPA7TOKUILEzBPD0Oj7Rdfbo1Y7eUQuDugNOuMvgKh0sn5hsoiSJMT+OEKLwGnReOk65svHGjrn4vMIjDz566zAFY5masvLcTJLTxADG3dZ/Dj1SmnI2CgcdLw8NxImARqe75zy5qk5BN27qnGI+OLJ9cCjMEX6MXYNK+7vNbwlFp5/2jHQ8YBk4DXrxwCUYc1PC21ZRhLqhi8mltD960sgjw5gYFfc1PQVFWGW4vdOBUdA7PwYqB3wu2tr5gEjKvGxCFrtXPn7z1yF1RdxwMnBpFQtSxTa0oLIU2OIxLPDn9JgYRv9rZAFgUcOBnC19ExCwV+O4QmfkWNCHj9ylEQ7bUG8N4KDz5+Yg0yGvDg54OYTmcTWF/ugZSYwPBvf2QdLZZd6N2zCS5BwO7PzmLIss/BDPgg3O57jowOp4FTzGkyHFgii9AZ0Hp7OT4diaNAFPBC4y3w1VVgdXGB4Xg0kUTw0mUc7f8J1zUNOxpXIxi5DIEIiT/TtoXBm5UqXa8mbyC0C0CXU/nIAmFPQxV211fhtiLZFh6bSiEw9DOODUSR1nQnk2ACPUPeLuV9CPS8E3qFJCK4Ze28zmfPcxLbu89gSrX/8yw/DEfIG1DOA7TBiUDH+hrsX1ftBDP2O0MRvNsXzgf7Pd3pVyaIaOVcNG8y19I6YknV/Ny7rcnMuZNlXhMtH50yYdXFbhTJLrtmFSevP6SBIMyieXvtebwRyYyGZ3sjSGU0yIKAE5vvcfKbtf/UJ99C1TS4XS4cadsIj0s0bkR/dtvWbwwB30Z4JDsCTL8JUrDcRXgTXMOlbkQjODYwsohGtNyteNkfI4PAh30NkG/0c5xuCrfvmHmO/46CrSDZVFuGKwsIEq4JBxcrSAiHwvt9r3K/2ZIsIykgZyXMD5qSDAw+/xJIMiMK/7MoBWgc84nS2VTUBZRmEfRlPsp4MbKcK2LBSZab9cAjQeLxfNKx5IPJLAlDpmekN//7aKYfnq5a9drozhkZbl3Owym/otK/G07JRW9dfDF3HJtLwpGAmZbOUClKsBXAYzPjOeoIqMgZz0Gn1WupYPRgfuP5X69HNNaGrVG4AAAAAElFTkSuQmCC"},71:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADwElEQVRYR8VXTYgcRRh9X3e7XTXbu+OKQ0A0oAjixoCuJpqI7ua0sMwe/GnEo6IHNfgDIR5E10WCBj2EeFjRswedQw49l72I8YeYEBGCEjzoIYZAmMO4YWa6dqetT6qdWSazM9PVOwf7MtD1fe+9rn7zvmoC4OD/u5iMgDAMza/V1Ww2H3Fd90UATwK4p9P0FzOf1VqvTU5O/mIFBKBSqaQCKAxDq11QSp0AcNz0DCHRAD4SQrxnI6JSqaRAVgLiOH6AiMzT2ezWW0KIT7NEzM7O2r+COI7XiOjlLNDO+o04jvfOzMw0RtV3X0GmB1qt1oOO41y0JE/LmDmUUp4ZW0CtVqOpqak3AXycU8C7UsoPbQQM9YAhL5VKHMfxKSI6mkcAgBNCiJUMAcNN2CU3AEqp0wBezSngpBDinVE9Q03YS16r1W4JguACEe3PKeBSkiQHgyBIhvUNNGEvuWlsNpuzruteykmelmut9xcKhcvWAvrJTWOj0bjP87zfdiMgSZJ9QRD8niUgNeEg8k6jq5S6CqCURwQz16SUdwL4Z4SA/0y4sLDgGrcPK1RKmWi1itcuBjN/IKVc3ZUJ+5s2NjaE7/vfAZiz2QVm/nlra2u+WCwqmxzITMJOGD0E4IKNACI64Pt+5lS0iuK+PPgBwGOjRDDzeSnl4zZCM8dxL/nm5ubdWuvbiOhbAHIIQYuZjwCoSyn/zBIxchwbciml63leGcArAI4Q0eda64iIvgRwax9BXWv9vOM4IYAXmPkbIvpMCBEN+ycMTcJ6vR74vv+S4zhvALirj+grZjZD5lkiesKsMfP3SZJUPM97n4ie6qu/QkSn2+32F0EQNHvXBnpAKfUMAJP9e0ZsoZnzZ4zbiYiJ6GFmfhpAMKLnOjMf7R3ROwQopV4DcMry1JP1igetG7Gv+76/ZhZvMmEcx4c6BnN3g5yjJ9FazxcKhfPbJjRJGATBWSI6nANonNIfhRDz2yZcWlo64LruT+Mg5u1l5ker1erF9LtgeXn5JIBjeUHGrP8kiqK3uwLOATg4JmCudpOY1Wr1cDoNy+VynYiKuRDGL/47iqLb0x0ol8s3iGhyfMxcCI25ubliKmBxcXHPxMTEcwBM7B4CUMgFZV/cAnCOmaN2u/31+vr69R0fp+YQOj09fT+AfVrre4loLzPfQUTmRGTyf5qZJRH5ALwOd8LMm0RkCExK1s2JiIiuMbOJ4j+SJPk1juPLpVKp3dW7HUSd5KOVlRVeXb3pEDPwXhiGaYr1PLg51u24Z4P3L2rYumOqLhgtAAAAAElFTkSuQmCC"},74:function(e,a,t){e.exports=t(107)}},[[74,1,2]]]);
//# sourceMappingURL=main.2db0c91a.chunk.js.map