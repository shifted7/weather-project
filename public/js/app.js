'use strict';

let getWeatherButton = $('#getWeatherButton');

$(getWeatherButton).on('click', getWeather);

function getWeather(event){
  let getWeatherInput = $('input').val();
  console.log(getWeatherInput);
  // add ajax call with query to '/'
  // $.ajax('')
//   $.ajax(`/current/?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
//     .then(bananas => {
//       console.log(bananas);
//     });
// }
