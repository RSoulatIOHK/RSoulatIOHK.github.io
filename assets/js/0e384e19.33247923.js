"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(h,i(i({ref:e},p),{},{components:a})):n.createElement(h,i({ref:e},p))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9881:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},i="Overview",o={unversionedId:"intro",id:"intro",title:"Overview",description:"This page will describe the main features of the tool and link to the various other pages in the tutorial.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/RSoulatIOHK/ptt_documentation/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Using the Testing Tool",permalink:"/docs/category/using-the-testing-tool"}},s={},u=[{value:"What is the Plutus Testing Tool?",id:"what-is-the-plutus-testing-tool",level:2},{value:"How to use the Plutus Testing Tool?",id:"how-to-use-the-plutus-testing-tool",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Certification object",id:"certification-object",level:3},{value:"Features",id:"features",level:3},{value:"Quickstart",id:"quickstart",level:3},{value:"Generating certificates",id:"generating-certificates",level:3},{value:"Support &amp; Feedback",id:"support--feedback",level:3}],p={toc:u},d="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"This page will describe the main features of the tool and link to the various other pages in the tutorial."),(0,r.kt)("h2",{id:"what-is-the-plutus-testing-tool"},"What is the Plutus Testing Tool?"),(0,r.kt)("p",null,"The Plutus Testing Tool is a tool that allows you to test your Plutus contracts in a simulated environment. It is a web application that you can access at ",(0,r.kt)("a",{parentName:"p",href:"https://dapps-certification-web.scdev.aws.iohkdev.io/"},"Plutus Testing Tool"),".\nPlutus Testing Tool is based on Property Based Testing (PBT). Property-Based-Testing is a testing methodology that allows you to test your code by specifying properties that should hold for all inputs. A tool based on PBT will then generate random actions and check that the properties hold for all of them. If a property does not hold, the tool will generate a counterexample that will help you debug your code."),(0,r.kt)("p",null,"The tool comes with a set of predefined properties that you can use to test your contracts. You can find more information about them in the Properties part of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/backend/certification-object"},"Certification Object")," section."),(0,r.kt)("h2",{id:"how-to-use-the-plutus-testing-tool"},"How to use the Plutus Testing Tool?"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"A few prerequisites are necessary to use the Plutus Testing Tool. You will find the related information in the this section and in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/backend/additional-requirements"},"Additional Requirements")," section."),(0,r.kt)("h3",{id:"certification-object"},"Certification object"),(0,r.kt)("p",null,'In the spirit of "certification", you will need to fill a certification object. This will allow the tool to test your DApp. You will find more information about the certification object in the ',(0,r.kt)("a",{parentName:"p",href:"/docs/backend/certification-object"},"Certification Object")," section."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("p",null,"The user is assumed to have familiarity with either the ",(0,r.kt)("a",{parentName:"p",href:"https://plutus-apps.readthedocs.io/en/latest/plutus/tutorials/contract-models.html"},"Plutus contract model")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tweag/cooked-validators"},"cooked-validators"),". Our tool supports both of the testing and emulation backends."),(0,r.kt)("p",null,"At the moment some features of the tool are only available on a specific backend. However, we are working on having all of the features available for all of the backends. "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The tool accessible online currently does not support cooked-validators. However, you can access it with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Ali-Hill/minimal-ptt-examples/"},"minimal-ptt-examples")," repository. It will be integrated into the tool for the next release.")),(0,r.kt)("p",null,"Here is a table with each feature and their respective availability:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feature"),(0,r.kt)("th",{parentName:"tr",align:null},"Plutus apps"),(0,r.kt)("th",{parentName:"tr",align:null},"Cooked-validators"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------------")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unit tests"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Property Based Testing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Negative testing*"),(0,r.kt)("td",{parentName:"tr",align:null},"Soon"),(0,r.kt)("td",{parentName:"tr",align:null},"Soon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Coverage"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Soon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------------")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Symbolic UTxO"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Symbolic tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------------")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Double Satisfaction Vulnerability check"),(0,r.kt)("td",{parentName:"tr",align:null},"Soon"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Locked Funds Vulnerability check"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Soon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resilience to crash"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"2024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"-------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------"),(0,r.kt)("td",{parentName:"tr",align:null},"-----------------")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Plutus-v1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Plutus-v2"),(0,r.kt)("td",{parentName:"tr",align:null},"2024"),(0,r.kt)("td",{parentName:"tr",align:null},"2024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Plutus-v3"),(0,r.kt)("td",{parentName:"tr",align:null},"2024"),(0,r.kt)("td",{parentName:"tr",align:null},"2024")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UPLC testing"),(0,r.kt)("td",{parentName:"tr",align:null},"2024"),(0,r.kt)("td",{parentName:"tr",align:null},"2024")))),(0,r.kt)("p",null,"A more detailed view of the vulnerabilities we address can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/backend/list-vulnerabilities"},"Vulnerabilities")," section."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Some of those features can be demonstrated on request but are not yet integrated in the tool. Please contact us if you are interested in seeing them.")),(0,r.kt)("h3",{id:"quickstart"},"Quickstart"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/backend/minimal-examples"},"Minimal Examples")," repository offers a great way for new users to check the capabilities of the tool. The repository contains a wide range of examples that covers all the different aspects of the testing tool."),(0,r.kt)("p",null,"They can be used as examples for the contract model, either with Plutus apps or cooked-validators. The examples can be used for a starting point of a DApp that builds for the tool."),(0,r.kt)("p",null,"The different libraries used for these examples are cached, which means the build time should be minimal."),(0,r.kt)("h3",{id:"generating-certificates"},"Generating certificates"),(0,r.kt)("p",null,"After a succesful test run, the tool will offer to generate a CIP-0096 compliant certificate. The tool currently generates a level 0 certificate (simple audit) with attached the full Json file of the test run. "),(0,r.kt)("h3",{id:"support--feedback"},"Support & Feedback"),(0,r.kt)("p",null,"If you need support, you should have received a link to a Slack channel when subscribing. If that is not the case, please send an email to: support."),(0,r.kt)("p",null,"If you have any feedback on the tool, please reach to us in the dedicated Slack channel."),(0,r.kt)("p",null,"For any bug that you might encounter, we would be grateful if you could fill a bug report in the dedicated Slack channel."),(0,r.kt)("p",null,"For any feature request, please reach to us in the dedicated Slack channel."))}c.isMDXComponent=!0}}]);