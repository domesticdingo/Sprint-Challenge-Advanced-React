import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import expectExport from 'expect';

afterEach(cleanup);

test ("App renders without crashing", () => {
  render(<App />);
});

test("Renders with dark mode button", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("toggle-theme-btn")).toBeInTheDocument();
});