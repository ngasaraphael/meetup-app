import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
  }

  moreDetails = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const events = this.props.events;
    return (
      <div className='events'>
        <div className='event'>
          <h3 className='summary'>{events.summary}</h3>
          <h4 className='location'>{events.location}</h4>
          <h4 className='eventDate'>
            start: {events.start.dateTime} - Time Zone: {events.start.timeZone}
          </h4>
          {this.state.showDetails === true && (
            <p className='description'>{events.description}</p>
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
