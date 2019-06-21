import GET_PERCENTAGE from '../actions/actions'

export default (state = {}, action={}) => {
  switch (action.type){
    case GET_PERCENTAGE:
      return {
        accuracy: action.payload
      }
    default:
      console.log(state)
      return state
  }
}