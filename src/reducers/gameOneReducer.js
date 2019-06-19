import {ADD_DOG, SET_DOGS} from '../actions/gameOneActions'


export default (state = [], action = {}) => {
  switch(action.type){
    case ADD_DOG:
      return [
        ...state,
        action.payload
      ]
    case SET_DOGS:
      return action.payload
  
    default:
      return state
  }
}