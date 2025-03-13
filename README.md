# location-search-field

<!--<p>
  <img width="100%" src="" alt="location-search-field">
</p>-->

## Quick start

Install it:

```bash
npm i location-search-field
# or
yarn add location-search-field
# or
pnpm add location-search-field
```

Use it:

```tsx
import { LocationSearch } from 'location-search-field';
```

# Location Search Field Component

- [Location Search Field Component](#location-search-field)
  - [Features](#features)
  - [Examples](#examples)
  - [ArcGis API Token](#ArcGis API Token)
  - [Usage](#usage)
  - [Props](#props)

## Features

- As the user types, addresses are suggested based on their entry.
- Optionally allow user to select their current location which can be read from the browser.
- Data is pulled from [ESRI's ArcGis /suggest API](https://developers.arcgis.com/rest/geocode/suggest/)
- Built with Vite/React/MUI.

## Examples

[Play with demo](https://cchanxzy.github.io/react-currency-input-field) or view [examples code](https://github.com/nsaritzky/solid-currency-input-field/blob/main/src/examples)

## ArcGis API Token

Once you have your ArcGIS API Token setup, create a .env file in your project root at add the following:
```
VITE_ARCGIS_API_TOKEN=YOUR_API_TOKEN_GOES_HERE
```

## Usage

```js
import LocationSearch from 'location-search-field';

<LocationSearch
  id="address"
  label="Search Address"
  handleLocationSelect= {(coords, id, title) => console.log(coords, id, title)}
  countryCodeLimit = "USA"
  allowCurrentLocation = { true } 
  defaultId = { 'currentLocation' }
  sx={{ width: '100%' }}
/>

```

Have a look in [`src/examples`](TODO) for more examples.

## Props

| Name                                               | Type       | Default        | Description                                                                                    |
| -------------------------------------------------- | ---------- | -------------- | ---------------------------------------------------------------------------------------------- |
| id                                                 | `string`   | ``             | ID for field (if you'd like to reference it that way)                                          |
| label                                              | `string`   | ``             | Label to display in field                                                                      |
| defaultId                                          | `string`   |                | ESRI magickey or 'currentLocation' value                                                       |
| sx                                                 | `mui sx`   |                | Style                                                                                          |
| countryCodeLimit                                   | `string`   | ``             | ESRI country code limit (eg. 'Mexico')                                                         |
| allowCurrentLocation                               | `boolean`  | true           | If true, the user can select their current location as an option                               | 
| handleLocationSelect                               | `callback` |                | { coords?: Coordinates, id: string, title?: string; }                                          |                                                   