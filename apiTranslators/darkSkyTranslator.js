/* eslint-disable camelcase */
'use strict';

function DarkSkyTranslation(obj, city, lat, lon){
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
  let now = new Date();
  this.date_retrieved = Math.round(now.getTime() / 1000);
}

// eslint-disable-next-line no-undef
module.exports = DarkSkyTranslation;
