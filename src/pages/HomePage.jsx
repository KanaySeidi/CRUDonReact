import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const API_BOOK = "http://localhost:4000/books";

const HomePage = () => {
  const [result, setResult] = useState([]);
  const getBook = async () => {
    try {
      const response = await axios(API_BOOK);
      setResult(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  //   const addBooks = async () => {};

  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/add">
        <button>Add Page</button>
      </Link>
      <ul>
        {result.map((item) => {
          return (
            <li key={item.id}>
              Author: {item.author} <br />
              Title: {item.title} <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomePage;
