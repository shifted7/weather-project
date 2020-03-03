/* eslint-disable camelcase */
'use strict';

function WeatherIsHereTranslation(obj){
  this.city_name = obj.obseravations.location[0].city;
  this.date = Math.floor(new Date(obj.observations.observation[0].utcTime) / 1000);
  this.latitude = obj.observations.location[0].latitude;
  this.longitude = obj.observations.location[0].longitude;
  this.temperature = (obj.observations.observation[0].temperature * 9 / 5) + 32;
  this.humidity = obj.observations.observation[0].humidity;
  this.wind_speed = obj.obseravations.observation[0].windSpeed;
  this.wind_direction = obj.observations.observation[0].windDirection;
  this.description = obj.observations.observation[0].description;
  this.api_name = 'weatherIsHere';
  this.date_retrieved = new Date();
}

// eslint-disable-next-line no-undef
module.exports = WeatherIsHereTranslation;
