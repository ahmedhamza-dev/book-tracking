import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SagaActions } from "../redux/sagaActions";
// import { getBooks } from "../redux/slices";
import Shelf from "./Shelf";
import { ContentWrapper, MainTitle, OpenSearch } from "./styled-components";

const Home = () => {
  const state: any = useSelector((state) => state);
  const dispatch = useDispatch<any>();
  const { allBooks } = state;
  useEffect(
    () => {
      dispatch({ type: SagaActions.FETCH_ALL_BOOKS });
    },
    [dispatch]
  );
  return (
    <>
      <MainTitle>MyReads</MainTitle>
      <ContentWrapper id="books-content">
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
      </ContentWrapper>
      <OpenSearch>
        <Link to="/search" className="open-search-link">
          Add a Book
        </Link>
      </OpenSearch>
    </>
  );
};

export default Home;
