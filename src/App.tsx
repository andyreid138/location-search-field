import { useState } from 'react';
import LocationSearch from '../lib/components/LocationSearch';
import './App.css';
import { LocationSearchResponse, SearchTermChangeResponse } from '../lib/types';
import { Container, Divider, Typography, Box } from '@mui/material';

function App() {
  const [selectedLocation, setSelectedLocation] = useState<LocationSearchResponse>({ id: '' });
  const [selectedLocation2, setSelectedLocation2] = useState<LocationSearchResponse>({ id: '' });

  const handleAddressChange = ({ coords, id, title }: LocationSearchResponse) => {
    console.log('Address selected:', coords, id, title);
    setSelectedLocation({ id, coords, title });
  };

  const handleSearchTermChange = ({ searchTerm }: SearchTermChangeResponse) => {
    console.log('Search term change:', searchTerm);
  };


  const handleAddressChange2 = ({ coords, id, title }: LocationSearchResponse) => {
    console.log('Address selected:', coords, id, title);
    setSelectedLocation2({ id, coords, title });
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Location Search Field</Typography>
        <Typography variant="h6">Example 1</Typography>
        <ul>
          <li>Limited to just UK and France results</li>
          <li>Allows current location selection</li>
        </ul>
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1, mb: 2 }}>
          <LocationSearch
            id="address1"
            label="Search Address"
            handleLocationSelect={handleAddressChange}
            handleSearchTermChange={handleSearchTermChange}
            countryCodeLimit="UK,FRA"
            allowCurrentLocation={true}
            defaultId={selectedLocation.id}
            sx={{ width: '100%' }}
          />
        </Box>
        {selectedLocation.id && (
          <Box sx={{ p: 2, mt: 2, mb:2, border: '1px solid #ccc', borderRadius: 1, wordBreak: 'break-word' }}>
            <Typography><b>Currently Selected Item:</b></Typography>
            <Typography>Title: <i>{selectedLocation.title}</i></Typography>
            <Typography>Coords: <i>{selectedLocation.coords?.latitude}, {selectedLocation.coords?.longitude}</i></Typography>
            <Typography>ID: <i>{selectedLocation.id}</i></Typography>
          </Box>
        )}
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1, backgroundColor: '#f0f0f0', color: '#000', fontFamily: 'monospace', whiteSpace: 'pre-wrap', mb: 2 }}>
          {`<LocationSearch
  id="address1"
  label="Search Address"
  handleLocationSelect={handleAddressChange}
  countryCodeLimit="UK,FRA"
  allowCurrentLocation={true}
  defaultId={selectedLocation.id}
  sx={{ width: '100%' }}
/>

const handleAddressChange = ({ coords, id, title }: LocationSearchResponse) => {
  console.log('Address selected:', coords, id, title);
};

`}
        </Box>
        <Divider sx={{ mt: 4, mb: 4 }} />
        <Typography variant="h6">Example 2</Typography>
        <ul>
          <li>Not limited by country code</li>
          <li>Current location selection disabled</li>
        </ul>
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1, mb: 2 }}>
          <LocationSearch
            id="address2"
            label="Search for an Address"
            handleLocationSelect={handleAddressChange2}
            countryCodeLimit=""
            allowCurrentLocation={false}
            defaultId={selectedLocation2.id}
            sx={{ width: '100%' }}
          />
        </Box>
        {selectedLocation2.id && (
          <Box sx={{ p: 2, mt: 2, mb:2, border: '1px solid #ccc', borderRadius: 1, wordBreak: 'break-word' }}>
            <Typography><b>Currently Selected Item:</b></Typography>
            <Typography>Title: <i>{selectedLocation2.title}</i></Typography>
            <Typography>Coords: <i>{selectedLocation2.coords?.latitude}, {selectedLocation2.coords?.longitude}</i></Typography>
            <Typography>ID: <i>{selectedLocation2.id}</i></Typography>
          </Box>
        )}
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1, backgroundColor: '#f0f0f0', color: '#000', fontFamily: 'monospace', whiteSpace: 'pre-wrap', mb: 2 }}>
          {`<LocationSearch
  id="address2"
  label="Search for an Address"
  handleLocationSelect={handleAddressChange2}
  countryCodeLimit=""
  allowCurrentLocation={false}
  defaultId={selectedLocation2.id}
  sx={{ width: '100%' }}
/>

const handleAddressChange2 = ({ coords, id, title }: LocationSearchResponse) => {
  console.log('Address selected:', coords, id, title);
};
`}
        </Box>
      </Container>
    </>
  );
}

export default App;
