import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async () => {
    
//   }
// )

interface AuthSlice {
  data: {
    isAuth: boolean;
    login: string;
  };
  meta: {
    isLoading: boolean;
  }
}

const initialState: AuthSlice = {
  data: {
    isAuth: false,
    login: ''
  },
  meta: {
    isLoading:false,
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn(state, action: PayloadAction<string>) {
      state.data.isAuth = true;
      state.data.login = action.payload;
    },
    logOut(state,) {
      state.data.isAuth = false;
      state.data.login = '';
    },
  }
});

export const authReducer = authSlice.reducer;
export const { logIn, logOut } = authSlice.actions;

export const selectIsAuth = (state: RootState) => state.auth.data.isAuth;
export const selectLogin = (state: RootState) => state.auth.data.login;