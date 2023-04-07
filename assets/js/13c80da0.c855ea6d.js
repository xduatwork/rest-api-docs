"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[9062],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},36067:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n,a=r(83117),o=r(80102),i=(r(67294),r(3905)),s=["components"],c={title:"Retrieve report or card SQL",sidebar_label:"Retrieve report or card SQL",description:"You can retrieve a report or card instance\u2019s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects."},p=void 0,l={unversionedId:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql",id:"common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql",title:"Retrieve report or card SQL",description:"You can retrieve a report or card instance\u2019s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects.",source:"@site/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql.md",sourceDirName:"common-workflows/analytics/retrieve-sql-statements-and-query-details",slug:"/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-report-or-card-sql.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Retrieve report or card SQL",sidebar_label:"Retrieve report or card SQL",description:"You can retrieve a report or card instance\u2019s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects."},sidebar:"tutorialSidebar",previous:{title:"Retrieve SQL statements and query details",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/"},next:{title:"Retrieve the SQL statement of datasets in a document or dossier instance",permalink:"/rest-api-docs/common-workflows/analytics/retrieve-sql-statements-and-query-details/retrieve-dataset-sql"}},d={},u=[{value:"Create a report instance",id:"create-a-report-instance",level:2},{value:"Get the SQL statement of the report instance using <code>GET /api/v2/reports/{id}/instances/{instanceId}/sqlView</code>",id:"get-the-sql-statement-of-the-report-instance-using-get-apiv2reportsidinstancesinstanceidsqlview",level:2}],m=(n="Available",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(m,{since:"2021 Update 2",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-c962ed90-f4e6-4934-8b65-4480bf45746e?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"You can retrieve a report or card instance\u2019s SQL statement. In this workflow sample, a document with a report object is used. However, the same workflow applies to card objects."),(0,i.kt)("p",null,"You want to get the definition of the SQL statement from the Cost Analysis Report in the MicroStrategy Tutorial project. The object ID of the report is ",(0,i.kt)("inlineCode",{parentName:"p"},"CA8E4E2C6F4AC30B0DDE2195998B82DC"),". The project ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"B7CA92F04B9FAE8D941C3E9B7E0CD754"),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"An authorization token allows the API layer to hide internal session-related implementations such as managing different project-specific sessions. Once the REST API layer has validated the user's credentials using the specified authentication mode, it initiates a session with the Intelligence server and creates a unique authorization token for the client.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("h2",{id:"create-a-report-instance"},"Create a report instance"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Reports/createReportInstance_1"},"POST /api/v2/reports/{id}/instances")),(0,i.kt)("p",null,"To retrieve the SQL statement of a report or card, it is ",(0,i.kt)("em",{parentName:"p"},"not")," necessary to execute the report to retrieve data. If you don\u2019t want to execute the report, thereby reducing the wait time for report instance creation, pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cresolve_prompts\u201d")," value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"\u201cexecutionStage\u201d")," query parameter."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://hostname:8080/MicroStrategyLibrary/api/v2/reports/CA8E4E2C6F4AC30B0DDE2195998B82DC/instances?executionStage=resolve_prompts" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Code: 200 (A new report instance is created successfully.)"),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "CA8E4E2C6F4AC30B0DDE2195998B82DC",\n  "status": 1,\n  "instanceId": "DE90B87ED6423AED89CB00A12AE5B203"\n}\n')),(0,i.kt)("h2",{id:"get-the-sql-statement-of-the-report-instance-using-get-apiv2reportsidinstancesinstanceidsqlview"},"Get the SQL statement of the report instance using ",(0,i.kt)("inlineCode",{parentName:"h2"},"GET /api/v2/reports/{id}/instances/{instanceId}/sqlView")),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "4bb7n1dhjo860e7tlpchg57hl"\n"X-MSTR-MS-Changeset": "2A131744C91B4915B54A61FFDC528F62"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "http://hostname:8080/MicroStrategyLibrary/api/v2/reports/CA8E4E2C6F4AC30B0DDE2195998B82DC/instances/DE90B87ED6423AED89CB00A12AE5B203/sqlView" -H "accept: application/json" -H "X-MSTR-AuthToken: 4bb7n1dhjo860e7tlpchg57hl" -H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the SQL statement in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "sqlStatement": "select\\t`a12`.`Year_ID`  `Year_ID`,\\n\\t`a12`.`MONTH_OF_YEAR`  `MONTH_OF_YEAR`,\\n\\tmax(`a14`.`MONTH_OF_YEAR_NAME`)  `MONTH_OF_YEAR_NAME0`,\\n\\t`a13`.`COUNTRY_ID`  `COUNTRY_ID`,\\n\\tmax(`a16`.`COUNTRY_NAME`)  `COUNTRY_NAME0`,\\n\\t`a13`.`REGION_ID`  `REGION_ID`,\\n\\tmax(`a15`.`REGION_NAME`)  `REGION_NAME`,\\n\\tsum(`a11`.`TOT_DOLLAR_SALES`)  `Revenue`,\\n\\tsum(`a11`.`TOT_COST`)  `WJXBFS1`\\nfrom\\t`SUBCATEG_MNTH_CTR_SLS`\\t`a11`\\n\\tjoin\\t`LU_MONTH`\\t`a12`\\n\\t  on \\t(`a11`.`MONTH_ID` = `a12`.`MONTH_ID`)\\n\\tjoin\\t`LU_CALL_CTR`\\t`a13`\\n\\t  on \\t(`a11`.`CALL_CTR_ID` = `a13`.`CALL_CTR_ID`)\\n\\tjoin\\t`LU_MONTH_OF_YEAR`\\t`a14`\\n\\t  on \\t(`a12`.`MONTH_OF_YEAR` = `a14`.`MONTH_OF_YEAR`)\\n\\tjoin\\t`LU_REGION`\\t`a15`\\n\\t  on \\t(`a13`.`COUNTRY_ID` = `a15`.`COUNTRY_ID` and \\n\\t`a13`.`REGION_ID` = `a15`.`REGION_ID`)\\n\\tjoin\\t`LU_COUNTRY`\\t`a16`\\n\\t  on \\t(`a13`.`COUNTRY_ID` = `a16`.`COUNTRY_ID`)\\ngroup by\\t`a12`.`Year_ID`,\\n\\t`a12`.`MONTH_OF_YEAR`,\\n\\t`a13`.`COUNTRY_ID`,\\n\\t`a13`.`REGION_ID`\\n\\n[Analytical engine calculation steps:\\n\\t1.  Perform cross-tabbing\\n]\\n"\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The SQL statement of the report instance is returned successfully.)"))}f.isMDXComponent=!0}}]);