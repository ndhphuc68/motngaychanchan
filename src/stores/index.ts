import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productStore from "@/stores/modules/product";
import authStore from "@/stores/modules/auth";

export const store = configureStore({
  reducer: {
    product: productStore,
    authUser: authStore,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
