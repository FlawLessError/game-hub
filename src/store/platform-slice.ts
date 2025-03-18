import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PlatformType = number | null;

type InitialStateType = {
  platformId: PlatformType;
};

const initialState: InitialStateType = {
  platformId: null,
};

export const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    changePlatform: (state, action: PayloadAction<PlatformType>) => {
      state.platformId = action.payload;
    },
  },
});

export const { changePlatform } = platformSlice.actions;
