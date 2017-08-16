import React from 'react';
import {connect} from 'react-redux';
import EventForm from '../event-form';
import EventUpdateForm from '../event-update-form';
import EventDeleteButton from '../event-delete-button';
import Calendar from '../calendar';
import {eventCreateRequest, eventReadRequest, eventUpdateRequest, eventDeleteRequest} from '../../action/event.js';

class CalendarContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleEventCreate = this.handleEventCreate.bind(this);
    this.handleEventUpdate = this.handleEventUpdate.bind(this);
    this.handleEventDelete = this.handleEventDelete.bind(this);
  }

  handleEventCreate(event){
    return this.props.eventCreate(event)
      .catch(console.error);
  }

  handleEventUpdate(event){
    return this.props.eventUpdate(event)
      .catch(console.error);
  }

  handleEventDelete(event){
    return this.props.eventDelete(event);
  }

  render(){
    let handleComplete = this.props.event
      ? this.handleEventCreate
      : this.handleEventUpdate;

    return (
      <div className='calendar-container'>

        <Calendar />
        <EventForm
          buttonText='add event'
          onComplete={this.handleEventCreate}
        />

        <EventUpdateForm
          buttonText='update event'
          onComplete={this.handleEventUpdate}
        />

        <EventDeleteButton
          buttonText='delete event'
          onComplete={this.handleEventDelete}
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
  eventUpdate: (event) => dispatch(eventUpdateRequest(event)),
  eventDelete: (event) => dispatch(eventDeleteRequest(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
