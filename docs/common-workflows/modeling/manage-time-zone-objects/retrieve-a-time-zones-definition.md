---
title: Retrieve a timezone's definition
description: You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows.
---

:::tip

You can try out this workflow at [REST API Playground](https://www.postman.com/microstrategysdk/workspace/microstrategy-rest-api/folder/16131298-4845cf11-1e66-4530-b33f-730143143498?ctx=documentation).

Learn more about MicroStrategy REST API Playground [here](/docs/getting-started/playground.md).

:::

You can use REST APIs to retrieve the definition for a timezone through the Modeling service. This topic includes the following workflows.

## Retrieve a timezone's definition

You want to get the definition of a system timezone. The object ID of the timezone is `1D18D39B4594CFAF60A6C1B2F48164E8`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since timezone objects are configuration objects, you must set the project ID as an empty string.

:::

Get the timezone's definition using [GET /api/model/timezones/{timezoneId}](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Timezones).

Sample Request Header:

```http
"accept": "application/json"
"X-MSTR-AuthToken": "lmiouhsue1osvl8uf2vuvlbcfp"
"X-MSTR-ProjectID": ""
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/1D18D39B4594CFAF60A6C1B2F48164E8" -H "accept: application/json" -H "X-MSTR-AuthToken: lmiouhsue1osvl8uf2vuvlbcfp" -H "X-MSTR-ProjectID: "
```

Sample Response Body:

You can view the timezone's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-10-21T08:41:51.349Z",
    "dateModified": "2021-12-13T11:30:02.340Z",
    "versionId": "2D54462A4BC579B910BC59A10F60354C",
    "primaryLocale": "en-US",
    "objectId": "1D18D39B4594CFAF60A6C1B2F48164E8",
    "subType": "timezone_system",
    "name": "America New York time",
    "description": "The state of New York uses the Eastern Timezone (UTC-05:00) with daylight saving time (UTC-04:00)."
  },
  "currentOffset": -18000
}
```

Response Code: 200 (The timezone's definition is returned successfully.)

## Retrieve a timezone's definition within a changset

You want the definition of a custom timezone object. That object ID of the timezone is `E99B4F7692564D36A5B324A7956CB84F`.

:::info

Get the authorization token needed to execute the request with [POST /api/auth/login](https://demo.microstrategy.com/MicroStrategyLibrary/api-docs/index.html#/Authentication/postLogin).

Since timezone objects are configuration objects, you must set the project ID as an empty string.

:::

:::tip

Changesets are used in this workflow. For information on how to create and use changesets, see [Changesets](/docs/common-workflows/modeling/changesets.md). If you plan to use the response of `GET /api/model/timezones` to create a new timezone or update the custom timezone's definitions, it is recommended to associate all requests to one changeset.

:::

Get the timezone's definition within a changeset using [GET /api/model/timezones/{timezoneId}](https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/862780DC499A14D74FEC7EB2EF317DA2).

Sample Request Header

```http
"accept": "application/json"
"X-MSTR-AuthToken": "pisu5dkkutqfblaamdomgr00ch"
"X-MSTR-MS-Changeset": "0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Request Body: Empty

Sample Curl:

```bash
curl -X GET "https://demo.microstrategy.com/MicroStrategyLibrary/api/model/timezones/E99B4F7692564D36A5B324A7956CB84F" -H "accept: application/json" -H "X-MSTR-AuthToken: pisu5dkkutqfblaamdomgr00ch" -H "X-MSTR-MS-Changeset: 0E9F01172ECF4BA2BB510F7B9FB4F6E8"
```

Sample Response Body:

You can view the timezone's definition in the body of the response.

```json
{
  "information": {
    "dateCreated": "2021-12-08T08:54:07.114Z",
    "dateModified": "2021-12-08T08:54:07.114Z",
    "versionId": "12F1BE5E4B1FE0965E9BA7933985187C",
    "primaryLocale": "en-US",
    "objectId": "E99B4F7692564D36A5B324A7956CB84F",
    "subType": "timezone_custom",
    "name": "Asia Shanghai time"
  },
  "baseTimezone": {
    "objectId": "0B4AC9E54E016BF00EAA99929C2B4E5C",
    "subType": "timezone_system",
    "name": "Asia Shanghai time"
  },
  "currentOffset": 28800
}
```

Response Code: 200 (timezone's definition is returned successfully)
