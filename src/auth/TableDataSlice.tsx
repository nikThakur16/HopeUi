import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsersList } from "./authApi";

export interface TableData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface TableDataState {
  TableData: TableData[];
  loading: boolean;
  error: string | null;
}

const initialState: TableDataState = {
  TableData: [],
  loading: false,
  error: null,
};

// Async thunk to fetch users
export const getUsersList = createAsyncThunk(
  "Table/tableData",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token");
    if (!token) {
      return thunkAPI.rejectWithValue("No token found.");
    }

    const response = await fetchUsersList();

    const existing = JSON.parse(localStorage.getItem("userData") || "[]");
    const combined = [...existing, ...response.data.filter((apiUser: TableData) =>
      !existing.some((localUser: TableData) => localUser.id === apiUser.id)
    )];

    localStorage.setItem("userData", JSON.stringify(combined));
    return combined;
  }
);

const TableDataSlice = createSlice({
  name: "TableData",
  initialState,
  reducers: {
    addUser(state, action) {
      state.TableData.push(action.payload);
      localStorage.setItem("userData", JSON.stringify(state.TableData));
    },
    editUser(state, action) {
      const index = state.TableData.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.TableData[index] = action.payload;
        localStorage.setItem("userData", JSON.stringify(state.TableData));
      }
    },
    deleteUser(state, action) {
      state.TableData = state.TableData.filter((u) => u.id !== action.payload);
      localStorage.setItem("userData", JSON.stringify(state.TableData));
    },
    loadFromLocalStorage(state) {
      const users = localStorage.getItem("userData");
      if (users) {
        state.TableData = JSON.parse(users);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsersList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsersList.fulfilled, (state, action) => {
        state.loading = false;
        state.TableData = action.payload;
      })
      .addCase(getUsersList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong!";
      });
  },
});

export const { addUser, editUser, deleteUser, loadFromLocalStorage } =
  TableDataSlice.actions;

export default TableDataSlice.reducer;
