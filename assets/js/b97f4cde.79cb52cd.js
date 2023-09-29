"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),h=i,m=c["".concat(p,".").concat(h)]||c[h]||d[h]||o;return a?r.createElement(m,n(n({ref:t},s),{},{components:a})):r.createElement(m,n({ref:t},s))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,n[1]=l;for(var u=2;u<o;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(7462),i=(a(7294),a(3905));const o={sidebar_position:1},n="Audit Report",l={unversionedId:"audit/auditor-upload",id:"audit/auditor-upload",title:"Audit Report",description:"An auditor can chose to broadcast an audit report to the blockchain. Our tool allows a user to fill a form to have the on-chain and off-chain metadata filled. The user can then broadcast this transaction on-chain, linking it to its payment credentials, which can then be used for authentication.",source:"@site/docs/audit/auditor-upload.md",sourceDirName:"audit",slug:"/audit/auditor-upload",permalink:"/docs/audit/auditor-upload",draft:!1,editUrl:"https://github.com/RSoulatIOHK/ptt_documentation/tree/main/docs/audit/auditor-upload.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Auditor Report Upload",permalink:"/docs/category/auditor-report-upload"}},p={},u=[{value:"Basics",id:"basics",level:2},{value:"Filling the form",id:"filling-the-form",level:2},{value:"Downloading the Metadata",id:"downloading-the-metadata",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"audit-report"},"Audit Report"),(0,i.kt)("p",null,"An auditor can chose to broadcast an audit report to the blockchain. Our tool allows a user to fill a form to have the on-chain and off-chain metadata filled. The user can then broadcast this transaction on-chain, linking it to its payment credentials, which can then be used for authentication."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the future, the user will be able to directly broadcast this transaction from their in-browser wallet.")),(0,i.kt)("h2",{id:"basics"},"Basics"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.cardano.org/docs/governance/cardano-improvement-proposals/cip-0072/"},"CIP-0072")," defines how a DApp can register on-chain."),(0,i.kt)("p",null,"A DApp is defined on-chain through the field subject. This subject value should be unique, and used throughout the DApp's lifecycle."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/RSoulatIOHK/CIPs/blob/cip-certification-metadata/CIP-0096/README.md"},"CIP-0096"),", currently in draft, defines how a DApp can have its audits or certificates on-chain."),(0,i.kt)("p",null,"The audit/certificate on-chain metadata also uses a subject field. The value provided in the certificate should be the same as in the DApp registration. This will be used by DApp aggregators or DApp store to link a registration to audits and certificates."),(0,i.kt)("h2",{id:"filling-the-form"},"Filling the form"),(0,i.kt)("p",null,"Our tool provides a form to fill the metadata under the Audit Report Upload tab."),(0,i.kt)("p",null,"The user needs to fill the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Certification Information:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Certification Level: The level of certification of the DApp."),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The user is advised to use L0 at the moment (simple audit with no certification claim). L2 certification has not been defined yet."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Summary: A short summary of the audit/certificate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Disclaimer: A disclaimer for the audit/certificate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Subject: The subject of the audit/certificate. This should be the same as the DApp registration's subject.")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Auditor Information:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: The name of the auditor."),(0,i.kt)("li",{parentName:"ul"},"URL: A logo of the auditor company. This might be used by DApp store or aggregators."),(0,i.kt)("li",{parentName:"ul"},"Email: The contact email of the auditor."),(0,i.kt)("li",{parentName:"ul"},"Website: The website of the auditor."),(0,i.kt)("li",{parentName:"ul"},"GitHub: A GitHub account of the auditor."),(0,i.kt)("li",{parentName:"ul"},"Discord: A Discord channel of the auditor."),(0,i.kt)("li",{parentName:"ul"},"Twitter: A Twitter handle of the auditor."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Audit Report:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Report URL: A URL to the audit report. This can be a link to a PDF or a JSON file. This report will be uploaded to IPFS, and the hash will be stored in the off-chain metadata."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"DApp scripts:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Script Hash: The hash of the DApp's script. This is used to link the audit/certificate to a particular version of the DApp. See CIP-0072 for more information."),(0,i.kt)("li",{parentName:"ul"},"Contract address: The address of the DApp's contract."),(0,i.kt)("li",{parentName:"ul"},"Smart Contract Information:",(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This information might be used to link to vulnerabilities discovered after the release and audit of the dapp.")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Era: The era of the DApp's contract."),(0,i.kt)("li",{parentName:"ul"},"Compiler: The compiler used to compile the DApp's script."),(0,i.kt)("li",{parentName:"ul"},"Compiler version: The version of the compiler used to compile the DApp's script."),(0,i.kt)("li",{parentName:"ul"},"Optimizer: The optimizer used to further optimize the DApp's script."),(0,i.kt)("li",{parentName:"ul"},"Optimizer version: The version of the optimizer used to optimize the DApp's script."),(0,i.kt)("li",{parentName:"ul"},"Repository URL: The URL of the repository of the DApp.")))))),(0,i.kt)("h2",{id:"downloading-the-metadata"},"Downloading the Metadata"),(0,i.kt)("p",null,"The user can download the metadata in JSON format. This JSON file can then be used to ",(0,i.kt)("a",{parentName:"p",href:"https://developers.cardano.org/docs/transaction-metadata/"},"broadcast the transaction on-chain with metadata"),"."),(0,i.kt)("p",null,"If succesful, a user can then fetch the metadata by using the 1304 metadata label, for example on:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://preview.cexplorer.io/metadata"},"Preview Cexplorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://preprod.cexplorer.io/metadata"},"Preprod Cexplorer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cexplorer.io/metadata"},"Mainnet Cexplorer"))))}d.isMDXComponent=!0}}]);