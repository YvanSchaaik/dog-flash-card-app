import {GET_PERCENTAGE, UPDATE_NAME} from '../actions/actions'
import {UPDATE_SCORE} from '../actions/gameOneActions'

const initialState = {
  name: 'Stranger',
  score: {
    correct: 0,
    wrong: 0
  },
  accuracy: 0
}

export default (state = initialState, action={}) => {
  switch (action.type){
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.payload
      }
    case GET_PERCENTAGE:
      return {
        ...state,
        accuracy: action.payload
      }
    default:
      console.log(state)
      return state
  }
}