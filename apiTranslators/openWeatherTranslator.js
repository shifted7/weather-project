/* eslint-disable camelcase */
'use strict';

function OpenWeatherTranslation(obj){
  this.city_name = obj.userInput;
  this.date = obj.results.list[0].dt;
  this.latitude = obj.results.city.coord.lat;
  this.longitude = obj.results.city.coord.lon;
  this.temperature = ((obj.results.list[0].main.temp - 273.15) * 9 / 5 + 32);
  this.humidity = obj.results.list[0].main.humidity;
  this.wind_speed = obj.results.list[0].wind.speed;
  this.wind_direction = obj.results.list[0].wind.deg;
  this.description = obj.results.weather[0].description;
  this.api_name = 'openWeather';
  this.date_retrieved = new Date();
}

// eslint-disable-next-line no-undef
module.exports = OpenWeatherTranslation;
