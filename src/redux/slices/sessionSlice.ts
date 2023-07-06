import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: {},
  reducers: {
    hydrateSessionAction: (_, action: PayloadAction<any>) => {
      return action.payload;
    },
    setAllKeysAction: (
      state: any,
      action: PayloadAction<{ [k: string]: any }>
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    clearAction: () => {
      return {};
    },
    setKeyAction: (
      state: any,
      action: PayloadAction<{ key: string; value: any }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
  },
});

export const {
  hydrateSessionAction,
  setKeyAction,
  clearAction,
  setAllKeysAction,
} = sessionSlice.actions;

export default sessionSlice.reducer;
