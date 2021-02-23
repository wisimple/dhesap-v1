import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "pages/Welcome";
import SignUp from "pages/SignUp";
import SignIn from "pages/SignIn";
import Dashboard from "pages/dashboard";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
