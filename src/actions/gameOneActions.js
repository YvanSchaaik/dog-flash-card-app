import * as request from 'superagent'

export const ADD_DOG = 'ADD_DOG'
export const SET_SOLUTION = 'SET_SOLUTION'
export const IMAGE_GUESS = 'IMAGE_GUESS'
export const SET_BREEDS = 'SET_BREEDS'

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

function getList (dispatch) {
  return request('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      const list = Object.keys(response.body.message)
      dispatch(setBreeds(list))

      return list
    })
}

//This might be duplicated with some other action that we are doing on the other reducers/actions
//Get all the breeds
export function getBreeds(){
  return getList
}

export function getBreedsAndPickOne () {
  return function (dispatch) {
    const promise = getList(dispatch)

    promise
      .then(list => {
        const random_choice = Math.floor(Math.random() * list.length)
        const choice = list[random_choice]
        return request(`https://dog.ceo/api/breed/${choice}/images`)
          .then(response => {
            return { response, choice}
          })
      })
      .then(data => {
        const image = data.response.body.message[0]
        dispatch(setSolution(image, data.choice))

      })
  }
}

export function setBreeds(breeds){
  return {
    type: SET_BREEDS,
    payload: breeds
  }
}
