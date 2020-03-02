'use strict';

function handleHome(){
  console.log('hello world');
  getOpenWeatherData();
}

function getOpenWeatherData(){
  let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${process.env.OPEN_WEATHER_API_KEY}`
  superagent(url)
    .then(results=>{
      console.log(results);
    })
}

module.exports = {handleHome, getOpenWeatherData};