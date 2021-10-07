import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event events={mockData[1]} />);
  });

  //test summary
  test('Shown Summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  //test location
  test('Show Location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  //test event time
  test('Show Date and timezone', () => {
    expect(EventWrapper.find('.eventDate')).toHaveLength(1);
  });

  //show more details btn
  test('Show more details btn', () => {
    expect(EventWrapper.find('.moreDetails')).toHaveLength(1);
  });

  //toggle moreDetails btn
  test('toggle moreDetails btn on click', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    EventWrapper.find('.moreDetails').simulate('click');
    expect(EventWrapper.state('showDetails')).toEqual(true);
  });

  //do not show details by default
  test('do not show details by default', () => {
    EventWrapper.setState({
      showDetails: false,
    });
    expect(EventWrapper.find('.description')).toHaveLength(0);
  });

  //show more detail on click
  test('show more detail on click', () => {
    EventWrapper.setState({
      show: false,
    });
    EventWrapper.find('.moreDetails').simulate('click');
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  //show less details on click again
  test('show less details on click', () => {
    EventWrapper.setState({
      showDetails: true,
    });
    EventWrapper.find('.lessDetails').simulate('click');
    expect(EventWrapper.find('.description')).toHaveLength(0);
  });
});
