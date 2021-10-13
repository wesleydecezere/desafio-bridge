import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';

test('renders an input field, a table and a button', () => {
  render(<Home />);
  const inputEl = screen.getByRole('spinbutton');
  const tableEl = screen.getByRole('table');
  const buttonEl = screen.getByRole('button');
  expect(inputEl).toBeInTheDocument();
  expect(tableEl).toBeInTheDocument();
  expect(buttonEl).toBeInTheDocument();
});
test('when types an number into input and clicks on the button, adds a non empty row to the table', async () => {
  render(<Home />);
  const inputEl = screen.getByRole('spinbutton');
  const buttonEl = screen.getByRole('button');
  const emptyRowEl = screen.queryByRole('row', { name: 'Nenhum registro encontrado' });
  expect(emptyRowEl).toBeInTheDocument();

  fireEvent.input(inputEl, '999');
  fireEvent.click(buttonEl);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 3000);
  }).then(() => {
    expect(emptyRowEl).not.toBeInTheDocument();
  });
});
