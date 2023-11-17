import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IUser } from "../types/user";
import { APIUsersReturned } from "../types/apiUsersReturned";
import { APIEndpoint } from "../constants/api";

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (page: number | string | undefined = '') => {
    page = page && '?page=' + page;
    const response = await fetch(APIEndpoint.users + page);
    const data = await response.json() as APIUsersReturned;
    console.log('data: ', data);
    return data;
  }
);

interface UsersSlice {
  data: IUser[];
  meta: {
    isLoading: boolean;
    currentPage: number;
    totalPages: number;
  };
}

const initialState: UsersSlice = {
  data: [],
  meta: {
    isLoading: false,
    currentPage: 0,
    totalPages: 0
  }
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state, action) => {
      state.meta.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action: PayloadAction<APIUsersReturned>) => {
      state.data = action.payload.data;
      state.meta.isLoading = false;
      state.meta.currentPage = action.payload.page;
      state.meta.totalPages = action.payload.total_pages;
    });
  },
  reducers: {}
});

export const usersReducer = usersSlice.reducer;

export const selectUsersData = (state: RootState) => state.users.data;
export const selectUsersMeta = (state: RootState) => state.users.meta;