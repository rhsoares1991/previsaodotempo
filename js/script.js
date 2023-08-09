// variaveis e selecao de elementos

const apiKey = "555a1ab81cadc268e500f244d9a79937";
const apiCoutryURL = "https://www.countryflagicons.com/SHINY/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElment = document.querySelector("#city");
const tempElment = document.querySelector("#temperature span");
const descElment = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const umidityElment = document.querySelector("#umidity span");
const windElment = document.querySelector("#wind span");
const weatherContainer = document.querySelector("#weather-dat")


// funcoes

const getWeatherDat = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    
    return data;

}
const showWeatherData = async (city) =>{
    const data = await getWeatherDat(city);

    cityElment.innerText = data.name;
    tempElment.innerText = parseInt(data.main.temp);
    descElment.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    umidityElment.innerText = `${data.main.humidity}%`
    windElment.innerText = `${parseInt(data.wind.speed)}km/h`
    weatherContainer.classList.remove("hidden");
    
}

// eventos
searchBtn.addEventListener("click", (e) => {
    
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
})

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter"){
        const city = e.target.value;
        showWeatherData(city);
    }
})