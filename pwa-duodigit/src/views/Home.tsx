import React from 'react';
import { VFlow, Button, TextField } from 'bold-ui';
import { Results } from '../components';

const Home = () => (
  <VFlow
    vSpacing={1}
    style={{
      display: 'flex',
      'justify-content': 'space-between',
      'flex-grow': '1',
    }}
  >
    <TextField
      type="Number"
      label="Numero"
      placeholder="Digite um número inteiro maior que 100"
      error=""
      required
    />
    <Results />
    <Button
      kind="primary"
      size="large"
    >
      Calcular
    </Button>
  </VFlow>
);

export default Home;
