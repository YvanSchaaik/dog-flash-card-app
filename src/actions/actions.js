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

export function getDogs() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                const action = setDogs(Object.keys(response.body.message))
                return dispatch(action)
            })
    }
  }
export const ADD_DOG_LIST = 'ADD_DOG_LIST'