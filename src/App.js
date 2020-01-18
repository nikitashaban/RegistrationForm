import React from "react";

import { Route, Switch } from "react-router-dom";
import Form from "./components/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Articles from "./components/Articles/Articles";
import GuardRoute from "./components/GuardRoute/GuardRoute";
const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={Form} />
        <GuardRoute>
          <Route path="/articles" component={Articles} />
        </GuardRoute>
      </Switch>
    </React.Fragment>
  );
};

export default App;
