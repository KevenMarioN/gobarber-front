import React from 'react';

import ToastContainer from './components/ToastContainer';
import AppProvider from './hooks';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';



const App = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
