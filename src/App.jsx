import React, { Suspense } from "react";
import '../src/assets/scss/styles.scss';
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./core/guards/index";

const Account = React.lazy(() => import('./pages/Account'));
const Features = React.lazy(() => import('./pages/Feature'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <PrivateRoute path="/account">
          <Account />
        </PrivateRoute>
        <Route path="/">
          <Features />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
