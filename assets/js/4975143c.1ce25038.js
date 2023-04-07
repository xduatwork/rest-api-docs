"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[5025],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||n;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},99612:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=r(83117),i=r(80102),n=(r(67294),r(3905)),o=["components"],s={title:"Filter data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied."},l=void 0,c={unversionedId:"common-workflows/analytics/filter-data/filter-data",id:"common-workflows/analytics/filter-data/filter-data",title:"Filter data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied.",source:"@site/docs/common-workflows/analytics/filter-data/filter-data.md",sourceDirName:"common-workflows/analytics/filter-data",slug:"/common-workflows/analytics/filter-data/",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/filter-data/filter-data.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Filter data",description:"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied."},sidebar:"tutorialSidebar",previous:{title:"Sort data",permalink:"/rest-api-docs/common-workflows/analytics/sort-data"},next:{title:"Filter report and cube instances",permalink:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/"}},p={},d=[{value:"Filter report and cube instances",id:"filter-report-and-cube-instances",level:2},{value:"Filter dossier instances",id:"filter-dossier-instances",level:3},{value:"Retrieve filters applied in dossier chapters",id:"retrieve-filters-applied-in-dossier-chapters",level:3},{value:"Retrieve filters applied to a visualization in a dossier",id:"retrieve-filters-applied-to-a-visualization-in-a-dossier",level:3}],u={toc:d};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can try these workflows with ",(0,n.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-b0a16367-8997-447d-8731-2d6281d4f9bc?ctx=documentation"},"REST API Playground"),"."),(0,n.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,n.kt)("p",null,"You can use REST API requests to filter data that is returned and to retrieve information about filters that were applied:"),(0,n.kt)("h2",{id:"filter-report-and-cube-instances"},"Filter report and cube instances"),(0,n.kt)("p",null,"You can use the following REST APIs to filter the data that is returned when you ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/"},"create an instance of a report or cube"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/reports/{reportId}/instances")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/cubes/{cubeId}/instances"))),(0,n.kt)("p",null,"Because these filters are applied to instances, they are not persisted."),(0,n.kt)("p",null,"You define how the data should be filtered in the body parameter of the request. You can filter the data that is returned in the following ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-view-filters/"},"Using view filters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-metric-limits/"},"Using metric limits")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-report-and-cube-instances/filter-report-and-cube-instances-using-requested-objects/"},"Using requested objects"))),(0,n.kt)("p",null,"If you use both a viewFilter and a ",(0,n.kt)("inlineCode",{parentName:"p"},"requestedObjects")," parameter in the HTTP request, the view filter will be applied first. The requested objects definition will then be applied to the filtered results (a subset of the cube data), rather than to the cube data itself."),(0,n.kt)("h3",{id:"filter-dossier-instances"},"Filter dossier instances"),(0,n.kt)("p",null,"You can use the following REST APIs to ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/"},"filter the data that is returned when you create or update an instance of a dossier"),", including clearing the filter selections."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/dossiers/{dossierId}/instances")," Create an instance of a specific dossier with the existing filter applied, including clearing all of the current filter selections."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters")," Execute an existing dossier instance with new filter selections, including clearing all of the current filter selections.")),(0,n.kt)("p",null,"We have provided a ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/filter-dossier-instances/apply-filters-to-a-dossier"},"workflow sample")," that illustrates how to create an instance of a dossier with an existing filter applied, and then re-execute the same dossier instance with updated selections for the same filter."),(0,n.kt)("p",null,"For detailed information about filtering data in dossiers, see the ",(0,n.kt)("a",{parentName:"p",href:"https://www2.microstrategy.com/producthelp/Current/MSTRWeb/WebHelp/Lang_1033/Content/filter_data.htm"},"MicroStrategy product help"),"."),(0,n.kt)("h3",{id:"retrieve-filters-applied-in-dossier-chapters"},"Retrieve filters applied in dossier chapters"),(0,n.kt)("p",null,"You can use the following REST API to get information about the ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-dossier-chapters"},"filter applied in each chapter in a specific dossier"),", including the key and name of the filter, a text summary of the filter expression, and information for the filter source."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers/{dossierId}/definition"))),(0,n.kt)("h3",{id:"retrieve-filters-applied-to-a-visualization-in-a-dossier"},"Retrieve filters applied to a visualization in a dossier"),(0,n.kt)("p",null,"You can use the following REST API request to return information about the ",(0,n.kt)("a",{parentName:"p",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/"},"filters that were applied to a visualization in a dossier"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/dossiers/{dossierId}/instances/{instanceId}/chapters/{chapterKey/visualizations/{visualizationKey}"))),(0,n.kt)("p",null,"The following types of filters are applied at specific points in the data aggregation process."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-based-view-filters"},"Metric-based view filter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-attribute-based-view-filters"},"Attribute-based view filter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-template-limit-criteria"},"Template limit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/rest-api-docs/common-workflows/analytics/filter-data/retrieve-filters-applied-to-a-visualization/return-metric-limit-criteria"},"Metric limit"))))}f.isMDXComponent=!0}}]);