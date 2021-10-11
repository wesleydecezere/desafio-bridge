import React, { useState } from 'react';
import { VFlow, Button, TextField } from 'bold-ui';
import { ResultsTable, RowType } from '../components';

const Home = () => {
  const [number, setNumber] = useState(0);
  const [results, setResults] = useState<RowType[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setNumber(
    parseFloat(e.target.value),
  );
  const handleClick = () => setResults((state) => state.concat({
    number,
    duodigit: 0,
    time: 0,
  }));

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
    </VFlow>
  );
};

export default Home;
