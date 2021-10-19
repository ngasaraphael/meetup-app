import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfEvents: props.numberOfEvents,
      errorText: ' ',
    };
  }

  updatenumberOfEvents = (eventCount) => {
    if (eventCount < 1 || eventCount > 250) {
      return this.setState({
        numberOfEvents: eventCount,
        errorText: 'Must be between 1 and 250',
      });
    } else {
      this.setState({
        numberOfEvents: eventCount,

        errorText: ' ',
      });
      this.props.updateNumberOfEvents(null, eventCount);
    }
  };

  render() {
    const { numberOfEvents, errorText } = this.state;
    return (
      <div className='numberOfEvents'>
        <input
          name='eventNumber'
          type='number'
          className='selectedNumber'
          value={numberOfEvents}
          onChange={(e) => this.updatenumberOfEvents(e.target.value)}
        />
        <ErrorAlert text={errorText} />
      </div>
    );
  }
}
export default NumberOfEvents;
