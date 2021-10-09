import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 2,
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className='numberOfEvents'>
        <input
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
