/* eslint-disable camelcase */
'use strict';

function OpenWeatherTranslation(obj){
  this.city_name = obj.city.name;
  this.date = obj.list[0].dt;
  this.latitude = obj.city.coord.lat;
  this.longitude = obj.city.coord.lon;
  this.temperature = ((obj.list[0].main.temp - 273.15) * 9 / 5 + 32);
  this.humidity = obj.list[0].main.humidity;
  this.wind_speed = obj.list[0].wind.speed;
  this.wind_direction = obj.list[0].wind.deg;
  this.description = obj.list[0].weather.description;
  this.api_name = 'openWeather';
  let now = new Date();
  this.date_retrieved = Math.round(now.getTime() / 1000);
}

// eslint-disable-next-line no-undef
module.exports = OpenWeatherTranslation;
