(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[4],{104:function(e,t,c){},111:function(e,t,c){"use strict";c.r(t);c(27);var n,i,s=c(103),r=c(37),a=c(0),o=c(7),j=c(105),l=(c(104),c(54)),b=c(102),d=c(113),p=c(44),u=c(3);function O(e){return Object(u.jsxs)("p",{children:["\uc7ac\uace0 : ",e.stock_prop]})}function h(e){var t=Object(a.useContext)(l.b),c=Object(o.g)().id;return Object(u.jsxs)("p",{children:["\uc0ac\uc774\uc988 : ",t[c].join(",")]})}function x(e){var t=e.tabBtn_prop,c=e.tabAniUpd_prop;return Object(a.useEffect)((function(){c(!0)})),1===t?Object(u.jsx)("div",{children:"\uccab\ubc88\uc9f8 \ub0b4\uc6a9"}):2===t?Object(u.jsx)("div",{children:"\ub450\ubc88\uc9f8 \ub0b4\uc6a9"}):void 0}t.default=Object(p.b)((function(e){return{state:e.reducer}}))((function(e){var t=Object(o.f)(),c=Object(o.g)().id,l=Object(a.useState)(!0),p=Object(r.a)(l,2),f=p[0],m=p[1],v=Object(a.useState)(1),k=Object(r.a)(v,2),_=k[0],g=k[1],y=Object(a.useState)(!1),N=Object(r.a)(y,2),C=N[0],w=N[1],A=null;Object(a.useEffect)((function(){A=void setTimeout((function(){m(!1)}),3e3)})),Object(a.useEffect)((function(){return clearTimeout(A)})),Object(a.useEffect)((function(){console.log(1)}),[]);var E=j.a.div(n||(n=Object(s.a)(["\n    padding:20px;\n    "]))),U=j.a.h4(i||(i=Object(s.a)(["\n    font-size: 25px;\n    color:","\n    "])),(function(e){return e.userColor}));return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(E,{children:Object(u.jsx)(U,{userColor:"gray",children:"Detail"})}),Object(u.jsx)("div",{className:"my-alert1",style:f?{visibility:"visible"}:{visibility:"hidden"},children:Object(u.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(parseInt(c)+1)+".jpg",width:"100%"})}),Object(u.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(u.jsx)("h4",{className:"pt-5",children:e.detail_prop[c].title}),Object(u.jsx)("p",{children:e.detail_prop[c].content}),Object(u.jsxs)("p",{children:[e.detail_prop[c].price,"\uc6d0"]}),Object(u.jsx)(O,{stock_prop:e.stock_prop[c],stockUpd_prop:e.stockUpd_prop}),Object(u.jsx)(h,{}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){e.dispatch({type:"addCart",payload:e.detail_prop[c]}),t.push("/cart")},children:"\uc8fc\ubb38\ud558\uae30"}),Object(u.jsx)("button",{className:"btn btn-danger ml-2",onClick:function(){t.goBack()},children:"\ub4a4\ub85c\uac00\uae30"})]})]}),Object(u.jsxs)(b.a,{variant:"tabs",defaultActiveKey:"link-1",className:"mt-5",children:[Object(u.jsx)(b.a.Item,{children:Object(u.jsx)(b.a.Link,{eventKey:"link-1",onClick:function(){g(1),w(!1)},children:"\uc0c1\ud488\uc124\uba85"})}),Object(u.jsx)(b.a.Item,{children:Object(u.jsx)(b.a.Link,{eventKey:"link-2",onClick:function(){g(2),w(!1)},children:"\ubc30\uc1a1\uc815\ubcf4"})})]}),Object(u.jsx)(d.a,{in:C,classNames:"showAni",timeout:500,children:Object(u.jsx)(x,{tabBtn_prop:_,tabAniUpd_prop:w})})]})}))}}]);
//# sourceMappingURL=4.a478906d.chunk.js.map