/* eslint-disable no-undef */
'use strict';
///////DEPENDENCIES AND LIBRARIES///////

try{
const express = require ('express');
const app = express();

require('dotenv').config();

const methodOverride = require('method-override');
const client = require('./libs/client');

require('ejs');

const PORT = process.env.PORT || 3001;

const routes = require('./routes.js');

// Configurations
app.use(express.urlencoded({extended: true,}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

// Routes
app.get('/', routes.handleHome);
app.get('/today/openWeather', routes.handleTodayOpenWeatherAPIorDB);
app.get('/today/isHere', routes.handleTodayIsHereAPIorDB);
app.get('/today/darkSky', routes.getDarkSkyWeatherData);
app.delete('/delete/:city', routes.deleteCity);


client.connect()
.then(() =>
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    })
  ).catch(error =>{
    console.error("Error connecting to database:");
    console.error(error.message);
  }); 
} catch(err){
  Console.Error("Error during startup:");
  Console.Error(err.message);
}