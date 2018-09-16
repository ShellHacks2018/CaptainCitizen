import {combineReducers} from 'redux'
import authR from './authR'
import LoginPageR from './LoginPageR'
import FilterR from './FilterR'

const rootReducer = combineReducers({
  authR,
  LoginPageR,
  FilterR
})

export default rootReducer
