const copyBook = require("../actions/copyBook");

const initialState = {
  countOfCopyBooks: 20,
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case copyBook.BUY_COPY_BOOK:
      return {
        ...state,
        countOfCopyBooks: state.countOfCopyBooks - 1,
      };
    default:
      return state;
  }
}

module.exports = bookReducer;
