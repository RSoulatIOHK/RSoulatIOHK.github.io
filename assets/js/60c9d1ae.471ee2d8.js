"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,b=u["".concat(l,".").concat(p)]||u[p]||d[p]||i;return r?n.createElement(b,o(o({ref:t},f),{},{components:r})):n.createElement(b,o({ref:t},f))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:5},o="Certificates that can be generated by the tool",c={unversionedId:"backend/certificates",id:"backend/certificates",title:"Certificates that can be generated by the tool",description:"As of today, the Certification Working Group has yet to define the Certification levels 1, 2, 3. As a consequence, it is advised to only use the tool for Level 0 certificates, which are a way of publishing audit report, testing campaign, that do not meet the requirements for a certification level. [ref when we have it]",source:"@site/docs/backend/certificates.md",sourceDirName:"backend",slug:"/backend/certificates",permalink:"/docs/backend/certificates",draft:!1,editUrl:"https://github.com/RSoulatIOHK/ptt_documentation/docs/backend/certificates.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Additional Requirements",permalink:"/docs/backend/additional-requirements"},next:{title:"List of Vulnerabilities",permalink:"/docs/backend/full-list-vulnerabilities"}},l={},s=[],f={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"certificates-that-can-be-generated-by-the-tool"},"Certificates that can be generated by the tool"),(0,a.kt)("p",null,"As of today, the Certification Working Group has yet to define the Certification levels 1, 2, 3. As a consequence, it is advised to only use the tool for Level 0 certificates, which are a way of publishing audit report, testing campaign, that do not meet the requirements for a certification level. ","[ref when we have it]"),(0,a.kt)("p",null,"Our testing tool will automatically generate the CIP-0096-compliant ","[link to CIP-0096]","on-chain and off-chain metadata for a certificate. Users are free to broadcast them themselves as metadata on a transaction ","[ref to how to do it]","."),(0,a.kt)("p",null,"As a subscriber to an Auditor level, you will have the possibility to format your data as a CIP-0096 compliant certificate. ","[Screenshot to where to click?]",". The form will let you pick between level 0 (no standard) and level 2 (manual audit). We recommend you only broadcast level 0 certificates at the moment as the Certification standard level 2 has yet to be defined."))}d.isMDXComponent=!0}}]);