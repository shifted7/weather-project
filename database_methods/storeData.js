
'use strict';

// eslint-disable-next-line no-undef
const client = require('../libs/client');

function storeWeatherData(obj){

  return new Promise(function(resolve, reject) {

    let sql = 'INSERT INTO locations (city_name, date_stamp, latitude, longitude, temperature, humidity, wind_speed, wind_direction, description, api_name, date_retrieved) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) ON CONFLICT (city_name, api_name) DO UPDATE SET date_stamp=$2, temperature=$5, humidity=$6, wind_speed=$7, wind_direction=$8, description=$9, date_retrieved=$11 RETURNING *;';

    let vals = [obj.city_name, obj.date, obj.latitude, obj.longitude, obj.temperature, obj.humidity, obj.wind_speed, obj.wind_direction, obj.description, obj.api_name, obj.date_retrieved];


    client.query(sql, vals)
      .then( data => {

        if(data){
          console.log('new data inserted in to id:', data.rows);
          resolve(data.rows);
        }else{
          reject('No query return');
        }
      });
  });
}

// eslint-disable-next-line no-undef
module.exports = storeWeatherData;
