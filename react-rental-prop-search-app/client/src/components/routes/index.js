import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "../../pages/search";
import About from "../../pages/about";
import Profile from "../../pages/profile";
import Team from "../../pages/team";
import SignIn from "../../pages/signin";
import NotFound from "../../pages/notfound";
import Welcome from "../../pages/welcome";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/search">
        <Search />
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
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
