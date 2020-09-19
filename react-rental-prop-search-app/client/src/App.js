import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./components/routes";
import NavBar from "./components/nav";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
