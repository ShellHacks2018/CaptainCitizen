const LoginInitState = {
  username: '',
  password: '',
  authenticated: ''
}

function LoginPageReducer (state = LoginInitState, action) {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {...state, username: action.username}
    case 'GET_PASSWORD':
      return {...state, password: action.password}
    case 'USER_AUTHENTICATED':
      return {...state, authenticated: action.authenticated}
    default:
      return state
  }
}

export default LoginPageReducer
