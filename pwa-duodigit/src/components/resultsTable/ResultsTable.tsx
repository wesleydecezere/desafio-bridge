import React, { useState } from 'react';
import { DataTable } from 'bold-ui';
import { RowType } from '../../types';

type Props = {
  data: RowType[];
};

export const compareRows = (a: RowType, b: RowType, s: string): number => {
  const [sortParam, compareVal] = s[0] === '-' ? [s.slice(1), -1] : [s, 1];
  return a[sortParam] > b[sortParam] ? compareVal : -compareVal;
};

export const ResultsTable = ({ data }: Props): JSX.Element => {
  const [params, setParams] = useState({
    sort: [''],
  });

  const rows = data.sort((a, b) => compareRows(a, b, params.sort[0]));

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
