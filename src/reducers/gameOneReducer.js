import {ADD_DOG, SET_SOLUTION} from '../actions/gameOneActions'


export default (state = [], action = {}) => {
  switch(action.type){
    case ADD_DOG:
      return [
        ...state,
        action.payload
      ]
    case SET_SOLUTION:
      return action.payload
  
    default:
      return state
  }
}