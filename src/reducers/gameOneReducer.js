import {ADD_DOG, SET_SOLUTION, SET_BREEDS} from '../actions/gameOneActions'


export default (state = {}, action = {}) => {
  switch(action.type){
    case ADD_DOG:
      return [
        ...state,
        action.payload
      ]
    case SET_SOLUTION:
      return {
        ...state,
        solution: action.payload
      }

    case SET_BREEDS:
      return {
        ...state,
        breeds: action.payload
      }
  
    default:
      return state
  }
}