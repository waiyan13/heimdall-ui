import { Routes } from "@/config/routes";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router";

import App from "./App";
import Login from "./features/login/Login";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: `/${Routes.login}`,
    element: <Login />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/", `/${Routes.login}`],
  initialIndex: 0,
});

describe("App", () => {
  it("should show login button", () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should redirect to login screen", async () => {
    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    await user.click(screen.getByText("Login"));
    await screen.findByRole("button", { name: "Login" });
  });
});
