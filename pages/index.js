import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import Image from 'next/image'
import Head from 'next/head'

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: 47.5224897,
  lng: 19.0971414,
};

const path = [
  [19.0783098, 47.5134465],
  [19.0887781, 47.5039399],
  [19.0856724, 47.5067584],
  [19.0941675, 47.5130379],
  [19.0868070, 47.5181130],
  [19.0975359, 47.5106637],
].map(([lng, lat]) => ({ lng, lat }))

const options = {
  strokeColor: '#20412C',
  strokeOpacity: 0.8,
  strokeWeight: 8,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1
};

class Home extends Component {
  render() {
    return (
      <>
      <Head>
        <meta charSet="utf-8" />
        <title>Zuglói értéktérkép</title>
      </Head>
      <main>
      <Image width={1200/3} height={376/3} src="/hzka_logo.png" />
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker
            position={center}
          />
          <Polyline
            // onLoad={onLoad}
            path={path}
            options={options}
          />          
        </GoogleMap>
      </LoadScript>
      </main>
      </>
    )
  }
}

export default Home
