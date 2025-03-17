import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterContextProvider from "./pages/Router/RouterContextProvider";
import ThemeContextProvider from "./store/ThemeContext";
import StoreProvider from "./store/store.tsx";

import "./sass/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <StoreProvider>
        <RouterContextProvider></RouterContextProvider>
      </StoreProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
