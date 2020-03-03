'use strict';

function WeatherIsHereTranslation(obj){
  this.city_name = obj.obseravations.location[0].city;
  this.date = obj.observations.observation[0].utcTime;
  this.latitude = obj.observations.location[0].latitude;
  this.longitude = obj.observations.location[0].longitude;
  this.temperature = obj.observations.observation[0].temperature;
  this.humidity = obj.observations.observation[0].humidity;
  this.wind_speed = obj.obseravations.observation[0].windSpeed;
  this.wind_direction = obj.observations.observation[0].windDirection;
  this.description = obj.observations.observation[0].description;
  this.api_name = 'weatherIsHere';
  this.date_retrieved = new Date();
}
