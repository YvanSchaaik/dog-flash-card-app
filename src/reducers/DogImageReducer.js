export default (state = [], action = {}) => {
  console.log("reducer dogImageReducer" , state , "action: " , action)
  switch(action.type){
    
    case 'GET_DOGIMG':
      console.log("GET_DOGIMG is executed")
      return state;
      default:
        return state;


  }
}