import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

test('renders an title and regular text', () => {
  render(<Header />);
  const titleEl = screen.getByRole('heading', { level: 1 });
  const bodyEl = screen.getByLabelText('description');

  expect(titleEl).toBeInTheDocument();
  expect(bodyEl).toBeInTheDocument();
});
