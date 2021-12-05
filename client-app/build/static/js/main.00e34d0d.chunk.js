(this["webpackJsonpclient-app"]=this["webpackJsonpclient-app"]||[]).push([[0],{40:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a,c,i,r,o,l,s,b,j,d,p,u,x,O,h,g,f,m,v,y,w,C,S,k=t(0),D=t(31),z=t.n(D),P=t(10),I=(t(40),t(3)),A=t(4),T=t(5),L=Object(T.a)(a||(a=Object(A.a)(["\n  cursor: pointer;\n  color: white;\n"]))),U=T.b.div(c||(c=Object(A.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),E=T.b.div(i||(i=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]))),G=T.b.div(r||(r=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),N=Object(T.b)(P.b)(o||(o=Object(A.a)(["\n  padding: 20px;\n  text-decoration: none;\n  ","\n"])),L),R=t(1),W=function(){return Object(R.jsxs)(U,{children:[Object(R.jsxs)(E,{children:[Object(R.jsx)(N,{to:"/",children:"Home"}),Object(R.jsx)(N,{to:"/inventory",children:"Inventory"}),Object(R.jsx)(N,{to:"/deliver",children:"Deliver"}),Object(R.jsx)(N,{to:"/log",children:"Logs"})]}),Object(R.jsx)(G,{})]})},B=t.p+"static/media/logo.bf42c973.png",H=t(13),F=t(18),J=T.b.button(l||(l=Object(A.a)(["\n  min-width: 100px;\n  height: 40px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 15px 0 15px;\n  font-size: 20px;\n  background-color: #063D54;\n  color: white;\n  font-weight: bolder;\n  border: 1px solid #282C34;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n  &:hover {\n    background-color: #00B0C0;\n    color: white;\n    border: 1px solid #282C34;\n    transition: background-color 0.5s ease-out;\n  }\n"]))),M=["label"],Y=function(e){var n=e.label,t=Object(F.a)(e,M);return Object(R.jsx)(J,Object(H.a)(Object(H.a)({},t),{},{children:n}))},Z=T.b.header(s||(s=Object(A.a)(["\n    min-height: 10vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(15px + 2vmin);\n    color: white;\n"]))),q=T.b.img(b||(b=Object(A.a)(["\n    height: 40vmin;\n    pointer-events: none;\n    animation: MoveUpDown 1s linear infinite;\n\n    @keyframes MoveUpDown {\n        0%, 100% {\n          transform: translateY(20);\n        }\n        50% {\n          transform: translateY(-20px);\n        }\n    }\n"]))),K=T.b.div(j||(j=Object(A.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Q=Object(T.b)(Y)(d||(d=Object(A.a)(["\n    margin: 10px;\n"]))),V=function(){var e=Object(I.f)();return Object(R.jsxs)(Z,{children:[Object(R.jsx)(q,{src:B,alt:"GPS"}),Object(R.jsx)("p",{children:"Simple Delivery and Log System"}),Object(R.jsxs)(K,{children:[Object(R.jsx)(Q,{label:"Check Inventory",onClick:function(){return e("/inventory")}}),Object(R.jsx)(Q,{label:"Deliver Items",onClick:function(){return e("/deliver")}}),Object(R.jsx)(Q,{label:"Read Logs",onClick:function(){return e("/log")}})]})]})},X=t(6),$=Object(T.a)(p||(p=Object(A.a)(["\n  top: -25px;\n  font-size: 18px;\n  color: ",";\n"])),"white"),_=T.b.div(u||(u=Object(A.a)(['\n  position: relative;\n  margin: 45px 0;\n  margin-left: 41.5vw;\n  input[type="password"] {\n    letter-spacing: 0.2em;\n  }\n']))),ee=T.b.input(x||(x=Object(A.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 10px;\n  display: block;\n  width: 30%;\n  border: none;\n  border-radius: 0;\n  border: 1px solid grey;\n  margin: 25px 0;\n  &:focus {\n    outline: none;\n  }\n  &:focus ~ label {\n    ","\n  }\n"])),"black",$),ne=T.b.label(O||(O=Object(A.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n  &.filled {\n    ","\n  }\n"])),"gray",$),te=["inputChange","label"],ae=function(e){var n=e.inputChange,t=e.label,a=Object(F.a)(e,te);return Object(R.jsxs)(_,{children:[Object(R.jsx)(ee,Object(H.a)({onChange:n},a)),t?Object(R.jsx)(ne,{className:a.value.length?"filled":"",children:t}):null]})},ce=T.b.div(h||(h=Object(A.a)(["\n    font-size: calc(15px + 2vmin);\n"]))),ie=T.b.img(g||(g=Object(A.a)(["\n    height: 20vmin;\n    pointer-events: none;\n"]))),re=T.b.div(f||(f=Object(A.a)(["\n    display: flex;\n    justify-content: center;\n"]))),oe=t(12),le=t.n(oe),se="http://127.0.0.1:5000/",be=function(){var e=Object(k.useState)(""),n=Object(X.a)(e,2),t=n[0],a=n[1],c=Object(k.useState)(""),i=Object(X.a)(c,2),r=i[0],o=i[1],l=Object(k.useState)(""),s=Object(X.a)(l,2),b=s[0],j=s[1],d=Object(k.useState)(""),p=Object(X.a)(d,2),u=p[0],x=p[1],O=Object(k.useState)(""),h=Object(X.a)(O,2),g=h[0],f=h[1],m=Object(k.useState)(""),v=Object(X.a)(m,2),y=v[0],w=v[1];return Object(R.jsxs)(ce,{children:[Object(R.jsx)(ie,{src:B,alt:"GPS"}),Object(R.jsx)("p",{children:"Deliver Product"}),Object(R.jsx)(ae,{name:"userId",type:"text",label:"Username",value:t,inputChange:function(e){a(e.target.value)}}),Object(R.jsx)(ae,{name:"streetAddress",type:"text",label:"Street Address",value:r,inputChange:function(e){o(e.target.value)}}),Object(R.jsx)(ae,{name:"zipCode",type:"text",label:"Zip Code",value:b,inputChange:function(e){j(e.target.value)}}),Object(R.jsx)(ae,{name:"state",type:"text",label:"State",value:u,inputChange:function(e){x(e.target.value)}}),Object(R.jsx)(ae,{name:"country",type:"text",label:"Country",value:g,inputChange:function(e){f(e.target.value)}}),Object(R.jsx)(ae,{name:"productId",type:"text",label:"Product ID",value:y,inputChange:function(e){w(e.target.value)}}),Object(R.jsx)(re,{children:Object(R.jsx)(Y,{onClick:function(){(function(e,n,t,a,c,i){var r=new FormData;return r.append("username",e),r.append("productName",i),r.append("streetAddress",n),r.append("zipCode",t),r.append("state",a),r.append("country",c),le()({url:se+"api/deliver",data:r,method:"POST",headers:{"Content-Type":"application/json"},mode:"cors"})})(t,r,b,u,g,y).catch((function(e){alert("Something went wrong, Recorded "+e)}))},label:"Deliver"})})]})},je=function(){return Object(R.jsx)("div",{})},de=T.b.div(m||(m=Object(A.a)(["\n    display: flex;\n    padding: 5px;\n    padding-top: 25px;\n    padding-bottom: 25px;\n    flex-direction: column;\n    border-radius: 5px;\n    border: 3px solid #041E42;\n    background-position: center;\n    background-color: #00B0C0;\n    background-size: cover;\n    cursor: pointer;\n    transform: translateZ(0);\n    transition: transform 0.5s ease-out;\n    :hover{\n        transform: scale(1.05);\n      }\n"]))),pe=function(e){var n=e.info;return Object(R.jsx)(de,{children:n})},ue=t(76),xe=T.b.div(v||(v=Object(A.a)(["\n    padding-top: 5px;\n    padding-bottom: 5px;\n    width: 85vw;\n    margin: 0 auto;\n    grid-template-columns: 1fr 1fr 1fr;\n    row-gap: 15px;\n    column-gap: 25px;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n"]))),Oe=function(e){var n=e.items;return Object(R.jsx)(xe,{children:n.map((function(e){return Object(R.jsx)(pe,{info:Object(R.jsxs)("div",{children:[Object(R.jsxs)(ue.a,{variant:"h5",component:"h2",children:["Name: ",e[1]]}),Object(R.jsxs)(ue.a,{color:"yellow",children:["UUID: ",e[0]]}),Object(R.jsxs)(ue.a,{children:["Weight: ",e[2]," kg"]}),Object(R.jsxs)(ue.a,{children:["Width: ",e[3]," in"]}),Object(R.jsxs)(ue.a,{children:["Length: ",e[4]," in"]}),Object(R.jsxs)(ue.a,{children:["Height: ",e[5]," in"]})]})},e[0])}))})},he=T.b.div(y||(y=Object(A.a)(["\n    font-size: calc(15px + 2vmin);\n"]))),ge=T.b.img(w||(w=Object(A.a)(["\n    height: 20vmin;\n    pointer-events: none;\n"]))),fe=T.b.div(C||(C=Object(A.a)(["\n    display: flex;\n    justify-content: center;\n"]))),me=function(){var e=Object(k.useState)([]),n=Object(X.a)(e,2),t=n[0],a=n[1],c=Object(k.useState)(""),i=Object(X.a)(c,2),r=i[0],o=i[1],l=Object(k.useState)(0),s=Object(X.a)(l,2),b=s[0],j=s[1],d=Object(k.useState)(0),p=Object(X.a)(d,2),u=p[0],x=p[1],O=Object(k.useState)(0),h=Object(X.a)(O,2),g=h[0],f=h[1],m=Object(k.useState)(0),v=Object(X.a)(m,2),y=v[0],w=v[1],C=Object(k.useState)(!0),S=Object(X.a)(C,2),D=S[0],z=S[1];return Object(k.useEffect)((function(){le()({url:se+"api/inventory/products",method:"GET",headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){a(e.data)}))}),[D]),Object(R.jsxs)(he,{children:[Object(R.jsx)(ge,{src:B,alt:"GPS"}),Object(R.jsx)("p",{children:"All Products"}),Object(R.jsx)(Oe,{items:t}),Object(R.jsx)("p",{children:"Add Product"}),Object(R.jsx)(ae,{name:"name",type:"text",label:"Name",value:r,inputChange:function(e){o(e.target.value)}}),Object(R.jsx)(ae,{name:"weight",type:"number",label:"Weight",value:b,inputChange:function(e){j(e.target.value)}}),Object(R.jsx)(ae,{name:"width",type:"number",label:"Width",value:u,inputChange:function(e){x(e.target.value)}}),Object(R.jsx)(ae,{name:"length",type:"number",label:"Length",value:g,inputChange:function(e){f(e.target.value)}}),Object(R.jsx)(ae,{name:"height",type:"number",label:"Height",value:y,inputChange:function(e){w(e.target.value)}}),Object(R.jsx)(fe,{children:Object(R.jsx)(Y,{onClick:function(){(function(e,n,t,a,c){var i=new FormData;return i.append("name",e),i.append("weight",n),i.append("width",t),i.append("len",a),i.append("height",c),le()({url:se+"api/inventory/add",data:i,method:"POST",headers:{"Content-Type":"multipart/form-data"},mode:"cors"})})(r,b,u,g,y).then((function(e){return z(!D)})).catch((function(e){alert("Something went wrong, Recorded "+e)}))},label:"Add Product"})})]})},ve=T.b.div(S||(S=Object(A.a)(['\n  text-align: center;\n  color: white;\n  font-family: "Roboto";\n  font-size: 25px;\n']))),ye=function(){return Object(R.jsxs)(ve,{children:[Object(R.jsx)(W,{}),Object(R.jsxs)(I.c,{children:[Object(R.jsx)(I.a,{exact:!0,path:"/",element:Object(R.jsx)(V,{})}),Object(R.jsx)(I.a,{exact:!0,path:"/deliver",element:Object(R.jsx)(be,{})}),Object(R.jsx)(I.a,{exact:!0,path:"/log",element:Object(R.jsx)(je,{})}),Object(R.jsx)(I.a,{exact:!0,path:"/inventory",element:Object(R.jsx)(me,{})})]})]})};z.a.render(Object(R.jsx)(P.a,{children:Object(R.jsx)(ye,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.00e34d0d.chunk.js.map