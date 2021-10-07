import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  // test default number of event as 2
  test('default number of event as 32', () => {
    expect(NumberOfEventsWrapper.find('.selectedNumber').prop('value')).toEqual(
      2
    );
  });
});
