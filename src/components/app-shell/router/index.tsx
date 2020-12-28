import { CircularProgress } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BenchmarksProvider } from '../../../contexts/benchmarks';

const ArithmeticPage = lazy(() => import('../../../pages/arithmetic'));

const ContentRouter = () => (
  <Suspense fallback={<CircularProgress size={32} />}>
    <BenchmarksProvider>
      <Switch>
        <Route path="/aritmetica" component={ArithmeticPage} />
        <Route path="/aritmetica-ponderada" component={() => <div>Hello World!</div>} />
        <Route path="/geometrica" component={() => <div>Hello World!</div>} />
        <Redirect to="/aritmetica" />
      </Switch>
    </BenchmarksProvider>
  </Suspense>
);

export default ContentRouter;
