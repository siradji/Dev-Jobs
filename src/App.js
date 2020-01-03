// importig Required Modules

import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//  importing components
import Home from './Pages/Home';
import NavBar from './Components/Layout/Navbar';
import Dashboard from './Components/Layout/dashboard/Dashboard';
import SearchPage from './Pages/SearchPage';

const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/search' component={SearchPage} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
