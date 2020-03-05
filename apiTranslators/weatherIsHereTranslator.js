/* eslint-disable camelcase */
'use strict';

function WeatherIsHereTranslation(obj){
  this.city_name = obj.dailyForecasts.forecastLocation.city;
  this.date = Math.floor(new Date(obj.dailyForecasts.forecastLocation.forecast[0].utcTime) / 1000);
  this.latitude = obj.dailyForecasts.forecastLocation.latitude;
  this.longitude = obj.dailyForecasts.forecastLocation.longitude;
  this.temperature = (obj.dailyForecasts.forecastLocation.forecast[0].highTemperature * 9 / 5) + 32;
  this.humidity = obj.dailyForecasts.forecastLocation.forecast[0].humidity;
  this.wind_speed = obj.dailyForecasts.forecastLocation.forecast[0].windSpeed;
  this.wind_direction = obj.dailyForecasts.forecastLocation.forecast[0].windDirection;
  this.description = obj.dailyForecasts.forecastLocation.forecast[0].description;
  this.api_name = 'weatherIsHere';
  let now = new Date();
  this.date_retrieved = Math.round(now.getTime() / 1000);
}

// eslint-disable-next-line no-undef
module.exports = WeatherIsHereTranslation;
