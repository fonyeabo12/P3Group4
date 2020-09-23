import React from "react";
import "./App.css";
import Routes from "./components/routes";
import Navigation from "./components/nav";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App container">
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
