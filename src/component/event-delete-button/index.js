import React from 'react';
import * as util from '../../lib/util.js';
import './event-delete.scss';

class EventDeleteButton extends React.Component {
  constructor(props){
    super(props);

    this.state = props.event
      ? {...this.state, ...props.event}
      : {};

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.event)
      this.setState(props.event);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render(){
    return (
      <button
        className='delete'
        onClick={this.handleClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default EventDeleteButton;
