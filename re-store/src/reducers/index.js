const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_LOADED":
      return {
        books: action.loaded,
      };
    default:
      return state;
  }
};
export default reducer;
