import { useState } from 'react'
import LocationSearch from '../lib/components/LocationSearch'
import './App.css'
import { LocationSearchResponse } from '../lib/types'
import { Container, Typography } from '@mui/material'

function App() {

  const [selectedLocation, setSelectedLocation] = useState<LocationSearchResponse>( { id: '' } ); 

  const handleAddressChange = ({ coords, id, title} : LocationSearchResponse) => {

    console.log('address selected', coords, id, title)
    setSelectedLocation ( { id: id, coords: coords, title: title } );
    
  };

  return (
    <>
        <Container maxWidth="sm" sx={{ mt: 10 }}>
          
            <LocationSearch
              id="address"
              label="Search Address"
              handleLocationSelect={ handleAddressChange }
              countryCodeLimit = "USA"
              allowCurrentLocation = { true } 
              defaultId = { selectedLocation.id }
              sx={{ width: '100%' }}
            />

            {
              ( selectedLocation.id ?
              
                <Typography sx={{ p: 5, mt: 5, overflowWrap: 'break-word', border: '1px solid #ccc' }}>
                  <b>Currently Selected Item:</b><br /><br />
                  Title:<br /><i>{ selectedLocation.title } </i><br />
                  Coords:<br /><i>{ selectedLocation.coords?.latitude }, { selectedLocation.coords?.longitude }</i><br />
                  ID:<br /><i>{selectedLocation.id }</i>
                </Typography>
              : null )

            }
            

      </Container>


    </>
  )
}

export default App
