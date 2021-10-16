
Feature: Show/hide event details

  Scenario: An event element is collapsed by default
    Given the list of events has been loaded
    When the user opens the app
    Then the user should see a list of all upcoming events without details

  Scenario: User can expand an event to see its details
    Given the list of events are shown
    When user clicks on “Show more” button on an event
    Then the event element will be expanded to show the event details

  Scenario: User can collapse an event to hide its details
    Given the details of an event is being shown
    When the user clicks on “Show less” button on an event
    Then the event element will collapse and hide its details


