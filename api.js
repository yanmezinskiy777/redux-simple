const axios = require("axios");
const {
  onFetchUserStart,
  onFetchUserSuccess,
  onFetchUserFail,
} = require("./actions/user");

const onFetchUsers = () => {
  return async function (dispatch) {
    try {
      dispatch(onFetchUserStart());
      const result = await axios.get("https://jsonplaceholder.typicode.com/users");
      const users = result.data.map((user) => user.name);
      dispatch(onFetchUserSuccess(users));
    } catch (error) {
      dispatch(onFetchUserFail(error));
    }
  };
};

module.exports.onFetchUsers = onFetchUsers;
