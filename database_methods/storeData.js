
const client = require('../libs/client');

function storeWeatherData(user, location, obj){
  let sql = 'INSERT INTO locations (user_name, location_name, weather_data) VALUES ($1, $2, $3) ON CONFLICT (location_name) DO UPDATE SET weather_data=$3;';

  let vals = [user, location, obj];

  client.query(sql, vals)
    .then( data => {
      console.log('new data inserted in to id:', data);
    });
}

module.exports = storeWeatherData;
