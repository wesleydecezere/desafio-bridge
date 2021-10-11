import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ResultsTable, RowType, compareRows } from './ResultsTable';

test(('render an empty table with three columns'), () => {
  render(<ResultsTable data={[]} />);
  const tableEl = screen.getByRole('table');
  const emptyRowEl = screen.getByRole('row', { name: 'Nenhum registro encontrado' });
  const columnEls = screen.getAllByRole('columnheader');

  expect(tableEl).toBeInTheDocument();
  expect(emptyRowEl).toBeInTheDocument();
  expect(columnEls.length).toBe(3);
});
test(('adds data received by props to the table rows'), () => {
  const tableData: RowType[] = [{
    number: 999,
    duodigit: 9990,
    time: 3.5,
  }];

  render(<ResultsTable data={tableData} />);
  const tableNewRowEl = screen.getByRole('row', {
    name: `${tableData[0].number} ${tableData[0].duodigit} ${tableData[0].time}`,
  });
  expect(tableNewRowEl).toBeInTheDocument();
});
test(('sorts data column header param when clicks on it'), () => { });

describe('sorts a RowType array by given column header', () => {
  let tableData: RowType[];

  beforeEach(() => {
    tableData = [{
      number: 42,
      duodigit: 1,
      time: 3.1,
    },
    {
      number: 34,
      duodigit: 2,
      time: 3.3,
    },
    {
      number: 27,
      duodigit: 3,
      time: 3.2,
    }];
  });

  test(('ascending'), () => {
    const sortedData = tableData.sort((a, b) => compareRows(a, b, 'number'));

    expect(sortedData[0].number).toEqual(27);
    expect(sortedData[1].number).toEqual(34);
    expect(sortedData[2].number).toEqual(42);
  });
  test(('descending'), () => {
    const sortedData = tableData.sort((a, b) => compareRows(a, b, '-time'));

    expect(sortedData[0].time).toEqual(3.3);
    expect(sortedData[1].time).toEqual(3.2);
    expect(sortedData[2].time).toEqual(3.1);
  });
});
