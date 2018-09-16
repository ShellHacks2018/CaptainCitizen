import axios from 'axios'
import {reg_url, login_url} from '../../config.js'

const authA = (dispatch) => {
  
  return {
    register: (data) => {
      axios.post(reg_url, data).then( (response) => {
      }).catch((err) => {console.log(err); })
    },
    login: (data) => {
      axios.post(login_url, data).then(
        (res) => {
          console.log(res)
          localStorage.setItem('user', data.email)
          localStorage.setItem('token', res.data.id)
          localStorage.setItem('userId', res.data.userId)
          dispatch({type: 'LOGIN'} );
        }
      ).catch((err) => {console.log(err); })
    },
    logout: () => {
      localStorage.clear()
      dispatch({type: 'LOGOUT'})
    }
  }
}

export default authA;
