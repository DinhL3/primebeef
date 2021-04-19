import './App.css';


import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Homepage from "./pages/Homepage"
import Details from "./pages/Details";
import Search from "./pages/Search"
import Na from "./pages/Na"

import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/movies/:id" exact component={Details} />
          <Route path="/search/movie/:query" exact component={Search} />
          <Route path="/na" exact component={Na} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
