import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Post from "./components/Post";

import PostState from "./context/post/PostState";

const App = () => {
  return (
    <PostState>
      <Router>
        <Fragment>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Post} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </PostState>
  );
};

export default App;
