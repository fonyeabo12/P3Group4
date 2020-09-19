import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/nav";
import Footer from "./components/footer";
// React Router Import //
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages //
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import Results from "./pages/Results";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/profile" component={Profile} />
            <Route path="/team" component={Team} />
            <Route path="/signin" component={SignIn} />
            <Route path="/notfound" component={NotFound} />
            <Route path="/results" component={Results} />
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default App;
