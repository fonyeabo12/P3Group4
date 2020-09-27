import React from "react";
import Routes from "./components/routes";
import Navigation from "./components/nav";
import Footer from "./components/footer";
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
