'use strict';

function DarkSkyTranslator(obj, city, lat, lon){
  this.city_name = city;
  this.date = obj.time;
  this.latitude = lat;
  this.longitude = lon;
  this.temperature = obj.temperatureHigh;
  this.humidity = obj.humidity * 100;
  this.wind_speed = obj.windSpeed;
  this.wind_direction = obj.windBearing;
  this.description = obj.summary;
  this.api_name = 'darkSky';
  this.date_modified = new Date();
}

module.exports = DarkSkyTranslator;
