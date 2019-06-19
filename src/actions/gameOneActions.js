import * as request from 'superagent'

export const ADD_DOG = 'ADD_DOG'
export const SET_SOLUTION = 'SET_SOLUTION'
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

export function setSolution(image, breed){
  return {
    type: SET_SOLUTION,
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
      
      dispatch(setSolution(response.body.message[random_num], breed))
    })
  }
}
