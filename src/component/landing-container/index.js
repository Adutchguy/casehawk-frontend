import React from 'react';
import { connect } from 'react-redux';
import * as route from '../../action/route.js';
import * as querystring from 'querystring';
import './landing-container.scss';

export class LandingContainer extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <button className='signin-button' onClick={this.props.goToSignin}> signin </button>
        <button className='signup-button' onClick={this.props.goToSignup}> signup </button>
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  goToSignin: () => dispatch(route.switchRoute('/signin')),
  goToSignup: () => dispatch(route.switchRoute('/signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
