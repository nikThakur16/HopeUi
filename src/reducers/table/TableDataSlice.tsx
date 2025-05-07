import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsersList } from "../APIs";

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
  isAdding: boolean; // New state for add operation
}

const initialState: TableDataState = {
  TableData: [],
  loading: false,
  error: null,
  isAdding: false,
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

// export const getUsersList = createAsyncThunk(
//   'Table/tableData',
//   async (_, thunkAPI) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       return thunkAPI.rejectWithValue("No token found.");
//     }

//     const response = await fetchUsersList();
//     localStorage.setItem("userData", JSON.stringify(response.data)); // overwrite local copy
//     return response.data;
//   }
// );

// Async thunk to add user with delay
export const addUserWithDelay = createAsyncThunk(
  "Table/addUser",
  async (userData: TableData, thunkAPI) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get existing users
    const existingUsers = JSON.parse(localStorage.getItem("userData") || "[]");
    
    // Check for duplicate email
    const emailExists = existingUsers.some((user: TableData) => user.email === userData.email);
    if (emailExists) {
      throw new Error("Email already exists");
    }
    
    // Add new user
    const updatedUsers = [...existingUsers, userData];
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
    
    return userData;
  }
);

const TableDataSlice = createSlice({
  name: "TableData",
  initialState,
  reducers: {
    addUser(state, action) {
      // Check if email already exists
      const emailExists = state.TableData.some(user => user.email === action.payload.email);
      
      if (emailExists) {
        throw new Error("Email already exists");
      }
      

      state.TableData.push(action.payload); // Add the new user to the Redux state
      localStorage.setItem("userData", JSON.stringify(state.TableData)); // Update local storage
      localStorage.setItem("isDataFetched", "true"); // Ensure the flag remains set
    },
    editUser(state, action) {
      const index = state.TableData.findIndex(
        (u) => u.id === action.payload.id
      );
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
      })
      .addCase(addUserWithDelay.pending, (state) => {
        state.isAdding = true;
        state.error = null;
      })
      .addCase(addUserWithDelay.fulfilled, (state, action) => {
        state.isAdding = false;
        state.TableData.push(action.payload);
      })
      .addCase(addUserWithDelay.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.error.message || "Failed to add user";
      });
  },
});

export const { addUser, editUser, deleteUser, loadFromLocalStorage } =
  TableDataSlice.actions;

export default TableDataSlice.reducer;
