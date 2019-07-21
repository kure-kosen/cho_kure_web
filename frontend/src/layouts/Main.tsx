import React from "react";
import { Switch, Route } from "react-router-dom";

import RootContext from "@/utils/Contexts/RootContext";

import Index from "@/pages/Index";
import RadioHistory from "@/pages/RadioHistory";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Personality from "@/pages/Personality";

export default () => {
  const rootStore = React.useContext(RootContext);

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Index rootStore={rootStore} />} />
        <Route
          path="/radios"
          render={() => <RadioHistory rootStore={rootStore} />}
        />
        <Route
          path="/contact"
          render={() => <Contact rootStore={rootStore} />}
        />
        <Route path="/blog" component={Blog} />
        <Route path="/personality" component={Personality} />
      </Switch>
    </main>
  );
};
