import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "@/entries/Index";
import RadioHistory from "@/entries/RadioHistory";
import Contact from "@/entries/Contact";
import Blog from "@/entries/Blog";
import Personality from "@/entries/Personality";

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
