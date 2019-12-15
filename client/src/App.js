import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import StatusState from "./context/status/StatusState";

import Navbar from "./components/layout/Navbar";
import Status from "./components/status/Status";
import Approvals from "./components/approvals/Approvals";
import "./App.css";
import ApprovalsState from "./context/approvals/ApprovalsState";

const App = () => {
  return (
    <StatusState>
      <ApprovalsState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/status" component={Status} />
                <Route exact path="/approvals" component={Approvals} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ApprovalsState>
    </StatusState>
  );
};

export default App;
