

const express = require ('express');
const app = express();
require('dotenv').config();
const superagent = require ('superagent');

app.use(express.urlencoded({extended: true,}));
app.use(express.static('./public'));
app.set('view engine', 'ejs');

function handleHome(request, response){
  console.log('hello world');
  getOpenWeatherData();
  response.render('./pages/index');
}

function getOpenWeatherData(){
  let url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${process.env.OPEN_WEATHER_API_KEY}`;
  superagent(url)
    .then(results=>{
      console.log(results);
    });
}

module.exports = {handleHome, getOpenWeatherData,};
