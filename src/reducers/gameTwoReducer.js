import {  SET_BREEDS, SET_RANDOMSOL } from '../actions/gameTwoActions'

export default (state = {}, action = {}) => {
  switch (action.type) {
    
    case SET_RANDOMSOL:
      return {
        ...state,
        random1: {
          image: action.payload.image.imageone,
          breed: action.payload.image.choiceOne
        },
        random2: {
          image: action.payload.image.imagetwo,
          breed: action.payload.image.choiceOn
        },
        solution: {
          image: action.payload.image.imagethree,
          breed: action.payload.image.choiceThree
        }
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