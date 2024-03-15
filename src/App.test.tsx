import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";

test("renders reddit in sidebar navigation", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getAllByText(/todayilearned/i)).toHaveLength(2);
});
