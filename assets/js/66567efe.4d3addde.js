"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[503],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11135:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a,o=n(83117),i=n(80102),r=(n(67294),n(3905)),s=["components"],l={title:"Retrieve a subtotal's definition within a changeset",sidebar_label:"Retrieve a subtotal's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a subtotal's definition\u202fwithin a changeset."},c=void 0,p={unversionedId:"common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",id:"common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",title:"Retrieve a subtotal's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a subtotal's definition\u202fwithin a changeset.",source:"@site/docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset.md",sourceDirName:"common-workflows/modeling/manage-subtotal-objects",slug:"/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition-within-a-changeset.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Retrieve a subtotal's definition within a changeset",sidebar_label:"Retrieve a subtotal's definition within a changeset",description:"This workflow sample demonstrates how to retrieve a subtotal's definition\u202fwithin a changeset."},sidebar:"tutorialSidebar",previous:{title:"Retrieve a subtotal's definition",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition"},next:{title:"Create a subtotal within a changeset",permalink:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/create-a-subtotal-within-a-changeset"}},d={},u=[{value:"Get the definition of the specified subtotal ID within a changeset using GET /api/model/subtotals/{subtotalID}",id:"get-the-definition-of-the-specified-subtotal-id-within-a-changeset-using-get-apimodelsubtotalssubtotalid",level:2}],m=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),h={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{since:"2021 Update 5",mdxType:"Available"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-d1504a52-db9a-4d71-99d2-0ffbd82ee91a?ctx=documentation"},"REST API Playground"),"."),(0,r.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,r.kt)("p",null,"This workflow sample demonstrates how to retrieve a subtotal's definition\u202fwithin a changeset."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,r.kt)("p",null,"You want to get the definition of an object with the ID of ",(0,r.kt)("inlineCode",{parentName:"p"},"514C2064DF754990AF60432A1C1E4A77")," in the MicroStrategy Tutorial project. The project ID is ",(0,r.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,r.kt)("p",null,"For different formats of subtotal expressions, see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/manage-subtotal-objects/retrieve-a-subtotals-definition"},"Retrieve a subtotal's definition"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,r.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,r.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,r.kt)("p",null,"Changesets are used in this workflow. For information on how to create and use changesets, see ",(0,r.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/modeling/changesets"},"Changesets"),"."),(0,r.kt)("h2",{id:"get-the-definition-of-the-specified-subtotal-id-within-a-changeset-using-get-apimodelsubtotalssubtotalid"},"Get the definition of the specified subtotal ID within a changeset using ",(0,r.kt)("a",{parentName:"h2",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Subtotals/ms-getSubtotalDetails"},"GET /api/model/subtotals/{subtotalID}")),(0,r.kt)("p",null,"Sample Request Header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,r.kt)("p",null,"Sample Request Body: Empty"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Location"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"X-MSTR-authToken"),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"X-MSTR-MS-Changeset"),(0,r.kt)("td",{parentName:"tr",align:null},"The changeset ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"params"),(0,r.kt)("td",{parentName:"tr",align:null},"showExpressionAs"),(0,r.kt)("td",{parentName:"tr",align:null},"Omitted, tree, or tokens:",(0,r.kt)("br",null),"- If omitted, the expression is returned in only \u201ctext\u201c formats.",(0,r.kt)("br",null),"- If ",(0,r.kt)("inlineCode",{parentName:"td"},"tree"),', the expression is returned in "text" and "tree" formats.',(0,r.kt)("br",null),"- If ",(0,r.kt)("inlineCode",{parentName:"td"},"tokens"),', the expression is returned in "text" and "tokens" formats.')))),(0,r.kt)("p",null,"Sample Curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/subtotals/514C2064DF754990AF60432A1C1E4A77" -H "accept: application/json" -H "X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-MS-Changeset: 2A131744C91B4915B54A61FFDC528F62"\n')),(0,r.kt)("p",null,"Sample Response Body:"),(0,r.kt)("p",null,"You can view the subtotal's definition in the body of the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "information": {\n    "dateCreated": "2022-03-08T03:36:01.097Z",\n    "dateModified": "2022-03-08T03:36:01.097Z",\n    "versionId": "C8F384E54BD9E1A415260B9F4A63B643",\n    "primaryLocale": "en-US",\n    "objectId": "514C2064DF754990AF60432A1C1E4A77",\n    "subType": "metric_subtotal",\n    "name": "Custom_Max"\n  },\n  "expression": {\n    "text": "Revenue",\n    "tree": {\n      "type": "object_reference",\n      "target": {\n        "objectId": "1116B53103FC4A72BBACBAED388243D6",\n        "subType": "agg_metric",\n        "name": "Revenue"\n      },\n      "isIndependent": 0\n    }\n  },\n  "dimty": {\n    "dimtyUnits": [{ "dimtyUnitType": "report_level", "relativePosition": 0 }]\n  }\n}\n')),(0,r.kt)("p",null,"Response Code: 200 (Subtotal's definition is returned successfully.)"))}f.isMDXComponent=!0}}]);