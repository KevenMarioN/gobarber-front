import React from 'react';
import { AuthProvider } from './hooks/AuthContext';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import GlobalStyle from './styles/global';



const App = () => {
  return (
    <>
    <AuthProvider>
    <SignIn/>
    </AuthProvider>
    <GlobalStyle />
    </>
  );
}

export default App;
