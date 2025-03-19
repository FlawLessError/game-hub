import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { gameQueriesSlice } from "./gameQueries-slice.ts";

export const store = configureStore({
  reducer: { gameQueries: gameQueriesSlice.reducer },
});

const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
