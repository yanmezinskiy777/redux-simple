const FETCH_USER_START = "FETCH_USER_START";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAIL = "FETCH_USER_FAIL";

const onFetchUserStart = () => {
  return {
    type: FETCH_USER_START,
  };
};

const onFetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

const onFetchUserFail = (error) => {
  return {
    type: FETCH_USER_FAIL,
    payload: error.message,
  };
};

module.exports = {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  onFetchUserStart,
  onFetchUserSuccess,
  onFetchUserFail,
};
