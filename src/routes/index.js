import React from 'react';
import { Route,Switch} from 'react-router-dom';
import Login from '../views/pages/authentication/Login/Login';
import Signup from '../views/pages/authentication/Signup/Signup';
import NotFound from '../pages/NotFound';
import MockTest from '../pages/MockTest/MockTest';
import Dashboard from '../views/dashboard/Default';
import MainLayout from '../layout/MainLayout';

const index = () => {
  return (
    <div>
    <Switch>
      <Route path="/" exact><MainLayout/></Route>
      <Route path="/login"><Login/></Route>
      <Route path="/signup"><Signup/></Route>
      <Route path="/dashboard"><MainLayout/></Route>
      <Route path="*"><NotFound/></Route>
    </Switch>
    </div> 
  )
}

export default index;
