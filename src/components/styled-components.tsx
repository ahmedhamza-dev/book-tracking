import styled from "styled-components";
import arrow from "../icons/arrow-drop-down.svg";
export const MainTitle = styled.h2`
  padding: 10px 0;
  background: #367b7d;
  text-align: center;
  font-weight: 400;
  margin: 0;
  color: white;
`;
export const ContentWrapper = styled.div`
  padding: 0 0 80px;
  flex: 1;
`;
export const OpenSearch = styled.div`
  position: fixed;
  right: 25px;
  bottom: 25px;
`;
export const BookShelf = styled.div`
  padding: 0 10px 20px;
  @media (min-width: 600px) {
    padding: 0 20px 40px;
  }
`;
export const ShelfTitle = styled.h2`
  border-bottom: 1px solid #dedede;
`;
export const Books = styled.div`
  text-align: center;
`;
export const BooksGrid = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const BookContainer = styled.li`
  padding: 10px 15px;
  text-align: left;
`;
export const BookItem = styled.div`
  width: 140px;
`;
export const BookTop = styled.div`
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
`;
export const BookCover = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: #eee;
`;
export const Changer = styled.div`
  position: absolute;
  right: 0;
  bottom: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #367b7d;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const BookSelector = styled.select`
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
export const BookSelectorItem = styled.option``;
export const BookTitle = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
`;
export const BookAuthor = styled.div`
  color: #999;
  font-size: 0.8em;
`;
export const BooksBar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
`;
export const InputWrapper = styled.div`
  flex: 1;
  background: #e9e;
`;
export const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  font-size: 1.25em;
  border: none;
  outline: none;
`;
export const Results = styled.div`
  padding: 80px 10px 20px;
`;
