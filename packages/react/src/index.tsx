import { createRoot } from "react-dom/client";
import React from "react";
import StarRating from "./StarRating/StarRating";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<StarRating total={5} value={2}/>);
} else {
  console.error("Element with id 'root' not found in the DOM.");
}
