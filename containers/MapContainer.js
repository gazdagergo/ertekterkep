import MapBase from '../components/MapBase'
import Drawer from '../components/Drawer'
import Image from 'next/image'
import { useReducer } from 'react'
import { initialMapState, mapReducer } from './mapReducer'
import { DRAWER_CLOSE } from '../constants'

const MapContainer = () => {
  const [state, dispatch] = useReducer(mapReducer, initialMapState)

  const handleMapClick = action => {
    dispatch(action)
  }

  return (
    <>
      <MapBase onClick={handleMapClick} />
      <Drawer
        isVisible={state.isDrawerOpen}
        onClose={() => dispatch({ type: DRAWER_CLOSE })}
      >
        <div>
          <h4>Adományozó:</h4>
          <p>{state.letterDetails?.name}</p>
          <h4>Összeg:</h4>
          <p>{state.letterDetails?.amount}</p>
          <h4>Útvonal részletek:</h4>
          {state.letterDetails.trackImg  && (
            <Image width={300} height={450} src={state.letterDetails.trackImg} />
          )}
          {!state.letterDetails.trackImg  && (
            <p>A táv még nincs teljesítve </p>
          )}
        </div>
      </Drawer>
    </>
  )
}

export default MapContainer
