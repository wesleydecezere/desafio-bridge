import React, { useState } from 'react';
import { VFlow, Button, TextField } from 'bold-ui';
import { ResultsTable, TimeExceededModal } from '../../components';
import { RowType } from '../../types';
import { checkSmallestDuodigitMultiple } from '../../services';

const hasNumberAlreadyBeenSubmitted = (n: number, arr: RowType[]): boolean => {
  for (let i = 0; i < arr.length; i += 1) {
    if (n === arr[i].number) return true;
  }
  return false;
};

export const Home = () => {
  const [number, setNumber] = useState(0);
  const [results, setResults] = useState<RowType[]>([]);
  const [modal, setModal] = useState<JSX.Element>();
  const [inputError, setInputError] = useState('');

  const handleClick = async () => {
    if (number < 100 || Number.isNaN(number)) {
      setInputError('Insira um número maior que 100.');
      return;
    }
    if (hasNumberAlreadyBeenSubmitted(number, results)) {
      setInputError('O número informado já foi processado.');
      return;
    }
    setInputError('');

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
      vSpacing={2}
      style={{
        justifyContent: 'space-between',
        flexGrow: 1,
      }}
    >
      <TextField
        type="Number"
        label="Numero"
        placeholder="Digite um número inteiro maior que 100"
        error={inputError}
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
