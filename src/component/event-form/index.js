import React from 'react';
import * as util from '../../lib/util.js';

class EventForm extends React.Component {
  constructor(props){
    super(props);

    this.state = props.event                  // passed in only if updateing
      ? {...props.event}         // inital state on update
      : {title: '',
        allDay: false,
        start: '',
        end: '',
        eventType: null,
        tag: '',
        notifyChecked: false};  // inital state for createing a event

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    console.log('EVENT FORM STATE', this.state);
  }

  componentWillReceiveProps(props){
    if(props.event)
      this.setState(props.event);
  }

  handleChange(e){
    let {type, name, value} = e.target;
    type === 'checkbox'
      ? e.target.checked === false
        ? this.setState({[name]: false})
        : this.setState({[name]: true})
      : type === 'datetime-local'
        ? this.setState({[name]: new Date(value)})
        : this.setState({[name]: value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render(){
    return (
      <form
        className='event-form'
        onSubmit={this.handleSubmit}
      >

        <input
          placeholder='Title'
          type='text'
          name='title'
          onChange={this.handleChange}
          value={this.state.name}
        />

        <label htmlFor='allday'> All Day: </label>

        <input
          type='checkbox'
          id='allday'
          name='allday'
          onChange={this.handleChange}
        />

        <label htmlFor='start-date-time'> Start Date/Time: </label>

        <input
          type='datetime-local'
          id='start-date-time'
          name='start'
          onInput={this.handleChange}
        />

        <label htmlFor='end-date-time'> End Date/Time: </label>

        <input
          type='datetime-local'
          id='end-date-time'
          name='end'
          onInput={this.handleChange}
        />

        <select
          defaultValue="---"
          id='event-type'
          name='eventType'
          onChange={this.handleChange}
        >
          <option value="---"> --- </option>
          <option value="appointment"> Appointment </option>
          <option value="court-date"> Court Date </option>
          <option value="deadline"> Deadline </option>
          <option value="task"> Task </option>
        </select>

        <label htmlFor='notify'> Notify: </label>
        <input
          type='checkbox'
          id='notify'
          name='notify'
          onChange={this.handleChange}
        />

        <input
          placeholder='tags'
          type='text'
          name='tag'
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default EventForm;
