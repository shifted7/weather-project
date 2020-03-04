/* eslint-disable camelcase */
'use strict';

function OpenWeatherTranslation(obj){
  this.city_name = obj.city.name;
  this.date = obj.results.list[0].dt;
  this.latitude = obj.results.city.coord.lat;
  this.longitude = obj.results.city.coord.lon;
  this.temperature = ((obj.results.list[0].main.temp - 273.15) * 9 / 5 + 32);
  this.humidity = obj.results.list[0].main.humidity;
  this.wind_speed = obj.results.list[0].wind.speed;
  this.wind_direction = obj.results.list[0].wind.deg;
  this.description = obj.results.weather[0].description;
  this.api_name = 'openWeather';
  let now = new Date();
  this.date_retrieved = Math.round(now.getTime() / 1000);
}

// eslint-disable-next-line no-undef
module.exports = OpenWeatherTranslation;
