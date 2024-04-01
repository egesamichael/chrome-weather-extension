let latitude;
let longitude;
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind")
const getWeatherBtn = document.querySelector(".getWeather");
getWeatherBtn.addEventListener("click", ()=>{

    getLocation()
})

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;


  console.log(latitude+" "+longitude);

  const apiKey = '3d9bddc37f70e90b2ea8c3a1502c8560';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  getWeather(apiUrl);
}

async function getWeather(url){

    const response = await fetch(url);

    let data = await response.json();
    
    tempEl.textContent = Math.round(data.main.temp)+" °C";
    humidityEl.textContent = data.main.humidity+" %";
    windEl.textContent = data.wind.speed+" KM";
    console.log(data);
}
