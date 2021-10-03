import MapBase from '../components/MapBase'
import Drawer from '../components/Drawer'
import { useReducer } from 'react'
import { initialMapState, mapReducer } from './mapReducer'

const MapContainer = () => {
  const [state, dispatch] = useReducer(mapReducer, initialMapState)

  const handleMapClick = action => {
    dispatch(action)
  }

  return (
    <>
      <MapBase onClick={handleMapClick} />
      <Drawer isVisible={state.isDrawerOpen} />    
    </>
  )
}

export default MapContainer
