import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/Store';
import AppointmentList from './AppointmentList';

test('renders appointment list', () => {
  render(
    <Provider store={store}>
      <AppointmentList />
    </Provider>
  );
  const titleElement = screen.getByText(/Lista de Citas/i);
  expect(titleElement).toBeInTheDocument();
});
