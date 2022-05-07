const book = require("../actions/book");

const initialState = {
  countOfBooks: 20,
};

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case book.BUY_BOOK:
      return {
        ...state,
        countOfBooks: state.countOfBooks - 1,
      };
    default:
      return state;
  }
}

module.exports = bookReducer;
