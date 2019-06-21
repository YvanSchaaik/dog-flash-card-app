import * as request from 'superagent'

export function setDogs(dogs) {
      //give something back
    return {
        type: ADD_DOG_LIST,
        payload: {
            dogs: dogs
        }
    }
}

export function setDogImage(dogs) {
    
  return {
      type: ADD_DOG_IMG_LIST,
      payload: {
          dogsImgs: dogs
      }
  }
}

export function getDogs() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const data = Object.keys(response.body.message)
                const capitalData = data.map(dog => dog.charAt(0).toUpperCase() + dog.slice(1) )
                const action = setDogs((capitalData))
                return dispatch(action)
            })
    }
  }
  export function getDogImages(link) {
    return function (dispatch) {
        request('https://dog.ceo/api/breed/' + link +  '/images')
            .then(response => {
                const action = setDogImage((response.body.message))
                return dispatch(action)
            })
    }
  }
  export function getTenDogImages(link) {
    return function (dispatch) {
        request('https://dog.ceo/api/breed/' + link +  '/images')
            .then(response => {
                const maxTenDogImgs = response.body.message.slice(0,10)
                const action = setDogImage(maxTenDogImgs)
                return dispatch(action)
            })
    }
  }

export function getPercentage(score) {
    const accuracy = Math.floor(score.correct/(score.wrong + score.correct) * 100)
    console.log('getPercentage action creator', accuracy)

    console.log('What is accuracy', accuracy)
 
    return {
        type: GET_PERCENTAGE,
        payload: !accuracy ? 0 : accuracy
    }
}

export const ADD_DOG_LIST = 'ADD_DOG_LIST'
export const GET_DOGIMG = 'GET_DOGIMG'
export const ADD_DOG_IMG_LIST = 'ADD_DOG_IMG_LIST'
export const GET_PERCENTAGE = 'GET_PERCENTAGE'