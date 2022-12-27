import React from "react";
import "@testing-library/jest-dom";
import Search from "../Search";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

afterEach(() => {
  cleanup();
});

it("Search component test", () => {
  const searchComponent = (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Search />
          </Switch>
        </Router>
      </Provider>
    </>
  );

  const component = renderer.create(searchComponent);
  const { getByTestId, getByText } = render(searchComponent);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const link = getByText("Close");
  fireEvent.click(link);
  expect(window.location.pathname).toBe("/");

  const searchInput: any = getByTestId("search-input");
  expect(searchInput).toBeInTheDocument();
  fireEvent.change(searchInput, {
    target: { value: "Robitics" },
  });
  expect(searchInput.value).toEqual("Robitics");

  const booksGrid = getByTestId("books-grid");
  expect(booksGrid).toBeInTheDocument();
});
