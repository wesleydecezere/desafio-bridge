import React, { useState, useEffect } from 'react';
import { VFlow, Button, TextField } from 'bold-ui';
import { ResultsTable, TimeExceededModal } from '../../components';
import { RowType } from '../../types';
import { checkSmallestDuodigitMultiple } from '../../services';

export const Home = () => {
  const [number, setNumber] = useState(0);
  const [results, setResults] = useState<RowType[]>([]);
  const [modal, setModal] = useState<JSX.Element>();

  const handleClick = async () => {
    await checkSmallestDuodigitMultiple(number)
      .then((record) => setResults((state) => state.concat(record)))
      .catch(() => {
        setModal(<></>);
        setModal(<TimeExceededModal />);
      });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(
    parseFloat(e.target.value),
  );

  return (
    <VFlow
      vSpacing={1}
      style={{
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <TextField
        type="Number"
        label="Numero"
        placeholder="Digite um número inteiro maior que 100"
        error=""
        required
        onChange={handleChange}
      />
      <ResultsTable data={results} />
      <Button
        kind="primary"
        size="large"
        onClick={handleClick}
      >
        Calcular
      </Button>
      {modal}
    </VFlow>
  );
};
