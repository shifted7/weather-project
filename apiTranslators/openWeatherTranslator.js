'use strict';

function OpenWeatherTranslator(obj){
  this.city_name = obj.city.name;
  this.date = obj.list[0].dt;
  this.latitude = obj.city.coord.lat;
  this.longitude = obj.city.coord.lon;
  this.temperature = ((obj.list[0].main.temp - 273.15) * 9 / 5 + 32);
  this.humidity = obj.list[0].main.humidity;
  this.wind_speed = obj.list[0].wind.speed;
  this.wind_direction = obj.list[0].wind.deg;
  this.description = obj.weather[0].description;
  this.api_name = 'openWeather';
  this.date_retrieved = new Date();
}