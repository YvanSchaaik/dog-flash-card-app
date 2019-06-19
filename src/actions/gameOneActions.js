import * as request from 'superagent'

export const ADD_DOG = 'ADD_DOG'
export const SET_DOGS = 'SET_DOGS'
export const IMAGE_GUESS = 'IMAGE_GUESS'

export function addDog(first, last){
  return {
    type: ADD_DOG,
    payload: {
      first: first,
      last: last
    }
  }
}

export function setDogs(breeds){
  return {
    type: SET_DOGS,
    payload: breeds
  }
}

export function getDogs(breed){
  return function (dispatch) {
    request(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => {
      dispatch(setDogs(response.body.message[0]))
    })
  }
}
