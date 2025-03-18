import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { genreSlice } from "./genre-slice.ts";
import { platformSlice } from "./platform-slice.ts";

export const store = configureStore({
  reducer: { genre: genreSlice.reducer, platform: platformSlice.reducer },
});

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
