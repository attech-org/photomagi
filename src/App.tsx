import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import LandingPage from './pages/Landing';

const App: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="*">
        <div>THIS PAGE NOT EXIST</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
