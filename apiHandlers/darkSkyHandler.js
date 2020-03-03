'use strict';

// eslint-disable-next-line no-undef
const superagent = require('superagent');
// eslint-disable-next-line no-undef
require('dotenv');

function darkSkyForecast(cityName){

  let lociqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API}&q=${cityName}&format=json`;

  superagent.get(lociqUrl)
    .then(data => {
      let latitude = data[0].lat;
      let longitude = data[0].lon;
      let darkUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${latitude},${longitude}`;

      superagent.get(darkUrl)
        .then( weatherData => {
          return weatherData;
        });
    });
}


// `https://us1.locationiq.com/v1/search.php?key=48c62288f572558fa4b4bcd0c31979eb&q=seattle&format=json`

// 48c62288f572558fa4b4bcd0c31979eb
// 47.608013,-122.335167

module.exports = darkSkyForecast;
