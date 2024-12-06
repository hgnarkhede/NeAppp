import{c as u,a as j,r as g,j as e}from"./index-C0QhP1fA.js";import{u as N,T as n}from"./upvotes-CwnQWTa1.js";import{B as m}from"./button-DQE4ffiY.js";import{T as d}from"./trophy-Ci6xgLgz.js";import{S as x}from"./star-DY4RKEI7.js";import{S as v}from"./shield-CApC7HxS.js";import"./utils-BNf5BS2b.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=u("Award",[["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}],["path",{d:"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11",key:"em7aur"}]]),a={1:{name:"Sarah Johnson Real Estate",type:"Real Estate Broker",licenseNumber:"RE-2024-001",rating:4.9,verifiedSince:"2020",transactions:450,specialties:["Luxury Homes","First-Time Buyers","Investment Properties"],achievements:["Top Producer 2023","Client Choice Award","5-Star Service"]},2:{name:"Elite Home Inspections",type:"Home Inspector",licenseNumber:"HI-2024-102",rating:4.8,verifiedSince:"2019",inspections:1200,specialties:["Pre-Purchase","New Construction","Commercial"],achievements:["Master Inspector","Safety Excellence"]},3:{name:"Southwest HVAC Solutions",type:"HVAC Contractor",licenseNumber:"HV-2024-045",rating:4.7,verifiedSince:"2021",projects:850,specialties:["Installation","Energy Efficiency","24/7 Service"],achievements:["Energy Star Partner","Technical Excellence"]}};function T(){const l=j(),{upvotes:i,getUpvotes:c}=N();return g.useMemo(()=>Object.entries(i).map(([t,s])=>({id:t,votes:s,...a[t]})).sort((t,s)=>s.votes-t.votes),[i]),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between mb-8",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Top Rated Vendors"}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Most trusted and recommended vendors by our community"})]})}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-8 text-white",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(d,{className:"h-6 w-6 text-yellow-400"}),e.jsx("span",{className:"text-sm font-medium bg-blue-700 rounded-full px-3 py-1",children:"#1 Top Rated"})]}),e.jsx("h2",{className:"text-2xl font-bold",children:a[1].name}),e.jsx("p",{className:"text-blue-100",children:a[1].type})]}),e.jsxs("div",{className:"flex flex-col items-end",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(x,{className:"h-5 w-5 text-yellow-400 fill-current"}),e.jsx("span",{className:"text-lg font-bold",children:a[1].rating})]}),e.jsxs("p",{className:"text-sm text-blue-100",children:["Verified since ",a[1].verifiedSince]})]})]}),e.jsxs("div",{className:"mt-6 grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-blue-700/30 rounded-lg p-4",children:[e.jsx(n,{className:"h-5 w-5 mb-2"}),e.jsx("div",{className:"text-2xl font-bold",children:c("1")}),e.jsx("div",{className:"text-sm text-blue-100",children:"Community Upvotes"})]}),e.jsxs("div",{className:"bg-blue-700/30 rounded-lg p-4",children:[e.jsx(v,{className:"h-5 w-5 mb-2"}),e.jsx("div",{className:"text-2xl font-bold",children:a[1].transactions}),e.jsx("div",{className:"text-sm text-blue-100",children:"Transactions"})]}),e.jsxs("div",{className:"bg-blue-700/30 rounded-lg p-4",children:[e.jsx(o,{className:"h-5 w-5 mb-2"}),e.jsx("div",{className:"text-2xl font-bold",children:a[1].achievements.length}),e.jsx("div",{className:"text-sm text-blue-100",children:"Achievements"})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Specialties"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a[1].specialties.map((t,s)=>e.jsx("span",{className:"bg-blue-700/30 rounded-full px-3 py-1 text-sm",children:t},s))})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Achievements"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a[1].achievements.map((t,s)=>e.jsxs("div",{className:"flex items-center gap-1 bg-blue-700/30 rounded-full px-3 py-1 text-sm",children:[e.jsx(o,{className:"h-3 w-3 text-yellow-400"}),t]},s))})]}),e.jsx(m,{className:"mt-6 bg-white text-blue-600 hover:bg-blue-50",onClick:()=>l("/dashboard/vendors/1"),children:"View Full Profile"})]}),e.jsx("div",{className:"lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6",children:Object.entries(a).slice(1,3).map(([t,s],r)=>e.jsxs("div",{className:"bg-white rounded-lg border p-6",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(d,{className:`h-5 w-5 ${r===0?"text-gray-400":"text-orange-400"}`}),e.jsxs("span",{className:"text-sm font-medium bg-gray-100 rounded-full px-3 py-1",children:["#",r+2," Ranked"]})]}),e.jsx("h3",{className:"text-lg font-bold text-gray-900",children:s.name}),e.jsx("p",{className:"text-sm text-gray-500",children:s.type})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(x,{className:"h-4 w-4 text-yellow-400 fill-current"}),e.jsx("span",{className:"font-medium",children:s.rating})]})]}),e.jsxs("div",{className:"mt-4 flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{className:"h-4 w-4 text-blue-600"}),e.jsx("span",{className:"font-medium",children:c(t)}),e.jsx("span",{className:"text-sm text-gray-500",children:"upvotes"})]}),e.jsxs("div",{className:"text-sm text-gray-500",children:["Verified since ",s.verifiedSince]})]}),e.jsx("div",{className:"mt-4",children:e.jsx("div",{className:"flex flex-wrap gap-2",children:s.specialties.map((h,p)=>e.jsx("span",{className:"bg-gray-100 rounded-full px-2 py-1 text-xs text-gray-600",children:h},p))})}),e.jsx(m,{variant:"outline",className:"mt-4 w-full",onClick:()=>l(`/dashboard/vendors/${t}`),children:"View Profile"})]},t))})]})]})}export{T as VendorLeaderboard};