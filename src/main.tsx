import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterContextProvider from "./pages/Router/RouterContextProvider";

import "./sass/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterContextProvider></RouterContextProvider>
  </StrictMode>,
);
