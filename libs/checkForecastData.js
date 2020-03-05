'use strict';

function checkForecastDataIsRecent(forecastData){
  const millisecondsInOneDay = 86400000;
  if(forecastData.length){
    let mostRecentForecast =forecastData[forecastData.length-1];
    if(new Date().getTime() - mostRecentForecast.date_retrieved <= millisecondsInOneDay){
      return true;
    } else{
      return false;
    }
  }
  return null;
}

module.exports = checkForecastDataIsRecent;