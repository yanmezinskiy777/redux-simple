const BUY_COPY_BOOK = "BUY_COPY_BOOK";

const onBuyCopyBook = () => {
  return {
    type: BUY_COPY_BOOK,
    info: "super book",
  };
};

module.exports.BUY_COPY_BOOK = BUY_COPY_BOOK;
module.exports.onBuyCopyBook = onBuyCopyBook;
