import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className='numberOfEvents'>
        <label htmlFor='eventNumber'>Number of Events</label>
        <input
          name='eventNumber'
          type='text'
          className='selectedNumber'
          value={numberOfEvents}
          onChange={(e) => this.setState(numberOfEvents(e.target.value))}
        />
      </div>
    );
  }
}
export default NumberOfEvents;
