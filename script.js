function getWeather() {
    var locationInput = document.getElementById("locationInput").value;
    var apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        var locationInfo = document.getElementById("locationInfo");
        locationInfo.innerHTML = `<p>Weather in ${data.name}, ${data.sys.country}</p>`;
        
        var weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `
            <h2>${data.weather[0].main}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    })
    .catch(error => {
        console.error('Error:', error);
        var weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = "<p>Sorry, couldn't fetch weather data. Please try again later.</p>";
    });
}
