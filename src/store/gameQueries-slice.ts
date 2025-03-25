import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenreType = number;
export type PlatformType = number;
export type SortOrderType = string;
export type SearchQueryType = string;

export type GameQueriesTypes = {
  genreId?: GenreType;
  platformId?: PlatformType;
  sortOrder?: SortOrderType;
  searchQuery?: SearchQueryType;
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
    changeGenre: (state, action: PayloadAction<GenreType>) => {
      return { ...state, genreId: action.payload };
    },
    changePlatform: (state, action: PayloadAction<PlatformType>) => {
      return { ...state, platformId: action.payload };
    },
    changeSortOrder: (state, action: PayloadAction<SortOrderType>) => {
      return { ...state, sortOrder: action.payload };
    },
    changeSearchQuery: (_state, action: PayloadAction<SearchQueryType>) => {
      return { searchQuery: action.payload };
    },
  },
});

export const {
  changeGenre,
  changePlatform,
  changeSortOrder,
  changeSearchQuery,
} = gameQueriesSlice.actions;
