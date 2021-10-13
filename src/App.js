import React, { Component } from 'react';
import { getEvents, extractLocations } from './api';

import './App.css';
import './nprogress.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        !location || location === 'All Cities'
          ? events
          : events.filter((event) => event.location === location);

      const eventsSlice = locationEvents.slice(
        0,
        eventCount ? eventCount : this.state.numberOfEvents
      );
      this.setState({
        numberOfEvents: eventCount || this.state.numberOfEvents,
        events: eventsSlice,
      });
    });
  };

  render() {
    return (
      <div className='App'>
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateNumberOfEvents={this.updateEvents}
        />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
