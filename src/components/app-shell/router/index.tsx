import { CircularProgress } from '@material-ui/core';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const ContentRouter = () => (
  <Suspense fallback={<CircularProgress size={32} />}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={() => <div>Hello World!</div>} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default ContentRouter;
