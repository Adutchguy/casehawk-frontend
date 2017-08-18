import './update-form.scss';
import React from 'react';
import * as util from '../../lib/util.js';

class EventUpdateForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.event
      ? {...this.state, ...props.event}
      : {};

    console.log('STATE', this.state);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.event)
      this.setState({event: props.event});
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

  handleDate(date) {
    let splitDate = date.toString().split(' ');
    let ISOdate = date.toISOString();
    let splitISODateOnTime = ISOdate.split('T')[0];
    let T = 'T';
    let newDate = `${splitISODateOnTime}${T}${splitDate[4]}`;
    return newDate;
  }

  render(){
    return (
      <form
        className='event-update'
        onSubmit={this.handleSubmit}
      >
        <p>
          <label htmlFor='start-date-time'> Start Date/Time: </label>

          <input
            type='datetime-local'
            id='start-date-time'
            name='start'
            onInput={this.handleChange}
            value={this.handleDate(this.state.start)}
          />
        </p>

        <p>
          <label htmlFor='end-date-time'> End Date/Time: </label>

          <input
            type='datetime-local'
            id='end-date-time'
            name='end'
            onInput={this.handleChange}
            value={this.handleDate(this.state.end)}
          />
        </p>

        <p>
          <input
            placeholder='Title'
            type='text'
            name='title'
            onChange={this.handleChange}
            value={this.state.title}
          />
        </p>

        <p>
          <label htmlFor='allday'> All Day: </label>

          <input
            type='checkbox'
            id='allday'
            name='allDay'
            onChange={this.handleChange}
          />
        </p>


        <p>
          <select
            id='event-type'
            name='eventType'
            onChange={this.handleChange}
            value={this.state.eventType}
          >
            <option value="appointment"> Appointment </option>
            <option value="court-date"> Court Date </option>
            <option value="deadline"> Deadline </option>
            <option value="task"> Task </option>
          </select>
        </p>

        <p>
          <label htmlFor='notify'> Notify: </label>
          <input
            type='checkbox'
            id='notify'
            name='notify'
            onChange={this.handleChange}
          />
        </p>

        <p>
          <input
            placeholder='tags'
            type='text'
            name='tag'
            onChange={this.handleChange}
            value={this.state.tag}
          />
        </p>

        <button type='submit'> {this.props.buttonText} </button>

      </form>
    );
  }
}

export default EventUpdateForm;
