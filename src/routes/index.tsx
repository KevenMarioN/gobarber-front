import React from 'react';
import { Routes as Switch, Route} from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PrivateRoute from './PrivateRoute';

const Router = () => (
  <Switch>
    <Route path='/' caseSensitive element={<SignIn/>}/>
    <Route path='/signup'  element={<SignUp/>}/>
    <Route path='/dashboard'  element={<PrivateRoute redirectTo='/' children={ <Dashboard />} />}/>
  </Switch>
);

export default Router;