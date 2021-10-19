import React, { Component } from 'react';
import './index.css';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
      showDetails: false,
    };
  }

  moreDetails = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const { event } = this.props;

    return (
      <div className='events'>
        <div className='event'>
          <h3 className='summary'>{event.summary}</h3>
          <h4 className='location'>{event.location}</h4>
          <p className='eventDate'>
            start: {event.start.dateTime} - Time Zone: {event.start.timeZone}
          </p>
          {this.state.showDetails === true && (
            <p className='description'>{event.description}</p>
          )}

          {this.state.showDetails === false && (
            <button className='moreDetails' onClick={() => this.moreDetails()}>
              Show details
            </button>
          )}
          {this.state.showDetails === true && (
            <button className='lessDetails' onClick={() => this.moreDetails()}>
              Hide details
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default Event;
