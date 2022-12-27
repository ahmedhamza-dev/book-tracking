import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import { getAllBooks } from "../redux/slices";

const Home = () => {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch<any>();
  const { allBooks } = state;
  useEffect(
    () => {
      dispatch(getAllBooks());
    },
    [dispatch]
  );
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content" data-testid="books-content">
        <div>
          {allBooks.books && (
            <>
              <Shelf
                data-testid="currently-Reading"
                title="Currently Reading"
                category="currentlyReading"
                books={allBooks.books}
              />
              <Shelf
                data-testid="wantToRead"
                title="Want to Read"
                category="wantToRead"
                books={allBooks.books}
              />
              <Shelf
                data-testid="Read"
                title="Read"
                category="read"
                books={allBooks.books}
              />
            </>
          )}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" className="open-search-link">
          Add a Book
        </Link>
      </div>
    </div>
  );
};

export default Home;
