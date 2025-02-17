import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/redux/Store';
import App from './App';

test('renders appointment list', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const titleElement = screen.getByText(/Lista de Citas/i);
  expect(titleElement).toBeInTheDocument();
});
