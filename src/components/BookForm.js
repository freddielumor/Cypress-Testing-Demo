import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const hanldeSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    setTitle("");
    setAuthor("");
  };
  return (
    <form className="NewBookForm__form" onSubmit={hanldeSubmit}>
      <input
        type="text"
        placeholder="book title"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
        className="NewBookForm__book-title"
      />
      <input
        type="text"
        placeholder="book author"
        value={author}
        required
        onChange={(e) => setAuthor(e.target.value)}
        className="NewBookForm__book-author"
      />
      <input type="submit" value={"Add Book"} className="NewBookForm__submit" />
    </form>
  );
};

export default NewBookForm;
