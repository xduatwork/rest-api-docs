"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3348],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),l=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=l(r),m=n,d=f["".concat(s,".").concat(m)]||f[m]||p[m]||i;return r?a.createElement(d,o(o({ref:e},u),{},{components:r})):a.createElement(d,o({ref:e},u))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},57251:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),o=["components"],c={title:"REST API architecture",description:"The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol."},s=void 0,l={unversionedId:"getting-started/rest-api-architecture",id:"getting-started/rest-api-architecture",title:"REST API architecture",description:"The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol.",source:"@site/docs/getting-started/rest-api-architecture.md",sourceDirName:"getting-started",slug:"/getting-started/rest-api-architecture",permalink:"/rest-api-docs/getting-started/rest-api-architecture",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/getting-started/rest-api-architecture.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"REST API architecture",description:"The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol."},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/rest-api-docs/getting-started/"},next:{title:"REST API families",permalink:"/rest-api-docs/getting-started/rest-api-families"}},u={},p=[],f={toc:p};function m(t){var e=t.components,c=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The MicroStrategy REST framework follows REST conventions to provide a simplified interface for utilizing platform capabilities through JSON data via HTTP(s) protocol. You can use the REST framework to perform actions such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/authentication"},"Authentication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/retrieve-data-from-the-intelligence-server/"},"Retrieve data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/getting-started/configure-clustered-environments"},"Configuring a clustered environment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/administration/user-management/manage-user-and-user-groups"},"User management"))),(0,i.kt)("p",null,"The REST framework is scalable, allowing you to configure a clustered environment that supports multiple instances of REST servers communicating with an Intelligence Server cluster."),(0,i.kt)("p",null,"The REST Framework layer is built on top of the existing WebObjects and XML API layers. It provides a comprehensive set of APIs that allow developers to quickly and easily customize MicroStrategy BI functionality."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"REST Architecture",src:r(80194).Z,width:"624",height:"426"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"REST Framework Layer: The REST Framework Layer exposes an interface to fetch and manipulate data using HTTP requests such as GET, POST, DELETE, and so on."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/WebSDK/Content/topics/webarch/Web_Objects_Layer.htm"},"WebObjects Layer"),": The BI function layer that contains the Java classes that interpret and initiate distinct units of BI functionality (such as pivot, sort, subtotal, drill, and so on). This layer also constructs the aggregated XML API calls to the XML API layer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www2.microstrategy.com/producthelp/Current/WebSDK/Content/topics/webarch/XML_API_Layer.htm"},"XML API Layer"),": The communication objects layer that manages the high-throughput XML communication that accesses Intelligence Server methods.")))}m.isMDXComponent=!0},80194:function(t,e,r){e.Z=r.p+"assets/images/REST_architecture-1745a74162be1800bc29753d9fea066b.png"}}]);