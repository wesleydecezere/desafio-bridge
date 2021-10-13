import React from 'react';
import styled from 'styled-components';
import { Header } from './components';
import { Home } from './views';

const AppContainer = styled.div`
  width: 90vw;
  height: 100vh;
  padding: 20px 0;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function App(): JSX.Element {
  return (
    <AppContainer>
      <Header />
      <Home />
    </AppContainer>
  );
}

export default App;
