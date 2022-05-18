import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';
import Router from './routes';
import GlobalStyle from './styles/global';



const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
