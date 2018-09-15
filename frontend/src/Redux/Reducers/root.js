import {combineReducers} from 'redux'
import authR from './authR'
import LoginPageR from './LoginPageR'

const rootReducer = combineReducers({
  authR,
  LoginPageR
})

export default rootReducer
