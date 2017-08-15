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
    let {type, name} = e.target;
    console.log('value', e.target.value);

    if(name === 'title'){
      this.setState({title: e.target.value});
      console.log('state', this.state);
    }

    if(name === 'allday'){
      this.setState({allDay: e.target.checked});
    }

    if(name === 'start-date-time'){
      console.log('e', e);
      this.setState({start: e.target.value});
    }

    if(name === 'end-date-time'){
      this.setState({end: e.target.value});
    }

    if(name === 'event-type'){
      this.setState({eventType: e.target.value});
    }

    if(name === 'tag'){
      this.setState({tag: e.target.value});
    }

    if(name === 'notify'){
      this.setState({notifyChecked: e.target.checked});
    }
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
          name='start-date-time'
          onInput={this.handleChange}
        />

        <label htmlFor='end-date-time'> End Date/Time: </label>

        <input
          type='datetime-local'
          id='end-date-time'
          name='end-date-time'
          onInput={this.handleChange}
        />


        <select
          defaultValue="---"
          id='event-type'
          name='event-type'
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
