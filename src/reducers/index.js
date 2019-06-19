
import { combineReducers } from 'redux'
import GameOne from './gameOneReducer'
import DogListReducer from './dogListReducer'
import dogImageReducer from './dogImageReducer'

export default combineReducers({
  GameOne,
  DogListReducer,
  dogImageReducer
})
