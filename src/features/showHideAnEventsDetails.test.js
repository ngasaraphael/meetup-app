import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import EventList from '../EventList';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  let EventListWrapper;
  let EventWrapper;
  let AppWrapper;

  //Scenario 1
  test('An event element is collapsed by default', ({ given, when, then }) => {
    given('the list of events has been loaded', () => {
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user opens the app', () => {
      AppWrapper = mount(<App />);
    });

    then(
      'the user should see a list of all upcoming events without details',
      () => {
        expect(EventWrapper.find('.description')).toHaveLength(0);
      }
    );
  });

  //Scenario 2
  test('User can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    given('the list of events are shown', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('user clicks on “Show more” button on an event', () => {
      EventWrapper.find('.moreDetails').simulate('click');
    });

    then('the event element will be expanded to show the event details', () => {
      expect(EventWrapper.find('.description')).toHaveLength(1);
    });
  });

  //Scenario 3
  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    given('the details of an event is being shown', () => {
      AppWrapper = mount(<App />);
      EventListWrapper = mount(<EventList events={mockData} />);
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find('.moreDetails').simulate('click');
      EventWrapper.find('.description');
    });

    when('the user clicks on “Show less” button on an event', () => {
      EventWrapper.find('.lessDetails').simulate('click');
    });

    then('the event element will collapse and hide its details', () => {
      expect(EventWrapper.find('.description')).toHaveLength(0);
    });
  });
});
