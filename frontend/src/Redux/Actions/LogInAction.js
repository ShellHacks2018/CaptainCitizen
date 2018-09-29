import axios from "axios";

export const updateUsername = text => ({
  type: "UPDATE_USERNAME",
  username: text
});

export const updatePassword = text => ({
  type: "UPDATE_PASSWORD",
  password: text
});

export const createAccount = data => {
  const url = "http://localhost:3001/api/Users";

  axios
    .post(url, data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};
