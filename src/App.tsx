import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ComingSoonPage from './pages/ComingSoon';
import DashboardPage from './pages/Dashboard';
import DiscoveryPage from './pages/Discovery';
import LibraryPage from './pages/Library';
import MyListPage from './pages/MyList';
import RecentPage from './pages/Recent';
import SettingsPage from './pages/Settings';
import TvShowPage from './pages/TvShow';
import WatchMoviePage from './pages/WatchMovie';

const App: React.FunctionComponent = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/dashboard" />
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
      <Route
        path="/watchmovie/:id"
        render={({ match }) => <WatchMoviePage movieId={match.params.id} />}
      />
      <Route path="/watchmovie">
        <WatchMoviePage movieId="" />
      </Route>
      <Route path="*">
        <div>THIS PAGE NOT EXIST</div>
      </Route>
    </Switch>
  </Router>
);

export default App;
