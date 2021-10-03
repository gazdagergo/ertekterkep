import { LETTER_CLICK, MAP_CLICK } from "../constants"

export const initialMapState = {
  isDrawerOpen: false
}

export const mapReducer = (state, { type, payload }) => {
  switch(type){
    case LETTER_CLICK: return {
      ...state,
      isDrawerOpen: !state.isDrawerOpen
    }

    case MAP_CLICK: return {
      ...state,
      isDrawerOpen: false
    }

    default: return state
  }
}

