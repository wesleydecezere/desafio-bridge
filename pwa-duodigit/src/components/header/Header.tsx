import React from 'react';
import { Text, VFlow } from 'bold-ui';

export const Header = () => (
  <VFlow style={{ 'padding-bottom': '30px' }}>
    <Text variant="h1"> Calculadora de menor múltiplo duodígito </Text>
    <Text variant="main">Descrição da aplicação.</Text>
  </VFlow>
);
