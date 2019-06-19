import { combineReducers } from 'redux'
import GameOne from './gameOneReducer'
import DogListReducer from './dogListReducer'
import DogImageReducer from './dogImageReducer'

export default combineReducers({
  GameOne,
  DogListReducer,
  DogImageReducer
})