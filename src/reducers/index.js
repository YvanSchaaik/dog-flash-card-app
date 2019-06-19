
import { combineReducers } from 'redux'
import GameOne from './gameOneReducer'
import dogListReducer from './dogListReducer'
import DogImageReducer from './dogImageReducer'

export default combineReducers({
  GameOne,
  dogListReducer,
  DogImageReducer
})
