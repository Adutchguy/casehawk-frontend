import React from 'react';
import {connect} from 'react-redux';
import EventForm from '../event-form';
import Calendar from '../calendar';
import {eventCreateRequest} from '../../action/event.js';

class CalendarContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleEventCreate = this.handleEventCreate.bind(this);
    this.handleEventUpdate = this.handleEventUpdate.bind(this);
  }

  handleEventCreate(event){
    return this.props.eventCreate(event)
      .catch(console.error);
  }

  handleEventUpdate(){
  }

  render(){
    let handleComplete = this.props.event
      ? this.handleEventCreate
      : this.handleEventUpdate;

    return (
      <div className='calendar-container'>
        <h2> calendar </h2>

        <Calendar />
        <EventForm
          buttonText='add event'
          onComplete={this.handleEventCreate}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  event: state.event,
});

let mapDispatchToProps = (dispatch) => ({
  eventCreate: (event) => dispatch(eventCreateRequest(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
