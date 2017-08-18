import React from 'react';
import { connect } from 'react-redux';
import * as route from '../../action/route.js';
import * as querystring from 'querystring';
import './landing-container.scss';
import harvey from '../asset/harvey_birdman_landing.jpg';

export class LandingContainer extends React.Component {
  render() {
    return (
      <div>
        <div className="landing-container">
          <button className='signin-button' onClick={this.props.goToSignin}> sign-in </button>
          <button className='signup-button' onClick={this.props.goToSignup}> sign-up </button>
        </div>
        <div className='landing-harvey-div'>
          <img className='landing-harvey' src={harvey} />
        </div>
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
