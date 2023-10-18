import { createSlice } from "@reduxjs/toolkit";

export const authStore = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {
    getTokenUser(state, action) {
      state.token = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {} = authStore.actions;

export default authStore.reducer;
