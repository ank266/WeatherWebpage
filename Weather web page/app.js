// html classes assigned to variables
var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');

//act on the click of the submit button
button.addEventListener('click', function(name){

// check to see if the user entered a value
if(input.value === null || input.value === ''){
    alert("Please enter a value.");
    throw("No argument!");
}

// access the api site with the given argument
fetch('')
.then(response => response.json())
.then(data => {

  // get the values from the api and give them to the html variables to display
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  celsiusTemp = (tempValue-273.15).toFixed(2)
  fahrenhritTemp = ((celsiusTemp * (9/5)) + 32).toFixed(2)
  temp.innerHTML = celsiusTemp + "°C &nbsp &nbsp &nbsp" + tempValue + "K &nbsp &nbsp &nbsp" + fahrenhritTemp + "°F";

  //reset the input value after result is displayed
  input.value ="";

})

// throw error if the city name is not found
.catch(err => alert("City name not found."));
})

