import React from "react";
import Book from "./Book";
import { ShelfProps } from "./models/ComponentsProps";
import { Books, BooksGrid, BookShelf, ShelfTitle } from "./styled-components";

const Shelf = ({ title, category, books }: ShelfProps) => {
  const booksCategory = books.filter((book) => book.shelf === category);
  return (
    <BookShelf>
      <ShelfTitle data-testid="shelf-title">
        {title}
      </ShelfTitle>
      <Books>
        <BooksGrid data-testid="books-grid">
          {booksCategory.map((book) => (
            <Book book={book} key={book.id} />
          ))}
        </BooksGrid>
      </Books>
    </BookShelf>
  );
};

export default Shelf;
