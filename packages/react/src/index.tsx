import { createRoot } from "react-dom/client";
import React from "react";
import HolyGrail from "./HolyGrail/HolyGrail";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<HolyGrail/>);
} else {
  console.error("Element with id 'root' not found in the DOM.");
}
