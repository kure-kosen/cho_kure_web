import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

import { TopPage } from "@/pages/Top";
import { RadioHistoryPage } from "@/pages/RadioHistory";
import { ContactPage } from "@/pages/Contact";
import { BlogPage } from "@/pages/Blog";
import { PersonalityPage } from "@/pages/Personality";
import { RadioDetailPage } from "@/pages/RadioDetail";

export const Main: FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/radios" component={RadioHistoryPage} />
        <Route exact path="/radios/:radioId" component={RadioDetailPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/blog" component={BlogPage} />
        <Route exact path="/personality" component={PersonalityPage} />
      </Switch>
    </main>
  );
};
