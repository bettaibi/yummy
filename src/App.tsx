import Auth from './layouts/auth/Auth';
import User from './layouts/user/User';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  ProtectedRoute  from './components/ProtectedRoute';
import ErrorBoundary from './pages/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
        <Router>
          <div className="h-100 w-100">
            <Switch>
              <Route path="/auth" component={Auth} />
              <ProtectedRoute component={User}  path="/" />
            </Switch>
          </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
