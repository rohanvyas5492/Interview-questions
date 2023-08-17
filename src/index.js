import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import CustomModal from "./Custom-Modal/Custom-Modal";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CustomModal />
  </StrictMode>
);
