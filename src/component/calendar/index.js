import React from 'react';
import BigCalendar from 'react-big-calendar';
import {connect} from 'react-redux';
import {eventCreateRequest, eventReadRequest} from '../../action/event.js';
// import events from './events/events.js';
import moment from 'moment';

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);
console.log('views', BigCalendar.views);

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);


let Basic = React.createClass({

  componentWillMount(){
    this.props.eventRead();
  },

  render(){
    console.log('props', this.props);
    return (
      <BigCalendar
        {...this.props}
        events={this.props.events}
        views={allViews}
        defaultDate={new Date()}
      />
    );
  },
});

let mapStateToProps = (state) => ({
  events: state.events,
});

let mapDispatchToProps = (dispatch) => ({
  eventRead: () => dispatch(eventReadRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basic);
