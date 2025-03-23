import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RouterContextProvider from "./pages/Router/RouterContextProvider";
import ThemeContextProvider from "./store/ThemeContext";
import StoreProvider from "./store/store.tsx";

import { queryClient } from "./queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./sass/main.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <StoreProvider>
        <QueryClientProvider client={queryClient}>
          <RouterContextProvider></RouterContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </StoreProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
