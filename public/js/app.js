'use strict';

let getWeatherButton = $('#getWeatherButton');

$(getWeatherButton).on('click', getWeather);

function getWeather(event){
  let getWeatherInput = '';

  if(event.target.id === 'query'){
    getWeatherInput = $(event.target).parent().find('span').text();
  }else{
    getWeatherInput = $('input').val();
  }

  $('.entry').remove();

  console.log(getWeatherInput);
  // add ajax call with query to '/'
  $.ajax(`/today/openWeather?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
    .then(ajaxResponse => {
      console.log('openWeather response recieved:', ajaxResponse);
      let source = $('#entry-template').html();
      let template = Handlebars.compile(source);
      let card = template(ajaxResponse);
      $('#apiCards').append(card);
      console.log('OpenWeather response rendered', ajaxResponse);
    });

  $.ajax(`/today/isHere?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
    .then(ajaxResponse => {
      console.log('isHere response recieved:', ajaxResponse);
      let source = $('#entry-template').html();
      let template = Handlebars.compile(source);
      let card = template(ajaxResponse);
      $('#apiCards').append(card);
      console.log('IsHere response rendered', ajaxResponse);
    });

  $.ajax(`/today/darkSky?input=${getWeatherInput}`, {method: 'GET', dataType:'JSON',})
    .then(ajaxResponse =>{
      console.log('darkSky response recieved:', ajaxResponse);
      let source = $('#entry-template').html();
      let template = Handlebars.compile(source);
      let card = template(ajaxResponse);
      $('#apiCards').append(card);
      console.log('Dark sky response rendered', ajaxResponse);
    });
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

$(function() {
  $('.delete').click(function(){
    let cityVal = $(event.target).parent().find('span').text();

    $.ajax(`delete/${cityVal}`, {method:'DELETE', dataType:'JSON',})
      .then( data => {
        console.log(data);
        console.log(`removed ${cityVal} from database`);
        location.reload();
      });
  });

  $('.query').click(getWeather);

  // Call out forecast element
  // .focus(callback)
  // grab forecast children,
  //  loop through them,
  //  grab specific child elements,
  //  do Math,
  //  then append

  $('#apiCards').focus(function(){
    let cards = $('.entry');
    let humidity = 0;
    let temperature = 0;
    let windspeed = 0;
    cards.forEach(card =>{
      temperature += card.find('.temp').text();

    });
    temperature = temperature / cards.length;
    console.log(temperature);
    let obj = {'temp': temperature,};
    let source = $('#averageCard').html();
    let template = Handlebars.compile(source);
    let card = template(card);
    $('#avgCard').find('.average').remove();
    $('#avgCard').append(card);
  });


});
