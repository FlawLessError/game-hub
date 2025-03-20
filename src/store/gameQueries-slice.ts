import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenreType = { id: number; name: string } | null;
export type PlatformType = {
  id: number;
  name: string;
} | null;
export type SortOrderType = string;
export type SearchQueryType = string;

export type GameQueriesTypes = {
  genre: GenreType;
  platform: PlatformType;
  sortOrder: SortOrderType;
  searchQuery: SearchQueryType;
};

const initialState: GameQueriesTypes = {
  genre: null,
  platform: null,
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
