import { LETTER_CLICK, MAP_CLICK, DRAWER_CLOSE } from "../constants"
import letterDetails from '../data/letterDetails.json'

export const initialMapState = {
  isDrawerOpen: false,
  letterDetails: {}
}

export const mapReducer = (state, { type, payload }) => {
  console.log({ payload })
  switch(type){
    case LETTER_CLICK: return {
      ...state,
      isDrawerOpen: !state.isDrawerOpen,
      letterDetails: letterDetails.find(({ id }) => id === payload)
    }

    case MAP_CLICK: return {
      ...state,
      isDrawerOpen: false
    }

    case DRAWER_CLOSE: return {
      ...state,
      isDrawerOpen: false
    }

    default: return state
  }
}

