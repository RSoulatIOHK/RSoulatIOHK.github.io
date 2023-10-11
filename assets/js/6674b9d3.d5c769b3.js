"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6},i="Getting a certificate",c={unversionedId:"frontend/getting-a-certificate",id:"frontend/getting-a-certificate",title:"Getting a certificate",description:'After a successful testing campaign, the user will have the possibility to generate the certificate metadata for your DApp. They can do so by simply click on "Review Certification Metadata".',source:"@site/docs/frontend/getting-a-certificate.md",sourceDirName:"frontend",slug:"/frontend/getting-a-certificate",permalink:"/docs/frontend/getting-a-certificate",draft:!1,editUrl:"https://github.com/RSoulatIOHK/ptt_documentation/tree/main/docs/frontend/getting-a-certificate.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Uploading an audit report",permalink:"/docs/frontend/uploading-report"},next:{title:"Plutus Testing Tool",permalink:"/docs/category/plutus-testing-tool"}},l={},p=[],s={toc:p},f="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-a-certificate"},"Getting a certificate"),(0,a.kt)("p",null,'After a successful testing campaign, the user will have the possibility to generate the certificate metadata for your DApp. They can do so by simply click on "Review Certification Metadata".'),(0,a.kt)("p",null,"A form appears and is prefilled with the information contained in the user profile and in the DApp profile.\nThe user needs to compute the script hashes of each on-chain script used by the DApp or refer to its CIP-0072 registration information and fill the form accordingly."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0072/"},"CIP-72")," for more information.")),(0,a.kt)("p",null,'The user can then fill the rest of the form and click on "Send report".'),(0,a.kt)("p",null,"The user will get two files, one containing the on-chain metadata, and one containing the off-chain metadata. Those files are ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/RSoulatIOHK/CIPs/blob/cip-certification-metadata/CIP-0096/README.md"},"CIP-0096")," compliant. The user will then be able to broadcast the on-chain metadata on the blockchain, and upload the off-chain metadata on IPFS. All links have been precalculated for ease of use."))}u.isMDXComponent=!0}}]);