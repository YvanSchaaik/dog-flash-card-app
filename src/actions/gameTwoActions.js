import * as request from 'superagent'
export const SET_BREEDS = 'SET_BREEDS'
export const SET_RANDOMSOL = 'SET_RANDOMSOL'


export function setRandSol(data) {
  return {
    type: SET_RANDOMSOL,
    payload: {
      image: data,
    }
  }
}
export function setBreeds(breeds) {
  return {
    type: SET_BREEDS,
    payload: breeds
  }
}

function getList(dispatch) {
  return request('https://dog.ceo/api/breeds/list/all')
    .then(response => {
      const list = Object.keys(response.body.message)
      dispatch(setBreeds(list))
      return list
    })
}

//THIS WE NEED TO GET FROM GAME ONE, THIS IS COPY-PASTA
export function getBreeds() {
  return getList
}

export function getBreedsAndPickThree() {
  return function (dispatch) {
    const promise = getList(dispatch)

    promise
      .then(list => {
        const randomChoiceOne = Math.floor(Math.random() * list.length)
        let randomChoiceTwo = Math.floor(Math.random() * list.length)
        while (randomChoiceOne === randomChoiceTwo) {
          randomChoiceTwo = Math.floor(Math.random() * list.length)
        }
        let randomChoiceThree = Math.floor(Math.random() * list.length)
        while (randomChoiceOne === randomChoiceThree || randomChoiceThree === randomChoiceTwo) {
          randomChoiceThree = Math.floor(Math.random() * list.length)
        }

        const choiceOne = list[randomChoiceOne]
        const choiceTwo = list[randomChoiceTwo]
        const choiceThree = list[randomChoiceThree]
        return { choiceOne, choiceTwo,choiceThree}
      }
      )
      .then(choiceObj => {
        return request(`https://dog.ceo/api/breed/${choiceObj.choiceOne}/images`)
          .then(response => {
            const imageone = response.body.message[0]
            //console.log("choiceobj 91", choiceObj)
            return { ...choiceObj, imageone }
          })
      })
      .then(choiceOject => {
        return request(`https://dog.ceo/api/breed/${choiceOject.choiceTwo}/images`)
          .then(response => {
            const imagetwo = response.body.message[0]
            return { ...choiceOject, imagetwo }
          })
      })
      .then(choiceOject => {
        return request(`https://dog.ceo/api/breed/${choiceOject.choiceThree}/images`)
          .then(response => {
            const imagethree = response.body.message[0]
            return { ...choiceOject, imagethree }
          })
      })
      .then(dateObj => {
         return dateObj
      })
      .then(data => {
        dispatch(setRandSol(data))
        

      })
  }
}


