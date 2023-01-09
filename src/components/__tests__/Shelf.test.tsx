import React from "react";
import "@testing-library/jest-dom";
import Shelf from "../Shelf";
import renderer from "react-test-renderer";
import { cleanup, render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

export const books = [
  {
    id: 1,
    title: "The Linux Command Line",
    authors: ["William E. Shotts, Jr."],
    imageLinks: {
      smallThumbnail:
        "http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    },
    shelf: "currentlyReading",
  },
];
afterEach(() => {
  cleanup();
});

it("Shlef components testing", () => {
  const shelf = (
    <>
      <Provider store={store}>
        <Shelf
          books={books}
          title="Currently Reading"
          category="currentlyReading"
        />
      </Provider>
    </>
  );
  const component = renderer.create(shelf);
  const { getByTestId } = render(shelf);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const title = getByTestId("shelf-title").textContent;
  expect(title).toBe("Currently Reading"); 

  const grid = getByTestId("books-grid");
  expect(grid).toBeInTheDocument();
});
