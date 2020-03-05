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

const storeWeatherData = require('./database_methods/storeData');
const checkForecastDataIsRecent = require('./libs/checkForecastData.js');

function handleHome(request, response){
  let sql = 'SELECT DISTINCT city_name FROM locations;';
  client.query(sql)
    .then(dbData => {
      response.render('./pages/index', {cities: dbData.rows,});
    });
}

function handleTodayOpenWeatherAPIorDB(request, response){
  let city = request.query.input;
  let sql = 'SELECT * FROM locations WHERE city_name = $1 AND api_name = $2;';
  let safeValues = [city, 'openWeather'];
  client.query(sql, safeValues)
    .then(results => {
      if (results.rows.length > 0){
        if(checkForecastDataIsRecent(results.rows)){
          response.send(results.rows[0]);
        } else{
          getOpenWeatherData(request, response);
        }
      }else {
        getOpenWeatherData(request, response);
      };
    });
};

function handleTodayIsHereAPIorDB(request, response){
  let city = request.query.input;
  let sql = 'SELECT * FROM locations WHERE city_name = $1 AND api_name = $2;';
  let safeValues = [city, 'weatherIsHere'];
  client.query(sql, safeValues)
    .then(results => {
      if (results.rows.length > 0){
        if(checkForecastDataIsRecent(results.rows)){
          response.send(results.rows[0]);
        } else{
          getOpenWeatherData(request, response);
        }
      }else {
        getIsHereWeatherData(request, response);
      }
    });
};



const OpenWeatherTranslation = require('./apiTranslators/openWeatherTranslator');

function getOpenWeatherData(request, response){
  let cityNameQuery = request.query.input;
  let url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityNameQuery}&appid=${process.env.OPEN_WEATHER_API_KEY}`;
  superagent(url)
    .then(results=>{
      let newForecast = new OpenWeatherTranslation(results.body);
      storeWeatherData(newForecast).then( data => {
        response.send(data[0]);
      });
    })
    .catch(error=> {
      console.error('Failed to get results from openweather: ', error);
      response.status(500).send(error);
    });
}


const WeatherIsHereTranslation = require('./apiTranslators/weatherIsHereTranslator');
function getIsHereWeatherData(request, response){
  let cityQuery = request.query.input;
  let lociqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API}&q=${cityQuery}&format=json`;
  return superagent.get(lociqUrl)
    .then(data => {
      let latitude = data.body[0].lat;
      let longitude = data.body[0].lon;
      let url = `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=${process.env.WEATHERISHERE_API_KEY}&product=forecast_7days_simple&latitude=${latitude}&longitude=${longitude}`;
      superagent.get(url)
        .then(results=>{
          let newForecast = new WeatherIsHereTranslation(results.body);
          storeWeatherData(newForecast).then( data => {
            response.send(data[0]);
          });
        })
        .catch(error=>{
          console.error('Did not get results from weatherishere: ', error);
          response.status(500).send(error);
        });
    })
    .catch(error=>{
      console.error('Did not get results from locationIQ: ', error);
      response.status(500).send(error);
    });
}



const darkSkyForecast = require('./apiHandlers/darkSkyHandler');
const DarkSkyTranslation = require('./apiTranslators/darkSkyTranslator');

// Dark Sky endpoint function
function getDarkSkyWeatherData(request, response){
  let city = request.query.input;
  let sql = 'SELECT * FROM locations WHERE city_name=$1 AND api_name=$2 AND $3 - date_retrieved < 84000 LIMIT 1;';
  let today = new Date();
  today = Math.round(today.getTime() / 1000);

  let safeVals = [city, 'darkSky', today];

  client.query(sql, safeVals)
    .then(results => {
      if(results.rows.length > 0){
        let _temp = JSON.stringify(results.rows[0]);
        response.send(_temp);
      }else{
        darkSkyForecast(city).then( data => {
          let darkSky = new DarkSkyTranslation(data.data, city, data.lat ,data.lon );
          storeWeatherData(darkSky)
            .then(payload => {
              response.send(JSON.stringify(payload[0]));
            });

        });
      }
    });
}

module.exports = {handleHome, handleTodayOpenWeatherAPIorDB, handleTodayIsHereAPIorDB, getDarkSkyWeatherData};

