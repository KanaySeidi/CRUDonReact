import axios from "axios";
const API_BOOK = "http://localhost:4000/books";

export const getBook = () => {
  return async (dispatch) => {
    try {
      const response = await axios(API_BOOK);
      dispatch({
        type: "GET_DATA",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addBook = (newBook) => {
  return async (dispacth) => {
    try {
      const response = await axios.post(API_BOOK, newBook);
      dispacth({
        type: "POST_BOOK",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getBookToEdit = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${API_BOOK}/${id}`);
      dispatch({
        type: "GET_BOOK_TO_EDIT",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const saveEditedBook = (bookEdit) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `${API_BOOK}/${bookEdit.id}`,
        bookEdit
      );
      dispatch({
        type: "SAVE_EDITED_BOOK",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteBook = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${API_BOOK}/${id}`);
      dispatch({
        type: "DELETE_BOOK",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
