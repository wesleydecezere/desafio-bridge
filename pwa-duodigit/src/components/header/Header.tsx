import React from 'react';
import { Heading, Text, VFlow } from 'bold-ui';

export const Header = () => (
  <VFlow style={{ paddingBottom: '30px' }}>
    <Heading level={1}>Calculadora de menor múltiplo duodígito</Heading>
    <Text aria-label="description" variant="main">Descrição da aplicação.</Text>
  </VFlow>
);
