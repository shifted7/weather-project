'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
require('ejs');
const cors = require('cors');
app.use(cors());

const superagent = require('superagent');

app.use(express.urlencoded({extended: true,}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

function handleHome(request, response){
  console.log('Returned home');
  let data = {temp: 0, windSpeed: 0, windDir: 0, desc: 'none'}; // dummy values
  response.render('./pages/index', {obj: data});
}

function handleToday(request, response){
  console.log(request.query);
  getOpenWeatherData(request, response);
  getDarkSkyWeatherData(request, response);
}

function handleForecast(request, response){
  console.log(request.query);
};


function getOpenWeatherData(request, response){
  // let cityNameQuery = request.query.input;
  let cityNameQuery = 'seattle';
  let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityNameQuery}&mode=json&units=metric&cnt=7&APPID=${process.env.OPEN_WEATHER_API_KEY}`; // need to allow for different locations, getting location from user
  superagent(url)
    .then(results=>{
      console.log(results);
      // need to render results
    });
}

function getWeatherIsHereData(request, response){
  let cityQuery = request.query.input;
  let url = `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=${process.env.WEATHERISHERE_API_KEY}`;
}

function getDarkSkyWeatherData(request, response){
  console.log(request.query);
  //let location = request.query
  // let url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${location}`;
}



module.exports = {handleHome, handleToday, handleForecast};
