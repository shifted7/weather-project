/* eslint-disable camelcase */
'use strict';

function DarkSkyTranslator(obj){
  this.city_name = obj.city;
  this.date = obj.date;
  this.latitude = obj.lat;
  this.longitude = obj.lon;
  this.temperature = obj.temp;
  this.humidity = (obj.humidity * 100);
  this.wind_speed = obj.windSpeed;
  this.wind_direction = obj.windDir;
  this.description = obj.desc;
  this.api_name = 'darkSky';
  this.date_modified = new Date();
}

// eslint-disable-next-line no-undef
module.exports = DarkSkyTranslator;
