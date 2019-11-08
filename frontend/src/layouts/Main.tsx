import React from "react";
import { Switch, Route } from "react-router-dom";

import RootContext from "@/utils/Contexts/RootContext";

import Index from "@/pages/Index";
import RadioHistory from "@/pages/RadioHistory";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Personality from "@/pages/Personality";
import { RadioDetail } from "@/pages/RadioDetail";

export default () => {
  const rootStore = React.useContext(RootContext);

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Index rootStore={rootStore} />} />
        <Route
          exact
          path="/radios"
          render={() => <RadioHistory rootStore={rootStore} />}
        />
        <Route
          exact
          path="/radios/:radioId"
          render={() => <RadioDetail rootStore={rootStore} />}
        />
        <Route
          exact
          path="/contact"
          render={() => <Contact rootStore={rootStore} />}
        />
        <Route exact path="/blog" component={Blog} />
        <Route
          exact
          path="/personality"
          render={() => <Personality rootStore={rootStore} />}
        />
      </Switch>
    </main>
  );
};
