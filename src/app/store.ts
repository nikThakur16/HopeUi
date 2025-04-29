import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../auth/AuthSlice";
import UserSlice from "../auth/userListSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
