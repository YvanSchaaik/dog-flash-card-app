export default (state = [], action = {}) => {
  switch (action.type) {

    case 'GET_DOGIMG':
      return state;
    
    case 'ADD_DOG_IMG_LIST':
      return [...state, ...action.payload.dogsImgs]
    
      default:
      return state;
  }
}