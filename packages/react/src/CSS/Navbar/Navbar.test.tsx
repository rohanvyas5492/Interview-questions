import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders a list of navigation items", () => {
  const { getByText } = render(<Navbar />);
  
  expect(getByText("Products")).toBeInTheDocument();
  expect(getByText("Testimonials")).toBeInTheDocument();
  expect(getByText("Pricing")).toBeInTheDocument();
  expect(getByText("Team")).toBeInTheDocument();
  expect(getByText("Contact Us")).toBeInTheDocument();
});

test("renders additional content when provided as children", () => {
  const { getByText } = render(
    <Navbar>
      <div data-testid="additional-content">Additional Content</div>
    </Navbar>
  );
  
  expect(getByText("Additional Content")).toBeInTheDocument();
});
