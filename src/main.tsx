import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RouterContextProvider from "./pages/Router/RouterContextProvider";
import ThemeContextProvider from "./store/ThemeContext";
import StoreProvider from "./store/store.tsx";

import "./sass/main.scss";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <RouterContextProvider></RouterContextProvider>
        </QueryClientProvider>
      </StoreProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
