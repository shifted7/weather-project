/* eslint-disable no-undef */
'use strict';

// eslint-disable-next-line no-undef
const superagent = require('superagent');
// eslint-disable-next-line no-undef
require('dotenv');

function darkSkyForecast(cityName){

  return new Promise(function(resolve, reject) {
    let lociqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API}&q=${cityName}&format=json`;
    superagent.get(lociqUrl)
      .then(data => {
        let latitude = data.body[0].lat;
        let longitude = data.body[0].lon;
        let darkUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${latitude},${longitude}`;

        superagent.get(darkUrl)
          .then( forecast => {
            if(forecast){
              resolve({data:forecast.body.daily.data[0], lat:latitude, lon:longitude,});
            } else {
              reject(Error('It Broke'));
            }
          });
      });

  });
}

module.exports = darkSkyForecast;
