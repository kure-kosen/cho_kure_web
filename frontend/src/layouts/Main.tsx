import * as React from "react";
import { Switch, Route } from "react-router-dom";

import { Index } from "./../entries/Index";
import { Contact } from "./../entries/Contact";

export const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </main>
);
