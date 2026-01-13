import{c as o,j as e,T as r}from"./index-VfhDMAMt.js";import{S as c,C as d,a as x}from"./square-pen-DOdWmDaF.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],y=o("eye",u);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],g=o("history",p);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],b=o("link-2",h);function k({reportName:m,onClose:n,position:a}){const i=[{icon:c,label:"Edit report",action:()=>console.log("Edit")},{icon:y,label:"View details",action:()=>console.log("View details")},{divider:!0},{label:"Use data",action:()=>console.log("Use data")},{divider:!0},{label:"Open in BI",action:()=>console.log("Open in BI"),subtitle:"Open in your selected preferred BI"},{divider:!0},{icon:g,label:"Last execution",action:()=>console.log("Last execution")},{label:"All executions",action:()=>console.log("All executions")},{divider:!0},{icon:d,label:"Get SELECT statement",action:()=>console.log("Get SELECT"),subtitle:"Copy ready-to-use SQL query"},{icon:x,label:"Copy from last execution",action:()=>console.log("Copy"),subtitle:"Get data"},{icon:b,label:"Get connection string",action:()=>console.log("Get connection"),subtitle:"Set up one-time connection for your BI"},{divider:!0},{icon:r,label:"Delete report",action:()=>console.log("Delete"),danger:!0}];return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:n}),e.jsx("div",{className:"fixed bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-50 w-[280px] transition-all duration-300",style:{top:`${a.y}px`,left:`${a.x}px`,transform:"translateX(-100%)"},children:i.map((t,l)=>{if(t.divider)return e.jsx("div",{className:"h-px bg-gray-200 my-2"},l);const s=t.icon;return e.jsxs("button",{onClick:()=>{t.action?.(),n()},className:`w-full px-4 py-2.5 text-left hover:bg-gray-50 transition-colors flex items-start gap-3 ${t.danger?"text-red-600":"text-gray-700"}`,children:[s&&e.jsx(s,{className:`w-4 h-4 mt-0.5 shrink-0 ${t.danger?"text-red-600":"text-gray-500"}`}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:t.danger?"text-red-600":"text-gray-900",children:t.label}),t.subtitle&&e.jsx("div",{className:"text-xs text-gray-500 mt-0.5",children:t.subtitle})]})]},l)})})]})}export{k as default};
