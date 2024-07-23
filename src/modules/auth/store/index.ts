// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {AuthState, IUser} from "@moduleAuth/static/types";

const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string; user: IUser }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
    },
    clearCredentials: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
      state.user = null;
    }
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
