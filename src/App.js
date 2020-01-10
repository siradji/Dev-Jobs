// importing Required Modules
import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// importing  Context provider
import AuthState from './Context/Auth/AuthState';

//  importing components
import Home from './Pages/Home';
import NavBar from './Components/Layout/Navbar';
import Dashboard from './Components/Layout/dashboard/Dashboard';
import SearchPage from './Pages/SearchPage';

const App = () => {
  // initializing context Api

  return (
    <AuthState>
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
    </AuthState>
  );
};

export default App;
