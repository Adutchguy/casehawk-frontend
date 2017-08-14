import React from 'react';
import { connect } from 'react-redux';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import * as util from '../../lib/util.js';
import * as auth from '../../action/auth';
import * as route from '../../action/route';

import LandingContainer from '../landing-container';
import SignupContainer from '../signup-container';
import LoginContainer from '../login-container';

class App extends React.Component {
  componentDidMount() {
    let token = util.cookieFetch('X-Casehawk-Token');
    if (token) this.props.login(token);
  }

  render() {
    return (
      <div className="app">
        <header>
          <div className="toolbar">
            <h2 onClick={this.toggleMenu} className="logo">
							Casehawk
            </h2>
          </div>
          {util.renderIf(
            this.props.token,
            <div className="menu">
              <button onClick={this.props.logout}> logout </button>
            </div>
          )}
        </header>
        <MemoryRouter>
          <Switch location={{ pathname: this.props.route }}>
            <Route path="/landing" component={LandingContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/login" component={LoginContainer} />
          </Switch>
        </MemoryRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  token: state.token,
  route: state.route,
});

let mapDispatchToProps = dispatch => ({
  logout: () => dispatch(auth.logout()),
  login: token => dispatch(auth.login(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
