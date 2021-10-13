import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TimeExceededModal } from './TimeExceededModal';

test('renders an open modal when passes show prop as true', () => {
  render(<TimeExceededModal />);
  const modalEl = screen.getByRole('dialog');
  expect(modalEl).toBeInTheDocument();
});

test('closes the modal when clicks on its close button', () => {
  render(<TimeExceededModal />);
  const modalEl = screen.getByRole('dialog');
  const closeBtnEl = screen.getByRole('button', { name: 'Close' });
  fireEvent.click(closeBtnEl);

  expect(modalEl).not.toBeInTheDocument();
});
