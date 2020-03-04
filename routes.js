'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
require('ejs');
const cors = require('cors');
app.use(cors());
const client = require('./libs/client');

const superagent = require('superagent');

app.use(express.urlencoded({extended: true,}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

function handleHome(request, response){
  console.log('Returned home');
  let sql = 'SELECT DISTINCT city_name FROM locations;';
  client.query(sql)
    .then(dbData => {
      console.log(dbData.rows);
      let data = {temp: 0, windSpeed: 0, windDir: 0, desc: 'none'}; // dummy values
      response.render('./pages/index', {obj: data, cities: dbData.rows});
    });
}

function handleToday(request, response){
  console.log('Query:', request.query);
  let city = request.query.input;
  let sql = 'SELECT * FROM locations WHERE city_name = $1;';
  let safeValues = [city];
  client.query(sql, safeValues)
    .then(results => {
      if (results.rows.length>0){
        response.send(results.rows);
      }else {
        // getOpenWeatherData(request, response);
        getDarkSkyWeatherData(request, response);

      }
    });
}

function handleForecast(request, response){
  console.log(request.query);
}


function getOpenWeatherData(request, response){
  let cityNameQuery = request.query.input;
  //let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityNameQuery}&mode=json&units=metric&cnt=7&APPID=${process.env.OPEN_WEATHER_API_KEY}`; // need to allow for different locations, getting location from user
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityNameQuery}&appid=${process.env.OPEN_WEATHER_API_KEY}`;
  superagent(url)
    .then(results=>{
      console.log(results.body);
      // need to render results
    })
    .catch(error=> {
      console.error('Failed to get results from openweather: ', error);
      response.status(500).send(error);
    });
}

function getWeatherIsHereData(request, response){
  let cityQuery = request.query.input;
  let lociqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API}&q=${cityQuery}&format=json`;
  let latitude = null;
  let longitude = null;

  superagent.get(lociqUrl)
    .then(data => {
      latitude = data[0].lat;
      longitude = data[0].lon;
    });
  let url = `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=${process.env.WEATHERISHERE_API_KEY}&product=forecast_7days_simple&latitude=${latitude}&longitude=${longitude}`;
  superagent.get(url)
    .then(results=>{
      console.log(results.body);
    });
  // .catch(error=>{
  //   console.error('Did not get results from weatherishere: ', error);
  //   response.status(500).send(error)
  // })
}

function getDarkSkyWeatherData(request, response){
  console.log(request.query);
  let city = request.query.input;

  const darkSkyForecast = require('./apiHandlers/darkSkyHandler');
  const darkSkyTranslator = require('./apiTranslators/darkSkyTranslator');
  const storeWeatherData = require('./database_methods/storeData');
  // let darkSky = new Promise(darkSkyForecast)



  darkSkyForecast(city).then( data => {
    console.log(data);
    let darkSky = new darkSkyTranslator(data.data, data.lat ,data.lon );
    console.log('Dark Sky:',darkSky);
    // storeWeatherData(darkSky.data);
    response.send(darkSky);
  });

  //let location = request.query
  // let url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${location}`;
}



module.exports = {handleHome, handleToday, handleForecast};
