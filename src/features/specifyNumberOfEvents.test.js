import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  test('When user hasn’t specified a number, 250 is the default number', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user loads  list of events', () => {
      AppWrapper = mount(<App />);
    });

    when(
      'user does not fill in a specific number of events to be shown',
      () => {}
    );

    then('there should be 250 events', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(250);
    });
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper = mount(<App />);
    given('the the list of events have been loaded', () => {});

    when('chooses a specific number of events', () => {
      AppWrapper.find('.selectedNumber').simulate('change', {
        target: { value: 7 },
      });
    });

    then('the specific number of event should be shown', () => {
      expect(AppWrapper.state('numberOfEvents')).toBe(7);
    });
  });
});
