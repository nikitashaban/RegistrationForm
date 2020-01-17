import React from "react";

import { Route, Switch } from "react-router-dom";
import Form from "./components/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Articles from "./components/Articles/Articles";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact render={props => <Form {...props} />} />
        <Route path="/articles" render={props => <Articles {...props} />} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
