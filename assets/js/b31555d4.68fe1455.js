"use strict";(self.webpackChunkrest_api_docs=self.webpackChunkrest_api_docs||[]).push([[7723],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,L=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(L,i(i({ref:t},c),{},{components:n})):a.createElement(L,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62407:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return D},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a,r=n(83117),o=n(80102),i=(n(67294),n(3905)),s=["components"],p={title:"Get applicable properties for a datasource",sidebar_label:"Get applicable properties for a datasource",description:"Get applicable properties for a datasource."},l=void 0,c={unversionedId:"common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties",id:"common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties",title:"Get applicable properties for a datasource",description:"Get applicable properties for a datasource.",source:"@site/docs/common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties.md",sourceDirName:"common-workflows/administration/datasource-management",slug:"/common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties",draft:!1,editUrl:"https://github.com/MicroStrategy/rest-api-docs/tree/public/docs/common-workflows/administration/datasource-management/get-datasource-applicable-advanced-properties.md",tags:[],version:"current",lastUpdatedBy:"magua-io",lastUpdatedAt:1680286823,formattedLastUpdatedAt:"Mar 31, 2023",frontMatter:{title:"Get applicable properties for a datasource",sidebar_label:"Get applicable properties for a datasource",description:"Get applicable properties for a datasource."},sidebar:"tutorialSidebar",previous:{title:"Delete a datasource",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/delete-a-datasource"},next:{title:"Get datasource definition and advanced properties",permalink:"/rest-api-docs/common-workflows/administration/datasource-management/get-datasource-with-advanced-properties"}},m={},d=[],u=(a="Available",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),L={toc:d};function D(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u,{since:"2021 Update 8",mdxType:"Available"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can try out this workflow at ",(0,i.kt)("a",{parentName:"p",href:"https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-585d42d1-fbdc-4d1d-afbb-c4e872753709?ctx=documentation"},"REST API Playground"),"."),(0,i.kt)("p",{parentName:"admonition"},"Learn more about MicroStrategy REST API Playground ",(0,i.kt)("a",{parentName:"p",href:"/rest-api-docs/getting-started/playground"},"here"),".")),(0,i.kt)("p",null,"This workflow sample demonstrates how to retrieve the applicable properties of a datasource through Modeling Service."),(0,i.kt)("p",null,"You want to get the applicable properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Amazon Athena")," datasource object. The object ID is ",(0,i.kt)("inlineCode",{parentName:"p"},"31B4EC39D7F94875AB4E2785C8BBA26E"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Get the authorization token needed to execute the request with ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin"},"POST /api/auth/login"),"."),(0,i.kt)("p",{parentName:"admonition"},"Get the project ID from ",(0,i.kt)("a",{parentName:"p",href:"https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Projects/getProjects_1"},"GET /api/projects"),".")),(0,i.kt)("p",null,"Retrieve the applicable properties using ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /api/model/datasources/{datasourceId}/applicableAdvancedProperties"),"."),(0,i.kt)("p",null,"Sample Request Header:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'"accept": "application/json"\n"X-MSTR-AuthToken": "cs0intmf1fgij7ao0v2v0j48e5"\n"X-MSTR-ProjectID": "B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Request Body: Empty"),(0,i.kt)("p",null,"Sample Curl:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/datasources/31B4EC39D7F94875AB4E2785C8BBA26E/applicableAdvancedProperties" \\\n-H "accept: application/json" \\\n-H "X-MSTR-AuthToken: cs0intmf1fgij7ao0v2v0j48e5" \\\n-H "X-MSTR-ProjectID: B7CA92F04B9FAE8D941C3E9B7E0CD754"\n')),(0,i.kt)("p",null,"Sample Response Body:"),(0,i.kt)("p",null,"You can view the applicable properties in the body of the response."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "propertyCount": 2,\n  "applicableProperties": {\n    "[VLDB Select].[Allow Cartesian Join]": {\n      "name": "Allow Cartesian Join",\n      "groupId": 1,\n      "groupName": "Joins",\n      "maxValue": 2,\n      "displayType": "options",\n      "displayName": "Cartesian Join Governing",\n      "showSqlPreview": true,\n      "options": [\n        {\n          "value": "Choosing this option keeps the backward compatibility with MicroStrategy 2019 where SQL queries are governed by \\"Cartesian Join Warning\\" VLDB setting.",\n          "sqlPreview": "OBSOLETE - Keep backward compatibility with MicroStrategy 2019."\n        },\n        {\n          "value": "Cancel execution of cartesian join for SQL, MDX, In-Memory queries.",\n          "sqlPreview": "This VLDB setting only works for Data Engine Version 2020 or above. Choosing this option disallows cross join execution for SQL, MDX and In-Memory queries."\n        },\n        {\n          "value": "Execute cartesian join for SQL, MDX, In-Memory queries.",\n          "sqlPreview": "This VLDB setting only works for Data Engine Version 2020 or above. Choosing this option allows cross join execution for SQL, MDX and In-Memory queries."\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "[VLDB Select].[Join Across Datasets]": {\n      "name": "Join Across Datasets",\n      "groupId": 2,\n      "groupName": "Metrics",\n      "maxValue": 1,\n      "displayType": "options",\n      "displayName": "Join Across Datasets",\n      "showSqlPreview": false,\n      "options": [\n        {\n          "value": "Disallow joins based on unrelated common attributes",\n          "sqlPreview": "Metrics"\n        },\n        {\n          "value": "Allow joins based on unrelated common attributes",\n          "sqlPreview": "Metrics"\n        }\n      ],\n      "type": "int32",\n      "defaultValue": 0\n    },\n    "sqlDynamicPreview": "[VLDB Report].[Report PreStatement 1]\\n[VLDB Report].[Report PreStatement 2]\\n[VLDB Report].[Report PreStatement 3]\\n[VLDB Report].[Report PreStatement 4]\\n[VLDB Report].[Report PreStatement 5]\\n\\n[VLDB Create].[Table PreStatement 1]\\n[VLDB Create].[Table PreStatement 2]\\n[VLDB Create].[Table PreStatement 3]\\n[VLDB Create].[Table PreStatement 4]\\n[VLDB Create].[Table PreStatement 5]\\n\\ncreate [VLDB Create].[Table Qualifier] table [VLDB Create].[Table Descriptor] [VLDB Create].[Table Prefix] TABLENAME [VLDB Create].[Table\\nOption] (ATTRIBUTE_COL1 VARCHAR(20) [VLDB Create].[Attribute ID Constraint] , FORM_COL2 CHAR(20), [Attribute non-ID Constraint] FACT_COL3\\nFLOAT) [VLDB Create].[Table Space]\\nprimary index (ATTRIBUTE_COL1, FORM_COL2) [VLDB Create].[Create PostString]\\n\\n[VLDB Insert].[Insert PreStatement 1]\\n[VLDB Insert].[Insert PreStatement 2]\\n[VLDB Insert].[Insert PreStatement 3]\\n[VLDB Insert].[Insert PreStatement 4]\\n[VLDB Insert].[Insert PreStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE1 A1, TABLE2 A2, TABLE3 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert MidStatement 1]\\n[VLDB Insert].[Insert MidStatement 2]\\n[VLDB Insert].[Insert MidStatement 3]\\n[VLDB Insert].[Insert MidStatement 4]\\n[VLDB Insert].[Insert MidStatement 5]\\n\\n[VLDB Insert].[Bulk Insert String] insert into TABLENAME [VLDB Insert].[Insert Table Option] select [VLDB Select].[SQL Hint] A1.COL1 [VLDB\\nSyntax].[Mid Name Alias Pattern] COLUMN1ALIAS, A2.COL2 [VLDB Syntax].[Mid Name Alias Pattern] COLUMN2ALIAS, A3.COL3 [VLDB Syntax].[Mid Name\\nAlias Pattern] COLUMN3ALIAS from TABLE4 A1, TABLE5 A2, TABLE6 A3 where A1.COL1 = A2.COL1 and A2.COL4=A3.COL5 [VLDB Insert].[Post Insert\\nString]\\n\\n[VLDB Insert].[Insert PostStatement 1]\\n[VLDB Insert].[Insert PostStatement 2]\\n[VLDB Insert].[Insert PostStatement 3]\\n[VLDB Insert].[Insert PostStatement 4]\\n[VLDB Insert].[Insert PostStatement 5]\\n\\ncreate [VLDB Create].[Index Qualifier] index [VLDB Create].[Index Prefix] IDX_TEMP1(STORE_ID, STORE_DESC) [VLDB Create].[Index PostString]\\n\\n[VLDB Create].[Table PostStatement 1]\\n[VLDB Create].[Table PostStatement 2]\\n[VLDB Create].[Table PostStatement 3]\\n[VLDB Create].[Table PostStatement 4]\\n[VLDB Create].[Table PostStatement 5]\\n\\nselect [VLDB Select].[SQL Hint] A1.STORE_NBR [VLDB Syntax].[Mid Name Alias Pattern] STORE_NBR, max(A1.STORE_DESC) [VLDB Syntax].[Mid Name\\nAlias Pattern] METRICALIAS from LOOKUP_STORE A1 A1.STORE_NBR = 1 group by A1.STORE_NBR [VLDB Select].[SELECT PostString]\\n\\n[VLDB Report].[Report PostStatement 1]\\n[VLDB Report].[Report PostStatement 2]\\n[VLDB Report].[Report PostStatement 3]\\n[VLDB Report].[Report PostStatement 4]\\n[VLDB Report].[Report PostStatement 5]\\n[Drop Table PreStatement 1]\\n\\ndrop table TABLENAME\\n\\n[Drop Table PostStatement 1]\\n[VLDB Drop].[Post Cleanup Statement 1]\\n[VLDB Drop].[Post Cleanup Statement 2]\\n[VLDB Drop].[Post Cleanup Statement 3]\\n[VLDB Drop].[Post Cleanup Statement 4]\\n[VLDB Drop].[Post Cleanup Statement 5]"\n  }\n}\n')),(0,i.kt)("p",null,"Response Code: 200 (The applicable properties of a datasource were returned successfully.)"))}D.isMDXComponent=!0}}]);