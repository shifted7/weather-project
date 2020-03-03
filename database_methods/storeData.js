
'use strict';

// eslint-disable-next-line no-undef
const client = require('../libs/client');

function storeWeatherData(obj){
  let sql = 'INSERT INTO locations (city_name, date_stamp, latitude, longitude, temperature, humidity, wind_speed, wind_direction, descrption, api_name, date_retrieved) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;';

  let vals = [obj.city_name, obj.date, obj.latitude, obj.longitude, obj.temperature, obj.humidity, obj.wind_speed, obj.wind_direction, obj.description, obj.api_name, obj.date_retrieved];

  client.query(sql, vals)
    .then( data => {
      console.log('new data inserted in to id:', data);
    });
}

// eslint-disable-next-line no-undef
module.exports = storeWeatherData;
