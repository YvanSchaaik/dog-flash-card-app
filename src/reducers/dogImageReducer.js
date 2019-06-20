export default (state = [], action = {}) => {
  switch (action.type) {

    case 'GET_DOGIMG':
      console.log("this red is called")
      return state;
    
    case 'ADD_DOG_IMG_LIST':
      //return [...state, ...action.payload.dogsImgs]
      //return [ ...action.payload.dogsImgs]
      //console.log("state",state)
      return ([ ...state] , [...action.payload.dogsImgs])
    
      default:
      return state;
  }
}