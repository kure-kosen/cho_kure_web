import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import Index from "@/pages/Index";
import RadioHistory from "@/pages/RadioHistory";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Personality from "@/pages/Personality";
import { RadioDetail } from "@/pages/RadioDetail";

export const Main: FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/radios" component={RadioHistory} />
        <Route exact path="/radios/:radioId" component={RadioDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/personality" component={Personality} />
      </Switch>
    </main>
  );
};
