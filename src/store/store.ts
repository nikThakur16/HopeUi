import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../reducers/auth/AuthSlice";
import UserSlice from "../reducers/user/index";
import TableDataSlice from "../reducers/table/TableDataSlice";
import SearchSlice from "../reducers/search/index";
export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    user: UserSlice,
    table:TableDataSlice,
    search:SearchSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
