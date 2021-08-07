import {Route, Switch, BrowserRouter as Router } from "react-router-dom"
import TodosApp from "./Pages/TodosApp"
import Login from "./Pages/Login"
import Navbar from "./components/TodosApp/Navbar"
import { Darkmode } from "./context/DarkModeContext"


function App() {
  return (
  <Router>
      <Darkmode>
        <Navbar className="stcky-top" />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/todos">
            <TodosApp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Darkmode>
  </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}

export default App