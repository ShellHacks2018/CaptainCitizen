import axios from "axios";
// import {reg_url, login_url} from '../../config.js'

const authA = dispatch => {
  return {
    register: data => {
      axios
        .post(process.env.REACT_APP_REG_URL, data)
        .then(response => {})
        .catch(err => {
          console.log(err);
        });
    },
    login: data => {
      axios
        .post(process.env.REACT_APP_LOGIN_URL, data)
        .then(res => {
          localStorage.setItem("user", data.email);
          localStorage.setItem("token", res.data.id);
          localStorage.setItem("userId", res.data.userId);
          dispatch({ type: "LOGIN" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    logout: () => {
      localStorage.clear();
      dispatch({ type: "LOGOUT" });
    }
  };
};

export default authA;
