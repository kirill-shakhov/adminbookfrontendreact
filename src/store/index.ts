// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@moduleAuth/store/index.ts';
import { authApi } from '@/services/api/controllers/authApi/index.ts';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
