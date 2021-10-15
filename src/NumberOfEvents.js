import React, { Component } from 'react';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEvents: props.numberOfEvents,
      error: false,
    };
  }

  updatenumberOfEvents = (eventCount) => {
    if (eventCount < 1 || eventCount > 250) {
      return this.setState({
        numberOfEvents: eventCount,
        error: true,
      });
    } else {
      this.setState({
        numberOfEvents: eventCount,
        error: false,
      });
      this.props.updateNumberOfEvents(null, eventCount);
    }
  };

  render() {
    const { numberOfEvents, error } = this.state;
    return (
      <div className='numberOfEvents'>
        <label htmlFor='eventNumber'>Number of Events</label>
        <input
          name='eventNumber'
          type='number'
          className='selectedNumber'
          value={numberOfEvents}
          onChange={(e) => this.updatenumberOfEvents(e.target.value)}
        />
        {error && (
          <span style={{ color: 'red' }}>Must be between 1 and 250</span>
        )}
      </div>
    );
  }
}
export default NumberOfEvents;
