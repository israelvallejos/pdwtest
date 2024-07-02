import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAppointments = createAsyncThunk(
  'appointments/fetchAppointments',
  async () => {
    const response = await fetch('http://localhost:3001/appointments');
    return response.json();
  }
);

export const addAppointment = createAsyncThunk(
  'appointments/addAppointment',
  async (appointment) => {
    const response = await fetch('http://localhost:3001/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });
    return response.json();
  }
);

export const editAppointment = createAsyncThunk(
  'appointments/editAppointment',
  async (appointment) => {
    const response = await fetch(`http://localhost:3001/appointments/${appointment.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    });
    return response.json();
  }
);

export const deleteAppointment = createAsyncThunk(
  'appointments/deleteAppointment',
  async (id) => {
    await fetch(`http://localhost:3001/appointments/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAppointments.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addAppointment.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(editAppointment.fulfilled, (state, action) => {
      const index = state.findIndex((appointment) => appointment.id === action.payload.id);
      state[index] = action.payload;
    });
    builder.addCase(deleteAppointment.fulfilled, (state, action) => {
      return state.filter((appointment) => appointment.id !== action.payload);
    });
  },
});

export default appointmentsSlice.reducer;
