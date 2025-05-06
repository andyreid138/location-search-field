import { useCallback, useEffect, useRef, useState } from 'react';
import { Coordinates, TypeaheadOption, ApiFindAddressResponseProps, LocationSearchParams, ApiSuggestResponseProps } from '../types';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import NearMeIcon from '@mui/icons-material/NearMe';
import { debounce } from 'lodash';

const LocationSearch = ( { id, handleLocationSelect, handleSearchTermChange, label, defaultId, sx, countryCodeLimit, allowCurrentLocation = true }: LocationSearchParams ) => {

  const userLocation = useRef('');

  const arcgisApiToken = import.meta.env.VITE_ARCGIS_API_TOKEN || "";

  const currentLocationOpt:TypeaheadOption = { label: 'Current Location', id: 'currentLocation' };  

  const [options, setOptions] = useState<TypeaheadOption[]>( ( allowCurrentLocation ? [currentLocationOpt] : [] ) ); 
  const [selectedItem, setSelectedItem] = useState<TypeaheadOption|null>();  

  const getSuggestions = useCallback(debounce((_event:any, searchTerm:string) => {

    if(handleSearchTermChange) handleSearchTermChange({ searchTerm: searchTerm });

    if( searchTerm.length < 1 || searchTerm == 'Current Location' ){

      setOptions( ( allowCurrentLocation ? [currentLocationOpt] : [] ) );
  
    }else{
    
        const controller = new AbortController();
  
        const params = {
          text: searchTerm,
          location: userLocation.current,
          countryCode: countryCodeLimit,
          maxSuggestions: '5',
          f: 'json',
          token: arcgisApiToken || ''
        } 
  
        fetch("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?" + ( new URLSearchParams( params ) ).toString(), {
          method: 'GET',
          signal: controller.signal
        })    
        .then(response => response.json())
        .then(data => {
          setOptions(data.suggestions.map((item: ApiSuggestResponseProps) => {
            return { label: item.text, id: item.magicKey};
          }));
      
        })
        .catch(error => {
          console.log('error calling /suggest', error);
        });
      
        return () => controller.abort();

    }
          
  }, 300), []);

  const getLocationDetails = useCallback(( locationId:string, callBack:( coords:ApiFindAddressResponseProps ) => void ) => { 

    const controller = new AbortController();
  
    const params = {
      magicKey: locationId,
      f: 'json',
      token: arcgisApiToken || ''
    } 
  
    fetch("https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?" + ( new URLSearchParams( params ) ).toString(), {
      method: 'GET',
      signal: controller.signal
    })    
    .then(response => response.json())
    .then(data => {
      callBack( { latitude: data.candidates[0].location.y, longitude: data.candidates[0].location.x, title: data.candidates[0].address } );
    })
    .catch(error => {
      console.log('error calling /findAddressCandidates', error);
    });
  
    return () => controller.abort();
  
  } , []);

  const getUserLocation = ( callBack:( coords: Coordinates) => void ) => { 

    if(navigator.geolocation) {
  
      navigator.geolocation.getCurrentPosition(
        (position) => {
          callBack( { latitude: position.coords.latitude.toString(), longitude: position.coords.longitude.toString() } );
        },
        () => {
          callBack( {} );//user denied location
        }
  
      );
  
    }

  }

  const getModifiedOptionLabel = ( option: TypeaheadOption ) => { 
  
    if( option.id == 'currentLocation'){
      return ( 
        <>
          <NearMeIcon sx={{ pr: .5 }}/>  { option.label }
        </>
      );
    }else{
      return option.label;
    }

  }

  useEffect(() => {

    // runs when user selects a location

    if(!selectedItem) {

      setOptions( ( allowCurrentLocation ? [currentLocationOpt] : [] ) );

      handleLocationSelect( { coords: {}, id: '', title: '' } );

    }else{

      const selectedText = selectedItem.label;
      const selectedMagicKey = selectedItem.id;
  
      if( selectedMagicKey == 'currentLocation' ){
  
        if(userLocation.current.length){

          handleLocationSelect( { coords: { latitude: userLocation.current.split(',')[0], longitude: userLocation.current.split(',')[1] }, id: selectedMagicKey, title: 'Current Location' } );
  
        }else{
  
          getUserLocation( ( coords:Coordinates ) => {
  
            if( coords.latitude && coords.longitude ){
  
              userLocation.current = coords.latitude.toString() + ',' + coords.longitude.toString();
              handleLocationSelect( { coords: { latitude: coords.latitude, longitude: coords.longitude }, id: selectedMagicKey, title: 'Current Location' } );
  
            }else{

              handleLocationSelect(  { coords: {}, id: '', title: '' } );
  
            }
  
          });
        }
  
      }else{
  
        if( selectedText && selectedMagicKey){
  
          getLocationDetails( selectedMagicKey, ( coords:ApiFindAddressResponseProps ) =>{
    
            if( coords.latitude && coords.longitude ){

              handleLocationSelect( { coords: { latitude: coords.latitude, longitude: coords.longitude }, id: selectedMagicKey, title: coords.title } );

            }else{
              console.log( 'error finding location data');
              handleLocationSelect( { coords: {}, id: '', title: '' } );
            }
            
          });
  
        }else{
          handleLocationSelect( { coords: {}, id: '', title: '' } );
        }
  
      }

    }
    
  }, [selectedItem]);  

  useEffect(() => {

    //fills in initial details

    if( 
      !selectedItem?.id 
      && defaultId.length > 0 
    ){

      if( !options.find(opt => opt.id == defaultId) ){

        getLocationDetails( defaultId, ( coords:ApiFindAddressResponseProps ) =>{
        
          if( coords.latitude && coords.longitude ){

            setSelectedItem( { label: coords.title, id: defaultId } )
          }else{

            console.log( 'could not find location data');
            setSelectedItem( null );

          }
        
        });

      }else{

        setSelectedItem( options.find(opt => opt.id == defaultId) );

      }
    }

  }, [defaultId]);  

  return (
    <Autocomplete 
      id = { id }
      onChange = { ( _event, value ) => setSelectedItem( ( value && typeof value !== 'string' ? { label: value.label, id: value.id } : null )) }
      sx = { sx }
      filterOptions = {(x) => x}
      renderOption = {({ key, ...props }, option: TypeaheadOption) => (
        <li key={key} {...props}>{ getModifiedOptionLabel( option )}</li>
      )}
      disablePortal
      fullWidth
      freeSolo
      selectOnFocus
      value = { selectedItem || null }
      onInputChange = { getSuggestions }
      getOptionLabel = {(option) => typeof option === "string" ? option : option.label}
      options = {options}
      renderInput = {(params) => <TextField {...params} label={label} />}
    />
  );

}

export default LocationSearch;