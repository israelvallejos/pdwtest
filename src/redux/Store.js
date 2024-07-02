import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from './AppointmentsSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
  },
});
