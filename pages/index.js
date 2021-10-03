import React, { Component } from 'react'
import Layout from '../components/Layout'
import MapContainer from '../containers/MapContainer'
class Home extends Component {
  render() {
    return (
      <Layout>
        <MapContainer />
      </Layout>
    )
  }
}

export default Home
