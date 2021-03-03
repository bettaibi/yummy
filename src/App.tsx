import React from 'react';

import Auth from './layouts/auth/Auth';
import User from './layouts/user/User';

import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="h-100 w-100">
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={User} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
