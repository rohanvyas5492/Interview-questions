import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import PigEmoji from "./CSS/PigEmoji/PigEmoji";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <PigEmoji />
  </StrictMode>
);
