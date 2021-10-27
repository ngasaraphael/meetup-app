
FEATURE 1: FILTER EVENTS BY CITY
As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given: user hasn’t searched for any city
When: the user opens the app
Then: the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given: the main page is open
When: user starts typing in the city textbox
Then: the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST
Given: the user was typing “Berlin” in the city textbox. And the list of suggested cities is showing
When: the user selects a city (e.g., “Berlin, Germany”) from the list
Then: their city should be changed to that city (i.e., “Berlin, Germany”). And the user should receive a list of upcoming events in that city.

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
As a user, I should be able to show/hide details of an event so that I can more/less details of events.

SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT. 
Given: the user is on main page
When: the elements are collapsed
Then: the user should see the event elements
  
SCENARIO 2: USER CAN EXPAND AN EVENT TO SEE ITS DETAILS.
Given: the user is on main page
When: the user clicks to an element
Then: the element expands and the user can see the event details

SCENARIO 3: USER CAN COLLAPSE AN EVENT TO HIDE ITS DETAILS.
Given: the user sees the expanded element
When: the user clicks to the element
Then: the element collapses and the user can't see the event details

FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, I should be able to specify the number of elements so that I can see more/less elements.

SCENARIO 1: WHEN USER HASN’T SPECIFIED A NUMBER, 32 IS THE DEFAULT NUMBER. Given: the user opens the app
When: the user sees the elements Then: there are 32 elements

SCENARIO 2: USER CAN CHANGE THE NUMBER OF EVENTS THEY WANT TO SEE.
Given: the user opens the app
When: the user specify the number of events Then: there will be specified number of elements

FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I should be able to use the app when offline so that I can see the events without internet connection.
SCENARIO 1: SHOW CACHED DATA WHEN THERE’S NO INTERNET CONNECTION. 
Given: the user has no internet connection
When: the user wants to look at the events
Then: the user will be able to see the last events he/she looked at with internet connection
  
SCENARIO 2: SHOW ERROR WHEN USER CHANGES THE SETTINGS (CITY, TIME RANGE).
Given: the user has no internet connection
When: the user changes the setting
Then: the user won’t be able to see the events and will get an error message.

FEATURE 5: DATA VISUALIZATION
As a user, I should be able to see a chart showing upcoming events so that I can see the events in every city.

SCENARIO 1: SHOW A CHART WITH THE NUMBER OF UPCOMING EVENTS IN EACH CITY.
Given: the user looks at an event
When: the user clicks on the chart
Then: the user will be able to see a chart showing upcoming events in each city separately.
 
