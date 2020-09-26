import React from "react";
import "./App.css";
import Routes from "./components/routes";
import Navigation from "./components/nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
