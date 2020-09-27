import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/home";
import About from "../../pages/about";
import Profile from "../../pages/profile";
import Team from "../../pages/team";
import SignIn from "../../pages/signin";
import Results from "../../pages/Results";
// import Filter from "../../pages/propertyFilter";
import NotFound from "../../pages/NotFound";
import Landing from "../../pages/Landing";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/team">
        <Team />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/results">
        <Results />
      </Route>
      <Route path="/landing">
        <Landing />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
