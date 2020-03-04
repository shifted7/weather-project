'use strict';

let getWeatherButton = $('#getWeatherButton');

$(getWeatherButton).on('click', getWeather);

function getWeather(event){
  let getWeatherInput = $('input').val();
  console.log(getWeatherInput);
  // add ajax call with query to '/'
  $.ajax(`/today/openWeather/?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
    .then(ajaxResponse => {
      console.log('Ajax response recieved:', ajaxResponse);
    });

  $.ajax(`/today/isHere/?input=${getWeatherInput}`, {method:'GET', dataType:'JSON',})
    .then(ajaxResponse => {
      console.log('Ajax response recieved:', ajaxResponse);
    });
  
  $.ajax(`/today/darkSky?input=${getWeatherInput}`, {method: 'GET', dataType:'JSON',})
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
}


// When element .element clicked
$('.element').click(function(e){
  // Set the content in a variable
  // This can be dynamically generated from elements on the page
  // E.g. var content = $('#textarea').val(); - This will grab the value of a form element with the ID #textarea
  // OR var content = $('#div').html(); - Will get the content from a div with the ID #div

  // Satic text content for this example
  var content = '<div class="popup-content">This is some amazing content!</div>';

  // Call the function to open the popup with the content from var = content
  openPopup(content);
});
// Function to open the popup
// Setup - URL,name,specs,replace
function openPopup(content){
  winpops = window.open('','Popup Name','fullscreen=no, toolbar=yes, status=yes, menubar=yes, scrollbars=yes, resizable=yes, directories=yes, location=yes, width=500, height=400, left=100, top=100, screenX=100, screenY=100');
  // Write the content to the popup
  winpops.document.write('<div id="content">'+content+'</div>');
}

