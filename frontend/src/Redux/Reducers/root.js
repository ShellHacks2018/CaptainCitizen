import {combineReducers} from 'redux'
import authR from './authR'
import LoginPageR from './LoginPageR'
import FilterR from './FilterR'
import ImageR from './ImageR'
import MapItemR from './MapItemR'

const rootReducer = combineReducers({
  authR,
  LoginPageR,
  FilterR,
  ImageR,
  MapItemR
})

export default rootReducer
