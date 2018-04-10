import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {counterReducer} from './counter.reducer'

export default combineReducers({
  routing: routerReducer,
  counterReducer: counterReducer
})