document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '57ee9310f8bc8a8ebf7b25891004cbfa';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.cod === 200) {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                document.getElementById('weatherResult').innerHTML = 
                    `<p>Temperature: ${temp}°C</p>
                     <p>Condition: ${description}</p>`;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p>Error fetching data</p>`;
            console.error(error);
        });
});
