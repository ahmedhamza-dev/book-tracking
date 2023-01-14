import React from "react";
import Book from "./Book";
import { SearchShelfProps } from "./models/ComponentsProps";

const SearchShelf = ({ books }: SearchShelfProps) => {
  return (
    <>
      {books.length > 0 ? books.map((book) => (
        <Book book={book} key={book.id} />
      )) : null}
    </>
  );
};

export default SearchShelf;
