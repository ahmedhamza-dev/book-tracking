import React from "react";
import { useDispatch } from "react-redux";
import { shelfChange } from "../redux/slices";
import { BookProps } from "./models/ComponentsProps";
import { BookAuthor, BookContainer, BookCover, BookItem, BookSelector, BookSelectorItem, BookTitle, BookTop, Changer } from "./styled-components";

const Book = ({ book }: BookProps) => {
  const dispatch = useDispatch<any>();
  const updateShelf =  (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(shelfChange({ ...book, shelf: event.target.value }));
  };
  return (
    <BookContainer>
      <BookItem id="book">
        <BookTop>
          <BookCover
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          />
          <Changer id="changer">
            <BookSelector
              onChange={updateShelf}
              value={book.shelf ? book.shelf : "none"}
              id="select"
            >
              <BookSelectorItem value="move" disabled>
                Move to...
              </BookSelectorItem>
              <BookSelectorItem value="currentlyReading">Currently Reading</BookSelectorItem>
              <BookSelectorItem value="wantToRead">Want to Read</BookSelectorItem>
              <BookSelectorItem value="read">Read</BookSelectorItem>
              <BookSelectorItem value="none">None</BookSelectorItem>
            </BookSelector>
          </Changer>
        </BookTop>
        <BookTitle id="book-title">{book.title}</BookTitle>
        <BookAuthor className="book-authors">
          {book.authors.map((auther: any, index: number) => (
            <span key={index}>
              {auther}
              {index !== book.authors.length - 1 ? <span>, </span> : ""}
            </span>
          ))}
        </BookAuthor>
        <BookAuthor className="book-authors">
          <strong data-testid="book-shelf">{book.shelf ? book.shelf : "none"}</strong>
        </BookAuthor>
      </BookItem>
    </BookContainer>
  );
};

export default Book;
