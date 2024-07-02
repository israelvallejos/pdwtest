import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../src/redux/Store';
import AppointmentForm from './AppointmentForm';

test('renders appointment form', () => {
  render(
    <Provider store={store}>
      <AppointmentForm />
    </Provider>
  );
  const nameLabel = screen.getByText(/Nombre del Cliente/i);
  expect(nameLabel).toBeInTheDocument();

  const dateLabel = screen.getByText(/Fecha/i);
  expect(dateLabel).toBeInTheDocument();

  const timeLabel = screen.getByText(/Hora/i);
  expect(timeLabel).toBeInTheDocument();

  const descriptionLabel = screen.getByText(/Descripción/i);
  expect(descriptionLabel).toBeInTheDocument();
});

test('can submit the form', () => {
  render(
    <Provider store={store}>
      <AppointmentForm />
    </Provider>
  );

  const nameInput = screen.getByLabelText(/Nombre del Cliente/i);
  const dateInput = screen.getByLabelText(/Fecha/i);
  const timeInput = screen.getByLabelText(/Hora/i);
  const descriptionInput = screen.getByLabelText(/Descripción/i);
  const submitButton = screen.getByText(/Agregar Cita/i);

  fireEvent.change(nameInput, { target: { value: 'Juan' } });
  fireEvent.change(dateInput, { target: { value: '2024-07-01' } });
  fireEvent.change(timeInput, { target: { value: '12:00' } });
  fireEvent.change(descriptionInput, { target: { value: 'Appointment description' } });

  fireEvent.click(submitButton);

  // Add your assertion here
});
