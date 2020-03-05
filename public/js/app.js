'use strict';

let getWeatherButton = $('#getWeatherButton');

$(getWeatherButton).on('click', getWeather);

function getWeather(event){
  let getWeatherInput = $('input').val();
  console.log(getWeatherInput);
  // add ajax call with query to '/'
  $.ajax(`/today/openWeather?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
    .then(ajaxResponse => {
      console.log('openWeather response recieved:', ajaxResponse);
      let source = $('#entry-template').html();
      let template = Handlebars.compile(source);
      let card = template(ajaxResponse);
      $('#forecast').append(card);
      console.log('OpenWeather response rendered', ajaxResponse);
    });

  $.ajax(`/today/isHere?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
    .then(ajaxResponse => {
      console.log('isHere response recieved:', ajaxResponse);
      let source = $('#entry-template').html();
      let template = Handlebars.compile(source);
      let card = template(ajaxResponse);
      $('#forecast').append(card);
      console.log('IsHere response rendered', ajaxResponse);
    });

  $.ajax(`/today/darkSky?input=${getWeatherInput}`, {method: 'GET', dataType:'JSON',})
    .then(ajaxResponse =>{
      console.log('darkSky response recieved:', ajaxResponse);
      let source = $('#entry-template').html();
      let template = Handlebars.compile(source);
      let card = template(ajaxResponse);
      $('#forecast').append(card);
      console.log('Dark sky response rendered', ajaxResponse);
    });
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

