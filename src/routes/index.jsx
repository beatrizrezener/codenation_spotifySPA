import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginRoute from './LoginRoute';
import AuthorizeRoute from './AuthorizeRoute';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginRoute} />
      <Route exact path="/authorize" component={AuthorizeRoute} />
    </Switch>
  );
};

export default Routes;
