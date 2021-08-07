// import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
// import Navbar from "./components/Navbar"
// import Todos from "./components/Todos"
// import Login from "./Pages/Login"
// // import ColorModeContainer from "./components/ColorModeContainer"

// function App() {
//   return (
//     <Router>
//       {/* <ColorModeContainer> */}
//       <Navbar className="stcky-top" />
//       {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//       <Switch>
//         <Route path="/todos">
//           <Todos />
//         </Route>
//         <Route path="/login">
//           <Login />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//       {/* </ColorModeContainer> */}
//     </Router>
//   )
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// export default App

/* CODE PAULINA */
import Todos from "./components/Todos"
import ColorModeContainer from "./components/ColorModeContainer"

function App() {
  return (
    <ColorModeContainer>
      <div className="container my-4">
        <h1 className="text-center">ToDos App</h1>
        <Todos />
      </div>
    </ColorModeContainer>
  )
}

export default App