
app.get('/weather', (request, response) => {
  let weather = [];
  let lat = request.query.latitude;
  let lon = request.query.longitude;
  let url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${lat},${lon}`;
superagent.get(url)
    .then(results => {
      let wData = results.body.daily.data;
      wData.map(day => {
        let newDay = new Weather(day);
        weather.push(newDay);
      });
      response.status(200).send(weather);
    });
});

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
