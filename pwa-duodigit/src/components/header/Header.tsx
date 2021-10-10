import React from 'react';
import { Heading, Text, VFlow } from 'bold-ui';

export const Header = () => (
  <VFlow style={{ paddingButton: '30px' }}>
    <Heading level={1}> Calculadora de menor múltiplo duodígito </Heading>
    <Text component="h6" variant="main">Descrição da aplicação.</Text>
  </VFlow>
);
