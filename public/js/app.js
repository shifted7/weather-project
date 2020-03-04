'use strict';

let getWeatherButton = $('#getWeatherButton');

$(getWeatherButton).on('click', getWeather);

function getWeather(event){
  let getWeatherInput = $('input').val();
  console.log(getWeatherInput);

  // add ajax call with query to '/'
  $.ajax('')
  $.ajax(`/today/?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
    .then(ajaxResponse => {
      console.log('Ajax response recieved:', ajaxResponse);
    });
}
