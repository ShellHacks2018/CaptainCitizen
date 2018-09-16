import {combineReducers} from 'redux'
import authR from './authR'
import LoginPageR from './LoginPageR'
import FilterR from './FilterR'
import ImageR from './ImageR'

const rootReducer = combineReducers({
  authR,
  LoginPageR,
  FilterR,
  ImageR
})

export default rootReducer
