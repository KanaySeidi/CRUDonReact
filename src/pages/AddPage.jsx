import React from "react";
import { useState } from "react";

const AddPage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      author,
      title,
    };
    setAuthor("");
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="add author" />
        <input type="text" placeholder="add title" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddPage;
