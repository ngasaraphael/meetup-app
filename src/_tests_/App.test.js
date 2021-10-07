import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

describe('<App /> component', () => {
  //beforeAll() function for all test in App
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  //test presence of list of events
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  //test CitySearch
  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  //number of events rendered in App.js
  test('number of events is rendered', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});
