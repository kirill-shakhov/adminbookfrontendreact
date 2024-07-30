// authSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Notification} from "@modules/notifications/static/types";



interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

const NotificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action: PayloadAction<Notification>) {
      state.notifications.push(action.payload);
    },
    clearNotification(state, action: PayloadAction<{ index: number }>) {
      state.notifications = state.notifications.filter(
        (_, index) => index !== action.payload.index
      );
    },
    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const {
  setNotification,
  clearNotification,
  clearNotifications
} = NotificationSlice.actions;

export default NotificationSlice.reducer;
