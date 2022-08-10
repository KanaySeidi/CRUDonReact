import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBook } from "../redux/actions/bookAction";

const ReduxPage = () => {
  const dispatch = useDispatch();
  const { books, bookToEdit } = useSelector((state) => state.BookReducers);

  console.log(books);
  console.log(bookToEdit);

  //   useEffect(() => {
  //     dispatch(getBook());
  //   }, []);

  if (!books) {
    return <h3>Loading ...</h3>;
  }

  if (!bookToEdit) {
    return <h3>Loading ...</h3>;
  }
  return (
    <div>
      <h2>Redux PAge</h2>
      <ol>
        {books.map((item) => (
          <li key={item.id}>{item.author}</li>
        ))}
      </ol>
    </div>
  );
};

export default ReduxPage;
