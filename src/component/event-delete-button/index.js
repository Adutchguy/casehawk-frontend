import React from 'react';
import * as util from '../../lib/util.js';

class EventDeleteButton extends React.Component {
  constructor(props){
    super(props);

    this.state = props.event
      ? {...this.state, ...props.event}
      : {};

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(){
    console.log('EVENT DELETE BUTTON STATE', this.state);
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
        onClick={this.handleClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default EventDeleteButton;
