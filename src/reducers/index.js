import {ADD_DOG_LIST} from '../actions/actions'

export default function reducer (state = [], action = {}) {
  switch (action.type) {
    case ADD_DOG_LIST:
      return action.payload
    default:
      console.log('Reducer function state info = ', state)
      return state
  }
}