import React, { Component } from 'react';
import { Route, Router } from 'react-router';
import PropTypes from 'prop-types';
import './App.css';

import Index from './views/index';
import Player from './views/player';
import Login from './views/Login';


class App extends Component {
  render() {
    return (
      <Router history={ this.props.history }>
        <div>
          <Route exact path="/" component={ Index }/>
          <Route exact path="/login" component={ Login }/>
          <Route exact path="/player/:songId" component={ Player }/>
          {/* Here you can put more routes on */}
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.any
};

export default App;
