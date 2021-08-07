import React from "react";
import Home from "./pages/Home"
import PleinEcran from "./pages/PleinEcran"
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom"
// import Redirect from './../public/_redirects'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gradient/:id" component={PleinEcran} />
        {/* <Redirect exact from="/" to="/home" /> */}
      </Switch>
    </Router >
  )
}

export default App
