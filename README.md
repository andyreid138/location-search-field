# location-search-field

A lightweight React component for location search with address suggestions and current location detection.

## 📸 Screenshots

### Address Search Example
<p>
  <img width="100%" src="https://andyreid138.github.io/location-search-field/src/assets/screenshots/example-address.png" alt="Location Search Field - Address Example">
</p>

### Current Location Example
<p>
  <img width="100%" src="https://andyreid138.github.io/location-search-field/src/assets/screenshots/example-current-location.png" alt="Location Search Field - Current Location Example">
</p>

## 🚀 Quick Start

### Installation

Install via your preferred package manager:

```bash
npm install location-search-field
# or
yarn add location-search-field
# or
pnpm add location-search-field
```

### Basic Usage

```tsx
import { LocationSearch } from 'location-search-field';

<LocationSearch
  id="address"
  label="Search Address"
  handleLocationSelect={(coords, id, title) => console.log(coords, id, title)}
  countryCodeLimit="USA"
  allowCurrentLocation={true}
  defaultId="currentLocation"
  sx={{ width: '100%' }}
/>
```

## 📌 Features

- 🔍 **Real-time address suggestions** as the user types.
- 📍 **Current location selection** using browser geolocation (optional).
- 🌎 **Powered by [ESRI's ArcGIS Suggest API](https://developers.arcgis.com/rest/geocode/suggest/)**.
- ⚡ **Built with Vite, React, and Material-UI (MUI)** for seamless integration.

## 🛠 Examples

- [🔗 Live Demo](https://andyreid138.github.io/location-search-field/dist/index.html)

## 🔑 ArcGIS API Token Setup

To use this component, you'll need an ArcGIS API Token. Add it to a `.env` file at your project's root:

```
VITE_ARCGIS_API_TOKEN=YOUR_API_TOKEN_GOES_HERE
```

## 🎛 Props

| Prop Name            | Type       | Default     | Description                                                    |
|----------------------|------------|-------------|----------------------------------------------------------------|
| `id`                | `string`    | ``          | Field ID (optional).                                          |
| `label`             | `string`    | ``          | Label displayed in the input field.                           |
| `defaultId`         | `string`    | `''`        | ESRI magic key or `'currentLocation'` value.                 |
| `sx`                | `mui sx`    | `undefined` | Custom styling using MUI's `sx` prop.                         |
| `countryCodeLimit`  | `string`    | ``          | ESRI [country code](https://developers.arcgis.com/rest/geocode/suggest/#countrycode) limit (e.g., 'Mexico'). |
| `allowCurrentLocation` | `boolean`  | `true`      | Enables the option to select the user's current location.     |
| `handleLocationSelect` | `function` | `undefined` | Callback when a location is selected. Returns `{ coords, id, title }`. |
