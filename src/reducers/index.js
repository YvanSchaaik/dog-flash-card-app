
import { combineReducers } from 'redux'
import GameOne from './gameOneReducer'
import GameTwo from './gameTwoReducer'

import dogListReducer from './dogListReducer'
import dogImageReducer from './dogImageReducer'

export default combineReducers({
  GameOne,
  GameTwo,
  dogListReducer,
  dogImageReducer
})
