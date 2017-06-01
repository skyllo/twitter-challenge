import React from 'react';
import { Switch, Redirect, Route } from 'react-router';
import Root from './layouts/Root';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/:twitterName-tweets" component={Root} />
      <Redirect from="/" to="/cnnbrk-tweets" />
    </Switch>
  </div>
);

export default App;
