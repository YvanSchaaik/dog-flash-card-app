import {ADD_DOG_LIST} from '../actions/actions'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_DOG_LIST:
      return action.payload
    default:
      return state
  }
}