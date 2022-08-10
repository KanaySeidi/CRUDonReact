const initState = {
  books: [],
  booksToEdit: [],
};

const bookReducers = (state = initState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, books: action.payload };
    case "POST_BOOK":
      return { ...state, books: action.payload };
    case "GET_BOOK_TO_EDIT":
      return { ...state, booksToEdit: action.payload };
    case "SAVE_EDITED_BOOK":
      return { ...state, books: action.payload };
    case "DELETE_BOOK":
      return { ...state, books: action.payload };
    default:
      return state;
  }
};

export default bookReducers;
