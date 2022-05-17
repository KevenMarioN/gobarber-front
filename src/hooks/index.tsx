import React, { ReactNode } from 'react';
import { AuthProvider } from './useAuth';
import { ToastProvider } from './useToast';

type AppProviderProps = {
  children: ReactNode;
};

export default function AppProvider({ children }: AppProviderProps): JSX.Element {
  return (
    <AuthProvider>
      <ToastProvider>{children}</ToastProvider>
    </AuthProvider>
  );
}