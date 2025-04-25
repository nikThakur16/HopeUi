import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpApi, LoginApi, SignInCred, SignUpCred } from "./authApi";

interface AuthState {
  token: string | null;
  user: any;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  token: localStorage.getItem("token"),
  user: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "auth/login",
  async (creds: SignInCred, thunkAPI) => {
    try {
      const response = await LoginApi(creds);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message || "Login failed");
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (creds: SignUpCred, thunkAPI) => {
    try {
      const response = await SignUpApi(creds);
      localStorage.setItem("token", response.token);
      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue( "Registration failed");
    }
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = AuthSlice.actions;

export default AuthSlice.reducer;
