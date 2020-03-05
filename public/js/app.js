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
  winpops.document.write('<div id="content">' + content + '</div>');
}

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

});
