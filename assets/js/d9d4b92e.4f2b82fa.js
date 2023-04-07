"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[3187],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},61709:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={title:"Benefits of creating a dataset incrementally with multiple requests",description:"The benefits of creating a dataset incrementally with multiple requests."},s=void 0,c={unversionedId:"common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/benefits",id:"common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/benefits",title:"Benefits of creating a dataset incrementally with multiple requests",description:"The benefits of creating a dataset incrementally with multiple requests.",source:"@site/docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/benefits.md",sourceDirName:"common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests",slug:"/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/benefits",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/benefits",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/benefits.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Benefits of creating a dataset incrementally with multiple requests",description:"The benefits of creating a dataset incrementally with multiple requests."},sidebar:"tutorialSidebar",previous:{title:"Create a dataset incrementally with multiple requests",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/"},next:{title:"Logic for creating a dataset incrementally",permalink:"/rest-api-docs/common-workflows/analytics/manage-datasets/make-external-data-available/create-a-dataset-incrementally-with-multiple-requests/logic-for-creating-a-dataset-incrementally"}},u={},m=[],p={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The incremental approach to making external data available to MicroStrategy, using multiple requests, has a variety of benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can create multiple tables in a dataset, rather than being limited to a single table."),(0,i.kt)("li",{parentName:"ul"},"The actions for uploading data and publishing the dataset have been separated, and data can be uploaded in separate chunks. This provides scalability and better performance and is very important when you are working with very large datasets."),(0,i.kt)("li",{parentName:"ul"},"You can publish the cube at any time, allowing you to choose the optimum time for publication."),(0,i.kt)("li",{parentName:"ul"},"You can cancel publication of a dataset at any time before it finishes."),(0,i.kt)("li",{parentName:"ul"},"The workflow is more RESTful.")))}d.isMDXComponent=!0}}]);