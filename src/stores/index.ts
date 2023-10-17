import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import productStore from "@/stores/modules/product";

export const store = configureStore({
  reducer: {
    product: productStore,
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
