
import { combineReducers } from 'redux'
import GameOne from './gameOneReducer'
import dogListReducer from './dogListReducer'
import dogImageReducer from './dogImageReducer'

export default combineReducers({
  GameOne,
  dogListReducer,
  dogImageReducer
})
