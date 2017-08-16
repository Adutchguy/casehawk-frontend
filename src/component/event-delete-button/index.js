import React from 'react';
import * as util from '../../lib/util.js';

class EventDeleteButton extends React.Component {
  constructor(props){
    super(props);

    this.state = props.event                  // passed in only if updateing
      ? {...props.event} : {};      // inital state on update

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    console.log('EVENT DELETE BUTTON STATE', this.state);
  }

  componentWillReceiveProps(props){
    if(props.event)
      this.setState(props.event);
  }

  handleChange(e){
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render(){
    return (
      <button type='submit'> {this.props.buttonText} </button>
    );
  }
}

export default EventDeleteButton;
