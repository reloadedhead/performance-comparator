import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const ContentRouter = () => (
  <Suspense fallback={<CircularProgress size={32} />}>
    <Switch>
      <Route path="/aritmetica" component={() => <div>Hello World!</div>} />
      <Route path="/aritmetica-ponderada" component={() => <div>Hello World!</div>} />
      <Route path="/geometrica" component={() => <div>Hello World!</div>} />
      <Redirect to="/aritmetica" />
    </Switch>
  </Suspense>
);

export default ContentRouter;
