
import { combineReducers } from 'redux'
import GameOne from './gameOneReducer'
import DogListReducer from './DogListReducer'
import DogImageReducer from './DogImageReducer'

export default combineReducers({
  GameOne,
  DogListReducer,
  DogImageReducer
})
