import{e as j,u as v,j as s,l as u,f as t}from"./index-BRL9K-my.js";import{M as C}from"./MenuITems-DAn7WTZ2.js";const R=()=>{var r,l,d,o;const a=j(e=>e.cart),n=v(),i=e=>{n(t({}))},p=()=>{n(t({}))};return s.jsx(s.Fragment,{children:((r=a==null?void 0:a.items)==null?void 0:r.length)>0?s.jsxs("div",{className:" ",children:[s.jsx("div",{className:"m-5",children:s.jsx("button",{className:"bg-orange-500 px-5 text-xl rounded",onClick:p,children:"Clear Cart"})}),s.jsx("div",{className:" m-4 p-5 w-4/5",children:((d=(l=a==null?void 0:a.items[0])==null?void 0:l.item)==null?void 0:d.name)&&((o=a==null?void 0:a.items)==null?void 0:o.map((e,g)=>{var c,m,x,h;return s.jsx("div",{className:"m-3 bg-orange-400 p-5",children:s.jsx(C,{addRemoveConfig:"Remove",deliveryTime:(c=e==null?void 0:e.item)==null?void 0:c.deliveryTime,handleAddRemove:()=>i(),logo:u,name:(m=e==null?void 0:e.item)==null?void 0:m.name,price:(x=e==null?void 0:e.item)==null?void 0:x.price,rating:e==null?void 0:e.item.rating})},`${g}-${(h=e==null?void 0:e.item)==null?void 0:h.name}`)}))})]}):s.jsx("div",{className:"bg-orange-500",children:s.jsx("h2",{className:"text-xl text-white p-5",children:"Please add some items from the home menu 😶😶😶😶😶😶😶😶"})})})};export{R as default};
