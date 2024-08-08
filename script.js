const apiKey = "d1949084dd4db98597458a627dce4dd4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city+ `&appid=${apiKey}`)

    if(response.status== 404){
        document.querySelector(".error").style.display= "block";
        document.querySelector(".welcome").style.display= "none";
        document.querySelector(".weather").style.display= "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML= data.wind.speed + " km/h";
        document.querySelector(".feels-like").innerHTML= "Feels Like " + Math.round(data.main.feels_like) + " °C";

        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "images/drizzle.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".welcome").style.display = "none";
        document.querySelector(".error").style.display= "none";

    }

    
}

    searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
