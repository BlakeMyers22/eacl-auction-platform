(this["webpackJsonpusdc-auction-platform"]=this["webpackJsonpusdc-auction-platform"]||[]).push([[0],{26:function(e,t,r){"use strict";r.r(t);var i=r(0),c=r.n(i),s=r(14),n=r.n(s),a=r(8),d=r(2),l=r(1);const o=[{id:1,address:"123 Main St, Anytown, USA",startingPrice:"100000"},{id:2,address:"456 Elm St, Somewhere, USA",startingPrice:"150000"},{id:3,address:"789 Oak St, Nowhere, USA",startingPrice:"200000"},{id:4,address:"101 Pine St, Everywhere, USA",startingPrice:"175000"},{id:5,address:"202 Maple St, Anywhere, USA",startingPrice:"225000"}];var j=()=>Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Available Properties"}),Object(l.jsx)("ul",{children:o.map((e=>Object(l.jsx)("li",{children:Object(l.jsxs)(a.b,{to:`/property/${e.id}`,children:[e.address," - Starting Price: ",e.startingPrice," USDC"]})},e.id)))})]});var b=()=>{const{id:e}=Object(d.f)(),[t,r]=Object(i.useState)(null),[c,s]=Object(i.useState)("");Object(i.useEffect)((()=>{r({id:e,address:`${e}23 Main St, Anytown, USA`,seller:`0x1234...${e}678`,startingPrice:(1e5+25e3*e).toString(),endTime:new Date(Date.now()+864e5).toISOString()})}),[e]);return t?Object(l.jsxs)("div",{children:[Object(l.jsxs)("h2",{children:["Auction for Property #",t.id]}),Object(l.jsxs)("p",{children:["Address: ",t.address]}),Object(l.jsxs)("p",{children:["Seller: ",t.seller]}),Object(l.jsxs)("p",{children:["Starting Price: ",t.startingPrice," USDC"]}),Object(l.jsxs)("p",{children:["Auction Ends: ",new Date(t.endTime).toLocaleString()]}),Object(l.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log(`Placing bid of ${c} USDC for property ${e}`),alert(`Bid of ${c} USDC placed successfully!`),s("")},children:[Object(l.jsx)("input",{type:"number",value:c,onChange:e=>s(e.target.value),placeholder:"Enter bid amount in USDC",min:t.startingPrice}),Object(l.jsx)("button",{type:"submit",children:"Place Bid"})]}),Object(l.jsx)(a.b,{to:"/",children:"Back to Property List"})]}):Object(l.jsx)("div",{children:"Loading auction details..."})};var h=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"USDC Real Estate Auction Platform"}),Object(l.jsxs)(d.c,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/",component:j}),Object(l.jsx)(d.a,{path:"/property/:id",component:b})]})]})})};n.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.48b00a9a.chunk.js.map