'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
require('ejs');
const cors = require('cors');
app.use(cors());

const superagent = require('superagent');

app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

function handleHome(request, response){
  console.log('hello world');
  getOpenWeatherData(request, response);
  getDarkSkyWeatherData(request, response);
  response.render('./pages/index');
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
    })
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
    })
  let url = `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=${process.env.WEATHERISHERE_API_KEY}&product=forecast_7days_simple&latitude=${latitude}&longitude=${longitude}`;
  superagent.get(url)
    .then(results=>{
      console.log(results.body);
    });
    .catch(error=>{
      console.error('Did not get results from weatherishere: ', error);
      response.status(500).send(error)
    })
};

function getDarkSkyWeatherData(request, response){
  console.log(request.query);
  //let location = request.query
  // let url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${location}`;
}

module.exports = {handleHome, getOpenWeatherData};