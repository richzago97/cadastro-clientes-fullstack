import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import LoginClient from "../../components/forms/loginClient";
import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";

const mockedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }: any) => children,
  useNavigate: () => ({
    navigate: mockedNavigate,
  }),
}));

const apiMock = new MockAdapter(api);

describe("Post /login", () => {
  it("should be able to sign in", async () => {
    apiMock.onPost("/login").replyOnce(200, {});
    render(<LoginClient />);

    const emailField = screen.getByPlaceholderText("Email");
    const passwordField = screen.getByPlaceholderText("Password");

    const buttonElement = screen.getByText("Login");

    fireEvent.change(emailField, { target: { value: "email@example.com" } });
    fireEvent.change(passwordField, { target: { value: "1234" } });

    fireEvent.click(buttonElement);

    await waitFor(async () => {
      await expect(emailField).toHaveValue("email@example.com");
      await expect(passwordField).toHaveValue("1234");
      await expect(mockedNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });
});
