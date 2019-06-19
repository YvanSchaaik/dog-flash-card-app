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

export function setDogs(image, breed){
  return {
    type: SET_DOGS,
    payload: {
      image,
      breed
    }
  }
}

export function guessBreed(breed){
  return function (dispatch) {
    request(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => {
      const random_num = Math.floor((Math.random() * response.body.message.length))
      
      dispatch(setDogs(response.body.message[random_num], breed))
    })
  }
}
