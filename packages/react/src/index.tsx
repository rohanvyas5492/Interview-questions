import { createRoot } from "react-dom/client";
import Navbar from "./CSS/Navbar/Navbar";
import React from "react";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Navbar />);
} else {
  console.error("Element with id 'root' not found in the DOM.");
}
