import React from 'react';
import * as _ from 'lodash';
import {connect} from 'react-redux';
import superagent from 'superagent';
import * as util from '../../lib/util.js';
import * as auth from '../../action/auth.js';
import './signin-container.scss';
import * as route from '../../action/route';

class SigninContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.signin({
      username: this.state.username,
      password: this.state.password,
    });
  }

  handleChange(e){
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  render(){
    return(
      <div>
        <form className='signin-container' onSubmit={this.handleSubmit}>

          <input
            className='signin-username'
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            className='signin-password'
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />

          <button className='signin-cont-button' type='submit'> sign-in </button>

          <div
            className="signin-cancel-x"
            onClick={this.props.goToLanding}
          >X</div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
});

export const mapDispatchToProps = (dispatch) => ({
  signin: (user) => dispatch(auth.signinRequest(user)),
  goToLanding: (user) => dispatch(route.switchRoute('/landing')),
});

export default connect (mapStateToProps, mapDispatchToProps)(SigninContainer);
