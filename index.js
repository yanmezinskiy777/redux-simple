const bookReducer = require("./reducer/book");
const copyBookReducer = require("./reducer/copybook");
const bookAcions = require("./actions/book");
const copyBookAcions = require("./actions/copyBook");

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const rootReducer = combineReducers({
  book: bookReducer,
  copybook: copyBookReducer,
});
const store = createStore(rootReducer);

console.log("Init state", store.getState());
const unsubcribe = store.subscribe(() =>
  console.log("update store", store.getState())
);
store.dispatch(bookAcions.onBuyBook());
store.dispatch(bookAcions.onBuyBook());
store.dispatch(bookAcions.onBuyBook());
store.dispatch(copyBookAcions.onBuyCopyBook());
store.dispatch(copyBookAcions.onBuyCopyBook());
store.dispatch(copyBookAcions.onBuyCopyBook());
unsubcribe();
