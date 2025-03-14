import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterContextProvider from "./pages/Router/RouterContextProvider";
import ThemeContextProvider from "./store/ThemeContext";

import "./sass/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterContextProvider></RouterContextProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
