import React, { FC, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import { TopPage } from "@/pages/Top";

// import { RadioHistoryPage } from "@/pages/RadioHistory";
const RadioHistoryPage = lazy(() =>
  import(/* webpackChunkName: "RadioHistoryPage" */ "@/pages/RadioHistory")
);

// import { RadioDetailPage } from "@/pages/RadioDetail";
const RadioDetailPage = lazy(() =>
  import(/* webpackChunkName: "RadioDetailPage" */ "@/pages/RadioDetail")
);

// import { ContactPage } from "@/pages/Contact";
const ContactPage = lazy(() =>
  import(/* webpackChunkName: "ContactPage" */ "@/pages/Contact")
);

// import { BlogPage } from "@/pages/Blog";
const BlogPage = lazy(() =>
  import(/* webpackChunkName: "BlogPage" */ "@/pages/Blog")
);

// import { PersonalityPage } from "@/pages/Personality";
const PersonalityPage = lazy(() =>
  import(/* webpackChunkName: "PersonalityPage" */ "@/pages/Personality")
);

export const Main: FC = () => {
  return (
    <main>
      <Suspense fallback={<div>Now Loading...</div>}>
        <Switch>
          <Route exact path="/" component={TopPage} />
          <Route exact path="/radios" component={RadioHistoryPage} />
          <Route exact path="/radios/:radioId" component={RadioDetailPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/personality" component={PersonalityPage} />
        </Switch>
      </Suspense>
    </main>
  );
};
