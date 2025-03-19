import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenreType = number | null;
export type PlatformType = number | null;
export type SortOrderType = string;

export type GameQueriesTypes = {
  genreId: GenreType;
  platformId: PlatformType;
  sortOrder: SortOrderType;
};

const initialState: GameQueriesTypes = {
  genreId: null,
  platformId: null,
  sortOrder: "",
};

export const gameQueriesSlice = createSlice({
  name: "gameQueries",
  initialState,
  reducers: {
    changeGameQuery: (state, action: PayloadAction<GameQueriesTypes>) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { changeGameQuery } = gameQueriesSlice.actions;
