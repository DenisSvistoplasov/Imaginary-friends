import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IFriend } from "../types/friend";
import { friendsAPI } from "../firebase/api";

export const getFriends = createAsyncThunk(
  'users/getFriends',
  async () => {
    return await friendsAPI.getFriends();
  }
);

interface FriendsSlice {
  data: IFriend[];
  meta: {
    isLoading: boolean;
  };
}

const initialState: FriendsSlice = {
  data: [],
  meta: {
    isLoading: false,
  }
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  extraReducers(builder) {
    builder.addCase(getFriends.pending, (state, action) => {
      state.meta.isLoading = true;
    });
    builder.addCase(getFriends.fulfilled, (state, action: PayloadAction<IFriend[]>) => {
      state.data = action.payload;
      state.meta.isLoading = false;
    });
  },
  reducers: {
    addFriend(state, action: PayloadAction<IFriend>) {
      state.data.push(action.payload);
    }
  }
});

export const friendsReducer = friendsSlice.reducer;

export const { addFriend } = friendsSlice.actions;

export const selectFriendsData = (state: RootState) => state.friends.data;
export const selectFriendsMeta = (state: RootState) => state.friends.meta;