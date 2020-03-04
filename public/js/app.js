'use strict';

let getWeatherButton = $('#getWeatherButton');

$(getWeatherButton).on('click', getWeather);

function getWeather(event){
  let getWeatherInput = $('input').val();
  console.log(getWeatherInput);

  // add ajax call with query to '/'
  $.ajax(`/darksky?input=${getWeatherInput}`, {method: 'GET', dataType:'JSON',})
    .then(darkskyresponse =>{
      // console.log('hello');
      console.log(typeof(darkskyresponse));
      // darkskyresponse = JSON.parse(darkskyresponse);
      console.log('response', darkskyresponse);
      let source = document.getElementById('entry-template').innerHTML;
      console.log('1');
      let template = Handlebars.compile(source);
      console.log('2');
      let card = template(darkskyresponse[0]);
      console.log('3');
      $('#forecast').append(card);
      console.log('4');
      console.log('Dark sky response recieved', darkskyresponse);
    });
  // $.ajax(`/today/?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
  //   .then(ajaxResponse => {
  //     console.log('Ajax response recieved:', ajaxResponse);
  //   });
}

