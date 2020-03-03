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
  console.log('hello world');
  getOpenWeatherData(request, response);
  getDarkSkyWeatherData(request, response);
  response.render('./pages/index');
}


function getOpenWeatherData(request, response){
  let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${process.env.OPEN_WEATHER_API_KEY}`; // need to allow for different locations, getting location from user
  superagent(url)
    .then(results=>{
      console.log(results[0]);
      // need to render results
    })
}

function getDarkSkyWeatherData(request, response){
  console.log(request.query);
  //let location = request.query
  // let url = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_STACK_API_KEY}&query=${location}`;
}

module.exports = {handleHome, getOpenWeatherData};
