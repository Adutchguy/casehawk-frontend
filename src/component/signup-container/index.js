import React from 'react';
import * as _ from 'lodash';
import validator from 'validator';
import superagent from 'superagent';
import EventForm from '../event-form';
import { connect } from 'react-redux';
import * as util from '../../lib/util.js';
import * as auth from '../../action/auth.js';
import './signup-container.scss';
import * as route from '../../action/route';

const Tooltip = props => {
  return (
    <div className="tooltip">
      {props.message}
    </div>
  );
};

export class SignupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      emailError: null,
      usernameError: null,
      passwordError: null,
      usernameAvailable: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateChange = this.validateChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      !this.state.usernameError &&
   !this.state.emailError &&
   !this.state.passwordError
    ) {
      return this.props.signup({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      });
    } else {
      console.log('handleSubmit error - signup-container');
    }
  }

  validateChange(e) {
    let { name, value } = e.target;
    let error = null;
    if (name === 'username') {
      if (!value) {
        error = 'username cannot be empty';
      } else if (!validator.isAlphanumeric(value)) {
        error = 'username can only contain letters and numbers';
      }
    } else if (name === 'email') {
      if (!value) {
        error = 'email can not be empty';
      }
      if (!validator.isEmail(value)) {
        error = 'must be a valid email';
      }
    } else if (name === 'password') {
      if (!value) {
        error = 'password can not be empty';
      } else if (!validator.isAlphanumeric(value)) {
        error = 'password can only contain letters and numbers';
      }
    }
    this.setState({ [`${name}Error`]: error });
  }

  handleChange(e) {
    this.validateChange({ ...e });
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form className="signup-container" onSubmit={this.handleSubmit}>
          <Tooltip message={this.state.emailError} />
          <input
            className='signup-email'
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Tooltip message={this.state.usernameError} />
          <input
            className='signup-username'
            name="username"
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <Tooltip message={this.state.passwordError} />
          <input
            className='signup-password'
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button className='signup-cont-button' type="submit"> sign-up </button>

          <div
            className="signup-cancel-x"
            onClick={this.props.goToLanding}
          >X</div>

        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({});

export const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(auth.signupRequest(user)),
  goToLanding: () => dispatch(route.switchRoute('/landing')),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);
