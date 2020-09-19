import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Profile from "../../pages/Profile";
import Team from "../../pages/Team";
import SignIn from "../../pages/SignIn";
import Results from "../../pages/Results";
import NotFound from "../../pages/NotFound";

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
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
