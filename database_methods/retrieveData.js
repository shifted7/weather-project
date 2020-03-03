
const client = require('../libs/client');

function getWeatherData(location){
  let sql = 'SELECT * FROM locations WHERE location_name=$1;';

  let vals = [location];

  client.query(sql, vals).then(data => {return data;} );
}

module.exports = getWeatherData;
