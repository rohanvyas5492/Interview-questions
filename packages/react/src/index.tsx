import { createRoot } from "react-dom/client";
import React from "react";
import Tabs from "./Tabs/Tabs";
import { tabContent } from "./Tabs/tabContent";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Tabs currentIndex={0} tabContent={tabContent}/>);
} else {
  console.error("Element with id 'root' not found in the DOM.");
}
