---
title: Filter dossier instances
description: You can use the following REST APIs to filter the data that is returned when you create or update an instance of a dossier, including clearing the filter selections.
---

You can use the following REST APIs to filter the data that is returned when you create or update an instance of a dossier, including clearing the filter selections.

- `POST /api/dossiers/{dossierId}/instances` Create an instance of a specific dossier with the existing filter applied, including clearing all of the current filter selections.
- `PUT /api/dossiers/{dossierId}/instances/{instanceId}/filters` Execute an existing dossier instance with new filter selections, including clearing all of the current filter selections.

We have provided a [workflow sample](apply-filters-to-a-dossier.md) that illustrates how to create an instance of a dossier with an existing filter applied, and then re-execute the same dossier instance with updated selections for the same filter.

For detailed information about filtering data in dossiers, see the [MicroStrategy product help](https://www2.microstrategy.com/producthelp/current/MSTRWeb/WebHelp/Lang_1033/Content/filter_data.htm).
