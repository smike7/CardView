
const myForm = document.getElementById('myForm');
var input= document.querySelector('#city-input'); 
var city= document.querySelector('#city'); 
var weather= document.querySelector('#weather');
var currentTemp= document.querySelector('#current');
var wind= document.querySelector('#wind');
var humidity= document.querySelector('#humidity');
var pressure= document.querySelector('#pressure');
var weatherImage = document.querySelector('#weather-image');
//Open weather API key: 
const apiKey= '9e6b260a5ec559070d0275bf6961fc5f'; 


//Button Event listener 'click' 
myForm.addEventListener('submit', function(e){
  //auto sumbision of the form  
  e.preventDefault() 


    //------------------- API CALL ----------------//
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${apiKey}`)
    .then(function(response){ return response.json()})
    .then(function(data){

      console.log(data)
      const city = data.name; 
      const weather= data.weather[0].description;
      const temp= Math.floor(data.main.temp);
  
      const wind=data.wind.speed;  
      const pressure=Math.floor(data.main.pressure); 
      const humidity= Math.floor(data.main.humidity); 
      window.city.innerHTML= city;
      window.weather.innerHTML= weather; 
      window.currentTemp.innerHTML= `${temp}<sup>°</sup>`; 
      window.wind.innerHTML=`Wind ${wind} m/s` ;
      window.humidity.innerHTML=`Humidity ${humidity} %`;
      window.pressure.innerHTML=`pressure ${pressure} hPas`; 
      const newImage = "assets/"+changeWeatherImage(data.weather[0].id)
      window.weatherImage.src = newImage.replace(/\s/g, '')
    })
    .catch(error => console.log('ERROR CAUGHT'))

    // ------------------- CLEAR CARD SearchBar----------------//
    input.value = '';
});

function changeWeatherImage(id) { 
  if(id >= 200 && id <= 232){
    return 'thunderstorm.png'
  }else if (id >= 300 && id <= 531){
    return 'raining.png'
  }else if (id >= 600 && id <= 622){
    return 'snowing.png'
  }else if (id == 800){
    return 'sunny.png'
  }else if (id >= 801 && id <= 804){
    return 'cloudy.png'
  }else{
    return 'cloudy.png'
  }
}