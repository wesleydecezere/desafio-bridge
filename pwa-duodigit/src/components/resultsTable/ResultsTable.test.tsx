import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResultsTable, RowType } from './ResultsTable';

test(('render an empty table with three columns'), () => {
  render(<ResultsTable data={[]} />);
  const tableEl = screen.getByRole('table');
  const emptyRowEl = screen.getByRole('row', { name: 'Nenhum registro encontrado' });
  const columnEls = screen.getAllByRole('columnheader');

  expect(tableEl).toBeInTheDocument();
  expect(emptyRowEl).toBeInTheDocument();
  expect(columnEls.length).toBe(3);
});
test(('should adds the data received by props to the table rows'), () => {
  const tableData: RowType[] = [{
    number: 999,
    duodigit: 9990,
    time: 3.5,
  }];

  render(<ResultsTable data={tableData} />);
  const tableNewRowEl = screen.getByRole('rrow', {
    name: `${tableData[0].number} ${tableData[0].duodigit} ${tableData[0].time}`,
  });
  expect(tableNewRowEl).toBeInTheDocument();
});
