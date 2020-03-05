/* eslint-disable no-undef */
'use strict';

// eslint-disable-next-line no-undef
const superagent = require('superagent');
// eslint-disable-next-line no-undef
require('dotenv');

function darkSkyForecast(cityName){

  return new Promise(function(resolve, reject) {
    let lociqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.LOCATIONIQ_API}&q=${cityName}&format=json`;
    // console.log('loc', lociqUrl);
    superagent.get(lociqUrl)
      .then(data => {
        console.log('loqIQ', data.body[0]);
        let latitude = data.body[0].lat;
        let longitude = data.body[0].lon;
        let darkUrl = `https://api.darksky.net/forecast/${process.env.DARKSKY_API}/${latitude},${longitude}`;

        superagent.get(darkUrl)
          .then( forecast => {
            console.log('totheFORE', forecast.body.daily.data[0]);
            if(forecast){
              resolve({data:forecast.body.daily.data[0], lat:latitude, lon:longitude,});
            } else {
              reject(Error('It Broke'));
            }
          });
      });

  });
}


// `https://us1.locationiq.com/v1/search.php?key=48c62288f572558fa4b4bcd0c31979eb&q=seattle&format=json`

// 48c62288f572558fa4b4bcd0c31979eb
// 47.608013,-122.335167
// https://api.darksky.net/forecast/18a3b8ded8310e8cfabdfa767c100cdd/47.608013,-122.335167

module.exports = darkSkyForecast;
