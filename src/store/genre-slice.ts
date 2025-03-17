import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenreType = number | null;

type initialStateTypes = {
  genreId: GenreType;
};
const initialState: initialStateTypes = {
  genreId: null,
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<GenreType>) => {
      state.genreId = action.payload;
    },
  },
});

export const { changeGenre } = genreSlice.actions;
