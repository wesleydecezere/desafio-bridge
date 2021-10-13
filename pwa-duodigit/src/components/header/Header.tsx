import React from 'react';
import { Heading, Text, VFlow } from 'bold-ui';

export const Header = () => (
  <VFlow vSpacing={0} style={{ paddingBottom: '30px' }}>
    <Heading level={1}>Calculadora de menor múltiplo duodígito</Heading>
    <Text aria-label="description" fontStyle="italic">
      Insira um número real maior que 100. Ao clicar em “Calcular”, o app
      irá lhe informar qual o menor múltiplo duodígito (somente dois
      dígitos distintos) do número informado.
    </Text>
  </VFlow>
);
