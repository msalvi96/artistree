import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ArticlesPage from './pages/ArticlesPage.js';

const App = () => {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={DashboardPage}></Route>
              <Route exact path="/articles" component={ArticlesPage}></Route>
              <Redirect to="/"></Redirect>
          </Switch>
      </Router>
  )
}

export default App;