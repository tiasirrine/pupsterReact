import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from "./components/pages/Search";

const App = () => (
  <Router>
    <div>
      {/* <NavTabs />
      <Route exact path="/" component={Home} />

      <Route exact path="/discover" component={Discover} /> */}
      <Route exact path="/search" component={Search} />

    </div>
  </Router>
);
export default App;