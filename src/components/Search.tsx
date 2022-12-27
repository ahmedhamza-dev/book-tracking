import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bookSearch } from "../redux/slices";
import SearchShelf from "./SearchShelf";

const Search = () => {
  const [search, setSearch] = useState("");
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch<any>();
  const { allBooks } = state;

  const searchHanlding = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  useEffect(
    () => {
      dispatch(bookSearch(search));
    },
    [search]
  );
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={searchHanlding}
            data-testid="search-input"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid" data-testid="books-grid">
          {allBooks.booksFromSearch && (
            <SearchShelf
              books={allBooks.booksFromSearch}
            />
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
