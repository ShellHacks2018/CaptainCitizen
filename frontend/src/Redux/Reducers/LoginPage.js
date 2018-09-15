const LoginInitState = {
  username: '',
  password: '',
  authenticated: ''
}

function LoginPageReducer (state = LoginInitState, action) {
  switch (action.type) {
    case 'GET_USERNAME':
      return {
        ...state,
        username: action.val
      }
    case 'GET_PASSWORD':
      return {
        ...state,
        password: action.val
      }
    case 'USER_AUTHENTICATED':
      return {
        ...state,
        authenticated: ''
      }
    default:
      return state
  }
}

export default LoginPageReducer
