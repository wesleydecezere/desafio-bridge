import React, { useState } from 'react';
import { DataTable } from 'bold-ui';

type RowType = {
  [number: string]: number;
  duodigit: number;
  time: number;
};

const allRows = [{
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
}] as RowType[];

const compareRows = (a: RowType, b: RowType, s: string): number => {
  const [sortParam, compareVal] = s[0] === '-' ? [s.slice(1), -1] : [s, 1];
  return a[sortParam] > b[sortParam] ? compareVal : -compareVal;
};

export const Results = (): JSX.Element => {
  const [params, setParams] = useState({
    sort: ['number'],
  });

  const rows = allRows.sort((a, b) => compareRows(a, b, params.sort[0]));

  const handleSortChange = (sort: string[]) => setParams((state) => ({ ...state, sort }));

  return (
    <DataTable<RowType>
      rows={rows}
      sort={params.sort}
      onSortChange={handleSortChange}
      loading={false}
      columns={
        [
          {
            header: 'Número',
            name: 'number',
            render: ({ number }) => number,
            sortable: true,
          },
          {
            header: 'Menor múltiplo duodígito',
            name: 'duodigit',
            render: ({ duodigit }) => duodigit,
            sortable: true,
          },
          {
            header: 'Tempo cálculo',
            name: 'time',
            render: ({ time }) => time,
            sortable: true,
          },
        ]
      }
    />
  );
};
