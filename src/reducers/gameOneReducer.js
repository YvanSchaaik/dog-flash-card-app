import {ADD_DOG} from '../actions/gameOneActions'
import {SET_DOGS} from '../actions/gameOneActions'

export default (state = [], action = {}) => {
  switch(action.type){
    case ADD_DOG:
      return [
        ...state,
        action.payload
      ]
    case SET_DOGS:
      return state
  
    default:
      return state
  }
  return state
}