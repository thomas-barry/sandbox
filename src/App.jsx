import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Page from '@/layout/page/Page';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 12px;
    font-family: "Roboto, Arial, sans-serif";
  }

  body {
    padding: 0;
    margin: 0;
    overflow-y: scroll;
    background-color: lightgray; 
  }
`;

const App = () => {
  return (
    <div id="app-container">
      <GlobalStyle />
      <Page>FOO</Page>
    </div>
  );
};

export default App;
