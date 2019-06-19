export const ADD_DOG = 'ADD_DOG'
export const SET_DOGS = 'SET_DOGS'

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

