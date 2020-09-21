import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Pages/home";
import About from "./components/Pages/About";
import Future from "./components/Pages/Future";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Login from "./components/Pages/Login";
import propertyFilter from "./components/Pages/propertyFilter";
import searchResults from "./components/Pages/searchResults";
import startSearch from "./components/Pages/startSearch";
import Team from "./components/Pages/Team";
import generateSlug from "generate-slug";

import './App.css';

function App() {
  const slug = new generateSlug()
  const string = "/start Search"
  const slug1 = slug.toSlug(string);
  return (
     <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Contact" component={Contact} />
           <Route exact path={slug1} component={startSearch} />
          <Route exact path="/searchResults" component={searchResults} />
           <Route exact path="/propertyFilter" component={propertyFilter} />
          <Route exact path="/Team" component={Team} />
           <Route exact path="/Future" component={Future} />
        <Footer />
      </div>
    </Router>
  );
}




export default App;