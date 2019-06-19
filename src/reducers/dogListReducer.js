export default (state = [], action = {}) => {

  switch (action.type) {
    case "GET_BREEDS_LIST":
      console.log("Reducer called w. action breedslist ")
      return state
    default:
      return state
  }
}