import React from 'react';
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';

interface RouteProps {
  children: JSX.Element;
  redirectTo: string;
}

const PrivateRoute = ({ children  , redirectTo }: RouteProps) : JSX.Element => {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

export default PrivateRoute;