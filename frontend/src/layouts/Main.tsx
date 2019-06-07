import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "@/pages/Index";
import RadioHistory from "@/pages/RadioHistory";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Personality from "@/pages/Personality";

export default () => (
  <main>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/radios" component={RadioHistory} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/personality" component={Personality} />
    </Switch>
  </main>
);
