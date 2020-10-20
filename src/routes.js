import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Screens/Home/';

function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
