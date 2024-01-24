/*! For license information please see 0325a752.67327931.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2950],{19756:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(85893),r=a(11151);const i={sidebar_label:"Page.emulateMediaType"},s="Page.emulateMediaType() method",l={id:"api/puppeteer.page.emulatemediatype",title:"Page.emulateMediaType() method",description:"Signature:",source:"@site/versioned_docs/version-21.9.0/api/puppeteer.page.emulatemediatype.md",sourceDirName:"api",slug:"/api/puppeteer.page.emulatemediatype",permalink:"/api/puppeteer.page.emulatemediatype",draft:!1,unlisted:!1,tags:[],version:"21.9.0",frontMatter:{sidebar_label:"Page.emulateMediaType"},sidebar:"api",previous:{title:"Page.emulateMediaFeatures",permalink:"/api/puppeteer.page.emulatemediafeatures"},next:{title:"Page.emulateNetworkConditions",permalink:"/api/puppeteer.page.emulatenetworkconditions"}},d={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function o(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pageemulatemediatype-method",children:"Page.emulateMediaType() method"}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract emulateMediaType(type?: string): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type"}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," Changes the CSS media type of the page. The only allowed values are ",(0,n.jsx)("code",{children:"screen"}),", ",(0,n.jsx)("code",{children:"print"})," and ",(0,n.jsx)("code",{children:"null"}),". Passing ",(0,n.jsx)("code",{children:"null"})," disables CSS media emulation."]})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"await page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n\nawait page.emulateMediaType('print');\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 false\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 true\n\nawait page.emulateMediaType(null);\nawait page.evaluate(() => matchMedia('screen').matches);\n// \u2192 true\nawait page.evaluate(() => matchMedia('print').matches);\n// \u2192 false\n"})})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},75251:(e,t,a)=>{var n=a(67294),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,a){var n,i={},p=null,o=null;for(n in void 0!==a&&(p=""+a),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(o=t.ref),t)s.call(t,n)&&!d.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:r,type:e,key:p,ref:o,props:i,_owner:l.current}}t.Fragment=i,t.jsx=p,t.jsxs=p},85893:(e,t,a)=>{e.exports=a(75251)},11151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>s});var n=a(67294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);