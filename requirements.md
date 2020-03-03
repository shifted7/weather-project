# Project Requirements
## Vision
- The vision of this product is the most accurate and reliable weather app available.
- The pain point this problem solves is one of reliability. Other apps are not always accurate, and our app has the power to show that as well as offering an alternative.
- You should care about my product for its value to almost anyone who works in or enjoys the outdoors. It can be adapted for gardening, skiing, hiking, traveling, or any number of other applications.

## Features
### IN:
- Our weather app will show the most accurate current weather for an area of any API.
- It will also show the most accurate 7-day forecast of any API.
- It will allow users to see the weather in any city.
- It will allow users to see the data from each API, to judge for themselves which is most accurate.

### OUT:
- Our app will not be a mobile app

## MVP
- Our minimum viable product shows the current weather for the user's location of choice as well as the 7-day forecast for that location.

### Stretch goals:
- We hope to have full user profiles, including authentication. We hope to figure out how to get the user's location automatically from GPS data. And we hope to really make our app's appearance special with effects like water droplets flowing down the screen.

## Functional requirements
- A user can get the weather data for a location
- A user can get forecast data for a location
- A user can have a list of locations saved and add, update, or delete locations from the list
- A user can understand how the data from different APIs is used.

### Data flow
- The user starts at the top of the page. They have a text input where they can type the name, zip code, or lat/long of a location. When they do, the current weather appears, and the app changes appearance to match that weather. They scroll down, and see the 7-day forecast. They scroll down further, and see the reported weather from each API. Finally, they scroll to the bottom of the page and find links to the social media so they can share the app with others.

## Non-functional requirements
- Our app must be reliable. We want users to trust that the app's predictions are accurate when they need a weather update. If our app is not reliable, there are lots of other ways to check weather. We will make sure our app is reliable by testing the APIs reported data from the past against the actual weather once it occurs.
- Our app must be fast. Because there are so many other apps out there with very fast response times, and because users feel that checking the weather should be fast and easy, we want to make sure our app loads quickly. We plan to meet this requirement by combining server-side and client-side rendering of our page, with a lean look on a single page.