import { LoginPrompts } from "@/config/login";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "./Login";

describe("Login", () => {
  it("should show email and password fields", () => {
    render(<Login />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
  });

  it("should show error messages", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.type(screen.getByLabelText("Email"), "user");
    await user.type(screen.getByLabelText("Password"), "pass");
    await user.click(screen.getByRole("button", { name: "Login" }));

    await screen.findByText(LoginPrompts.email);
    await screen.findByText(LoginPrompts.password);
  });
});
