import React from "react";
import Book from "./Book";
import { SearchShelfProps } from "./models/ComponentsProps";

const SearchShelf = ({ books }: SearchShelfProps) => {
  return (
    <>
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </>
  );
};

export default SearchShelf;
