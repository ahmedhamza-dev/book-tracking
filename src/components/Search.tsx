import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { bookSearch } from "../redux/slices";
import SearchShelf from "./SearchShelf";
import { BooksBar, BooksGrid, Input, InputWrapper, Results } from "./styled-components";

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
    <>
      <BooksBar id="search-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <InputWrapper>
          <Input
            type="text"
            placeholder="Search by title or author"
            onChange={searchHanlding}
            id="search-input"
          />
        </InputWrapper>
      </BooksBar>
      <Results >
        <BooksGrid data-testid="books-grid">
          {allBooks.booksFromSearch && (
            <SearchShelf books={allBooks.booksFromSearch} />
          )}
        </BooksGrid>
      </Results>
    </>
  );
};

export default Search;
