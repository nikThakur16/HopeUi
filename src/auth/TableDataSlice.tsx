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

    // Always load the latest data from local storage
    const existingData = JSON.parse(localStorage.getItem("userData") || "[]");
    if (existingData.length > 0) {
      return existingData; // Return existing data without fetching from API
    }

    // Fetch data from API if local storage is empty
    const response = await fetchUsersList();

    // Save fetched data to local storage
    localStorage.setItem("userData", JSON.stringify(response.data));
    localStorage.setItem("isDataFetched", "true"); // Set the flag

    return response.data;
  }
);

const TableDataSlice = createSlice({
  name: "TableData",
  initialState,
  reducers: {
    addUser(state, action) {
      state.TableData.push(action.payload); // Add the new user to the Redux state
      localStorage.setItem("userData", JSON.stringify(state.TableData)); // Update local storage
      localStorage.setItem("isDataFetched", "true"); // Ensure the flag remains set
    },
    editUser(state, action) {
      const index = state.TableData.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) {
        state.TableData[index] = action.payload;
        localStorage.setItem("userData", JSON.stringify(state.TableData));
      }
    },
    // deleteUser(state, action) {
    //   const updatedData = state.TableData.filter((u) => u.id !== action.payload);
    //   state.TableData = updatedData;
    //   localStorage.setItem("userData", JSON.stringify(updatedData));
    // },
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
