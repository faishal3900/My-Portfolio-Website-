
let apikey = "5fa1955e2b54d9930eba69f9404a6be8";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q= ";
let searchBox = document.querySelector(".search input")
let searchBtn = document.querySelector(".search button")
let weatherImg = document.querySelector(".weather-img")
async function checkweather(city) {
    let response = await fetch(apiurl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    } else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherImg.src = "images/clouds.png";

        } else if (data.weather[0].main == "Clear") {
            weatherImg.src = "images/clear.png";

        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "images/rain.png";

        } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "images/drizzle.png";

        } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }


}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})