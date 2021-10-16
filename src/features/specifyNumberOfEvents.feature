Feature: Default and Specify number of events

Scenario: When user hasn’t specified a number, 250 is the default number

Given the user loads  list of events 
When user does not fill in a specific number of events to be shown
Then there should be 250 events


 Scenario: User can change the number of events they want to see
    Given the the list of events have been loaded
    When chooses a specific number of events
    Then the specific number of event should be shown


