  import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import SignUpForm from "./CSS/SignUpForm/SignUpForm";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <SignUpForm />
  </StrictMode>
);
