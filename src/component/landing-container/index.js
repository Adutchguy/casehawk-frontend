import React from 'react';
import { connect } from 'react-redux';
import * as route from '../../action/route.js';
import * as querystring from 'querystring';

export class LandingContainer extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <button onClick={this.props.goToLogin}> login </button>
        <button onClick={this.props.goToSignup}> signup </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(route.switchRoute('/login')),
  goToSignup: () => dispatch(route.switchRoute('/signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
