import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../auth/authApi"; 

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserListState {
  users: object;
  loading: boolean;
  error: string | null;
}

const initialState: UserListState = {
  users: [],
  loading: false,
  error: null,
};


export const getUsers = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
  const token = localStorage.getItem("token");
  const id=localStorage.getItem("id")
  if (!token) {
    return thunkAPI.rejectWithValue("No token found.");
  }
  const response = await fetchUsers(token,id); 
  return response.data as User[];
});




const userListSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong!";
      });
      
  },
});





export default userListSlice.reducer;


