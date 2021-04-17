import './App.css';

import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Homepage from "./pages/Homepage"
// import Details from "./pages/Details";

import Navbar from "./components/Navbar"


function App() {
  return (
    <>
      <Router>

        <Navbar />

        <Switch>
          <Route path="/" exact component={Homepage} />
          {/* <Route path="/movie/:id" exact component={Details} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
