import React from "react";
import { useDispatch } from "react-redux";
import { shelfChange } from "../redux/slices";
import { BookProps } from "./models/ComponentsProps";

const Book = ({ book }: BookProps) => {
  const dispatch = useDispatch<any>();
  const updateShelf =  (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(shelfChange({ ...book, shelf: event.target.value }));
  };
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={updateShelf}
              value={book.shelf ? book.shelf : "none"}
              data-testid="select"
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title" data-testid="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors.map((auther: any, index: number) => (
            <span key={index}>
              {auther}
              {index !== book.authors.length - 1 ? <span>, </span> : ""}
            </span>
          ))}
        </div>
        <div className="book-authors">
          <strong data-testid="book-shelf">{book.shelf ? book.shelf : "none"}</strong>
        </div>
      </div>
    </li>
  );
};

export default Book;
