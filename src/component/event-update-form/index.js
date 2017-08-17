import './update-form.scss';
import React from 'react';
import * as util from '../../lib/util.js';

class EventUpdateForm extends React.Component {
  constructor(props){
    super(props);
    console.log('PROPS', props);
    this.state = props.event
      ? {...this.state, ...props.event}
      : {};
    console.log('LOCAL STATE', this.state);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    console.log('EVENT UPDATE FORM STATE', this.state);
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
          />
        </p>

        <p>
          <label htmlFor='end-date-time'> End Date/Time: </label>

          <input
            type='datetime-local'
            id='end-date-time'
            name='end'
            onInput={this.handleChange}
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
            checked={this.state.checked}
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
            checked={this.state.notify}
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
