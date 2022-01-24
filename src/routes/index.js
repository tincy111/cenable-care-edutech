import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../views/pages/authentication/Login/Login";
import Signup from "../views/pages/authentication/Signup/Signup";
import MainLayout from "../layout/MainLayout";
import TestPackages from "../views/test-packages";

const index = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/">
          <MainLayout />
        </Route>
        {/* <Route path="*"><NotFound/></Route> */}
      </Switch>
    </div>
  );
};

export default index;
