/* Import des components et librairies */

import { Switch, Route, Redirect } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Project from './pages/Project'

function App() {
  return (
    // Switch permet de <Route>, les paths renseigné vers les noms de pages renseigné dans component={}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project" component={Project} />
      <Route exact path="/contact" component={Contact} />
      {/* //Si un autre nom de page est tapé hors celle qui sont présente dans nos route il seront redirigé vers la Home */}
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
