// authSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthState, User} from "@moduleAuth/static/types";

const initialState: AuthState = {
  accessToken: '',
  user: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; }>
    ) => {
      state.accessToken = action.payload.accessToken;
    },
    clearCredentials: (state) => {
      state.accessToken = '';
      state.user = null;
    },
    setUser: (
      state,
      action: PayloadAction<{ user: User; }>
    ) => {
      state.user = action.payload.user;
    },
    clearUser: (state) => {
      state.user = null;
    }
  },
});

export const {
  setCredentials,
  clearCredentials,
  setUser,
  clearUser
} = authSlice.actions;

export default authSlice.reducer;
