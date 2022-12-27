import React from "react";
import Book from "../Book";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import { BookData } from "../models/Data";
import { Provider } from "react-redux";
import store from "../../redux/store";

const book: BookData = {
  id: 1,
  title: "The Linux Command Line",
  authors: ["William E. Shotts, Jr."],
  imageLinks: {
    smallThumbnail:
      "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
  },
  shelf: "currentlyReading",
};

afterEach(() => {
  cleanup();
});

it("Book component test", () => {
  const bookComponent = (
    <>
      <Provider store={store}> 
        <Book book={book} />
      </Provider>
    </>
  );
  const component = renderer.create(bookComponent);
  const { getByTestId } = render(bookComponent);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const title = getByTestId("book-title").textContent;
  expect(title).toBe("The Linux Command Line");

  const shelf = getByTestId("book-shelf").textContent;
  expect(shelf).toBe("currentlyReading");
});
