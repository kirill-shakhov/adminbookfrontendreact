// store.ts
import {configureStore} from '@reduxjs/toolkit';
import authReducer from '@moduleAuth/store/index.ts';
import bookReducer from '@/modules/book/store/index.ts';
import {authApi} from '@/services/api/controllers/authApi/index.ts';
import {profileApi} from "@/services/api/controllers/profileApi";
import {bookApi} from "@/services/api/controllers/bookApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    book: bookReducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      profileApi.middleware,
      bookApi.middleware
    )
  ,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
