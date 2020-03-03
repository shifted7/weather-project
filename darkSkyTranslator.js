function DarkSkyTranslator(obj){
  this.temperature = obj.temp;
  this.humidity = obj.humidity;
  this.wind_speed = obj.windSpeed;
  this.wind_speed = obj.windDir;
  this.description = obj.desc;
  this.api_name = obj.api;
  this.date = obj.date;
  this.date_modified = obj.dateModified;
  this.city_name = obj.city;
  this.latitude = obj.lat;
  this.longitude = obj.lon;
}
