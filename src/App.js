import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Discover from './components/pages/Discover';
// import Search from './components/pages/Search';
import NavTabs from './components/Navbar';

class App extends React.Component {
  state = {
    currentPage: 'Home'
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={About} />
          <Route exact path="/discover" component={Discover} />
        </div>
      </Router>
    );
  }
}

export default App;
