
export function helloWorld(){
  return {
    type: 'Hello ACTIONS',
    payload: {
      first: 'Action',
      last: 'GOOD'
    }
  }
}