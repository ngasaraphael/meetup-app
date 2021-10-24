import React, { Component } from 'react';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './App.css';
import './nprogress.css';
import CitySearch from './CitySearch';
import EventList from './EventList';
import NumberOfEvents from './NumberOfEvents';
import { WarningAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import EventGenre from './EventGenre';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 250,
    warningText: '',
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    //no internet connection
    if (navigator.onLine === false) {
      this.setState({
        warningText: 'App not connected to the internet',
      });
    }

    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        !location || location === 'all'
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

  render() {
    const {
      showWelcomeScreen,
      numberOfEvents,
      warningText,
      locations,
      events,
    } = this.state;
    if (showWelcomeScreen === undefined) return <div className='App' />;
    return (
      <div className='App'>
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateNumberOfEvents={this.updateEvents}
        />
        <CitySearch locations={locations} updateEvents={this.updateEvents} />

        <WarningAlert text={warningText} />

        <div className='charts'>
          <h4>Events in each city</h4>
          <div className='data-vis-wrapper'>
            <EventGenre events={this.state.events} />
            <ResponsiveContainer height={400}>
              <ScatterChart
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <CartesianGrid />
                <XAxis type='category' dataKey='city' name='city' />
                <YAxis
                  allowDecimals={false}
                  type='number'
                  dataKey='number'
                  name='number of events'
                />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill='#0e0124' />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        <EventList events={events} />

        <WelcomeScreen
          showWelcomeScreen={showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}

export default App;
