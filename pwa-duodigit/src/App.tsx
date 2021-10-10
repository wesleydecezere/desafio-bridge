import React from 'react';
import { VFlow, Button, TextField } from 'bold-ui';
import styled from 'styled-components';

import { Results, Header } from './components';
import Home from './views/Home';

const AppContainer = styled.div`
  width: 90vw;
  height: 100vh;
  padding: 20px 0;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Home />
    </AppContainer>
  );
}

export default App;
