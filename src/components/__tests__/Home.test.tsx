import React from "react";
import "@testing-library/jest-dom";
import Home from "../Home";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

afterEach(() => {
  cleanup();
});

it("Home components testing", () => {
  const homeComponent = (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Home />
          </Switch>
        </Router>
      </Provider>
    </>
  );
  const component = renderer.create(homeComponent);
  const { getByTestId, getByText } = render(homeComponent);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  const booksContent = getByTestId("books-content");
  expect(booksContent).toBeInTheDocument();

  const link = getByText("Add a Book");
  expect(window.location.pathname).toBe("/");
  fireEvent.click(link);
  expect(window.location.pathname).toBe("/search");
});
