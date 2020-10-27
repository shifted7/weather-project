# Truthy-Weather

- A project that aims to provide the best real-time weather forecast, by combining data from multiple APIs into one, highly accurate forecast.

[We are deployed on Heroku!](https://team-plantain-weather.herokuapp.com/)

## Group Plantain: **Andrew Casper, Morgan Heinemann, Alex Pena, and Anthony Cunningham**

## Overview
 - The "Truthy-Weather" web application is a weather app that strives to provide the user with the most up to date forecast information available. This is achieved by gathering source data from multipile weather forecast API's and comparing that data to produce an average or "modified" result that provides the user with a more accurate display of data.

 ## Getting Started

 - NPM install
    - Open your terminal (Mac) or Ubuntu window (windows/linux)
    - In the window, type in: "npm i"
    - Following the I, insert the following modules: express, superagent, cors, module_override, ejs, pg

 - Create DB
    - Inside your CMD window, open your psql library with the command "psql"
    - After accessing the psql library, create a db using the following syntax: "create database (your db name here) ; <<< make sure there is a semicolon following this statement>>>

 - Run Schema on DB
    - Inside your IDE, create a schema.sql file containing the information you would like to be saved into your table inside your DB. 
    - Then, run the following command in order to create the table of information in your database, -d (name of your DB) -f (file path that includes your schema.sql)

 - Gather API Keys
   - Identify your source API's and sign up for them in order to recieve your personalized access key.

 - Ensure all proper variables are installed in .ENV (w/specific naming conventions)
   - After recieving your keys, assign them to values inside your .env file and make sure that the names you assign to your keys are matching in your codebase.

 - Run nodemon
    - Inside your terminal, run "nodemon"

 - Launch application
    - Inside your browser, type in localhost:(your port # here)
    - Enjoy your updated forecast! 

## Architecture 
    - Languages: HTML, CSS, JS, SQL
    - Libraries: Jquery, Express, Postgres
    - Template Engines: Handlebars, EJS
    - CSS displays: Flex, Grid

## Change Log

    - FEB 28 2020: Initial commits made, added gitignore, eslint, public folder, views etc. Application structuring completed
    - Mar 2 2020: Proof of life complete. Server console logging API data from superagent.
        - JSON files added
        - DB Schema and functionality added
        - End of 1st Merge War, developers claim victory over peasant conlflict caste.
    - Mar 3 2020: weatherishere translator (constructor) added for functionality
        - Updated Schema
        - Ajax call to back-end added to app.js
        - Routes now handle endpoints today and forecast. 
        - App.js now calls to the correct endpoint
        - Routes getting data from Openweather (5 day forecast)
        - Handlebars injected into html via ejs
    - Mar 4 2020: 
        - Fixed function call in darkSkyFOrecast to correctly use DarkSkyTranslator
        - Completed full dark sky chain of events with response to user
        - The great cleanse ensues, master branch is defeated and forced into exile. New branch "deploy" is born as new master branch and ushers in an era of prosperity for the developers.
        - Index.ejs no langer has extraneous ejs elements.
        - Routes.js no longer has zombie code in getData functions
        - app.js now correctly renders the ajax response.
    - Mar 5 2020:       
        - getData functions now correctly passes a city name to constructors
        - Refactored styling to use smacss and flexbox/gird.
        - Added spans to index.ejs to allow jquery targeting for average
        - Added spans to index templates



### User Stories
As a user, right away I want to see the day's forecast, averaged from all the APIs

As a user, I want to see for myself the results from each of the different APIs (start with three)

As a user, I want to see the forecast of the weather for the next 7 days, averaged from all the APIs

As a user, I want to be able to save my current location.

As a user, I want to also have the ability to add, edit, or delete other locations.

### Feature Table
Determine data that's easily comparable between APIs

Build out site with mobile-first styling, using wireframes as guide

Add tablet and desktop styles, with responsive styling

Add functionality to retrieve data from the APIs and send to user

Add functionality to save API data in database for future queries of the same location.

Add functionality to update data in real time.

Darksky API translation

OpenWeather API translation

Yahoo API translation


### Acceptance Tests:
Search for Seattle weather should return current weather and forecast data from each API.

Search for Seattle weather should save the data to the database.

Recent searches by user should be saved in localstorage.


## Credits and Collaborations
 - https://www.videezy.com/free-video/rain?page=3 for rain background

