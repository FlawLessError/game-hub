import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenreType = number;
export type PlatformType = number;
export type SortOrderType = string;
export type SearchQueryType = string;

export type GameQueriesTypes = {
  genreId?: GenreType;
  platformId?: PlatformType;
  sortOrder: SortOrderType;
  searchQuery: SearchQueryType;
};

const initialState: GameQueriesTypes = {
  genreId: undefined,
  platformId: undefined,
  sortOrder: "",
  searchQuery: "",
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
