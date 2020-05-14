import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  return (
    <nav className="navbar">
      <h1>React Reading List</h1>
      <p>Currently you have {books.length} books to read...</p>
    </nav>
  );
};

export default Navbar;
