import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SagaActions } from "../redux/sagaActions";
import SearchShelf from "./SearchShelf";
import {
  BooksBar,
  BooksGrid,
  Input,
  InputWrapper,
  Results,
} from "./styled-components";

const Search = () => {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch<any>();
  const { allBooks } = state;

  const searchHanlding = async (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: SagaActions.BOOK_SEARCH, payload: event.target.value });
  };
  useEffect(() => {
    dispatch({ type: SagaActions.BOOK_SEARCH, payload: "" });
  }, []);
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
      <Results>
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
