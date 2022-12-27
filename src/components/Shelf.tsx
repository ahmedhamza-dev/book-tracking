import React from "react";
import Book from "./Book";
import { ShelfProps } from "./models/ComponentsProps";

const Shelf = ({ title, category, books }: ShelfProps) => {
  const booksCategory = books.filter((book) => book.shelf === category);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title" data-testid="shelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid" data-testid="books-grid">
          {booksCategory.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;