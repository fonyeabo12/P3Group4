import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./components/routes";
import NavBar from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App container">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
