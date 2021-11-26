import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ComingSoonPage from './pages/ComingSoon';
import DashboardPage from './pages/Dashboard';
import DiscoveryPage from './pages/Discovery';
import LandingPage from './pages/Landing';
import LibraryPage from './pages/Library';
import MyListPage from './pages/MyList';
import RecentPage from './pages/Recent';
import SettingsPage from './pages/Settings';
import TvShowPage from './pages/TvShow';

const App: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Route path="/dashboard">
        <DashboardPage />
      </Route>
      <Route path="/recent">
        <RecentPage />
      </Route>
      <Route path="/discovery">
        <DiscoveryPage />
      </Route>
      <Route path="/coming-soon">
        <ComingSoonPage />
      </Route>
      <Route path="/tv-show">
        <TvShowPage />
      </Route>
      <Route path="/library">
        <LibraryPage />
      </Route>
      <Route path="/my-list">
        <MyListPage />
      </Route>
      <Route path="/settings">
        <SettingsPage />
      </Route>
      <Route path="*">
        <div>THIS PAGE NOT EXIST</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
