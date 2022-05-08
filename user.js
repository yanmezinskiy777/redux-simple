const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const thunk = require("redux-thunk").default;

const { userReducer } = require("./reducer/user");
const { onFetchUsers } = require("./api");

const store = createStore(userReducer, applyMiddleware(thunk));

store.subscribe(() => console.log("state", store.getState()));
store.dispatch(onFetchUsers());
