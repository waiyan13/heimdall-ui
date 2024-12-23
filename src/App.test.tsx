import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("should show login button", () => {
    render(<App />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
