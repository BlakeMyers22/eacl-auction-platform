(this["webpackJsonpeacl-auction-platform"]=this["webpackJsonpeacl-auction-platform"]||[]).push([[0],{9:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),s=r(3),i=r.n(s),o=r(0);var a=e=>{let{propertyId:t}=e;const[r,n]=Object(c.useState)(null),[s,i]=Object(c.useState)("");Object(c.useEffect)((()=>{n({seller:"0x1234...5678",startingPrice:"10",endTime:new Date(Date.now()+864e5).toISOString(),highestBid:"12",highestBidder:"0x5678...9012"})}),[t]);return r?Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:["Auction for Property #",t]}),Object(o.jsxs)("p",{children:["Seller: ",r.seller]}),Object(o.jsxs)("p",{children:["Starting Price: ",r.startingPrice," EACL"]}),Object(o.jsxs)("p",{children:["End Time: ",new Date(r.endTime).toLocaleString()]}),Object(o.jsxs)("p",{children:["Highest Bid: ",r.highestBid," EACL"]}),Object(o.jsxs)("p",{children:["Highest Bidder: ",r.highestBidder]}),Object(o.jsxs)("form",{onSubmit:e=>{e.preventDefault(),console.log(`Placing bid of ${s} EACL for property ${t}`),alert(`Bid of ${s} EACL placed successfully!`),i("")},children:[Object(o.jsx)("input",{type:"text",value:s,onChange:e=>i(e.target.value),placeholder:"Enter bid amount"}),Object(o.jsx)("button",{type:"submit",children:"Place Bid"})]})]}):Object(o.jsx)("div",{children:"Loading auction details..."})};var l=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"EACL Auction Platform"}),Object(o.jsx)(a,{propertyId:"1"})]})};class d extends n.a.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,t){console.log("Caught an error:",e,t)}render(){return this.state.hasError?Object(o.jsx)("h1",{children:"Something went wrong. Please check the console for more information."}):this.props.children}}i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{children:Object(o.jsx)(l,{})})}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.daaf004d.chunk.js.map