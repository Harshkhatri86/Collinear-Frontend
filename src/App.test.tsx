import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const AppId = screen.getByTestId("App-Id");
  expect(AppId).toBeInTheDocument();
});
