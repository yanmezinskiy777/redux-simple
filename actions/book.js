const BUY_BOOK = "BUY_BOOK";

const onBuyBook = () => {
  return {
    type: BUY_BOOK,
    info: "super book",
  };
};

module.exports.BUY_BOOK = BUY_BOOK;
module.exports.onBuyBook = onBuyBook;
