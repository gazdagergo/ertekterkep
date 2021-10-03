import React from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import { H_COORDS, LETTER_CLICK, Z_COORDS, MAP_CLICK } from '../../constants';
import toPoly from '../../functions/toPoly';

const containerStyle = {
  width: '100%',
  height: '800px'
}

const center = {
  lat: 47.5224897,
  lng: 19.0971414,
}

const options = {
  strokeColor: '#20412C',
  strokeOpacity: 0.8,
  strokeWeight: 8,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: true,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
}

const MapBase = ({ onClick }) => {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onClick={() => onClick({ type: MAP_CLICK })}
      >
{/*         <Marker
          position={center}
        /> */}
        <Polyline
          onMouseOut={e => console.log(e)}
          path={toPoly(H_COORDS)}
          options={options}
        />          
        <Polyline
          onClick={() => onClick({ type: LETTER_CLICK, payload: 'Z' })}
          path={toPoly(Z_COORDS)}
          options={options}
        />          
      </GoogleMap>
    </LoadScript>    
  )
}

export default MapBase
