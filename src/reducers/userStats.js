import {GET_PERCENTAGE} from '../actions/actions'
import {UPDATE_SCORE} from '../actions/gameOneActions'

export default (state = {}, action={}) => {
  switch (action.type){
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.payload
      }
    case GET_PERCENTAGE:
      return {
        accuracy: action.payload
      }
    default:
      console.log(state)
      return state
  }
}