// // const API = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=pl&format=json`
// https://api.open-meteo.com/v1/forecast?latitude=50.25841&longitude=19.02754&current=temperature_2m,wind_speed_10m,relative_humidity_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto

const form = document.querySelector('#form');
const cityInput = document.querySelector('#city');
const btn = document.querySelector('#btn');
const statusBox = document.querySelector('#status');
const result = document.querySelector('#result');
const selectDays = document.querySelector('#dayCounts');


async function getCityData(city) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=pl&format=json`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} for city: ${city}`);
    }
    const data = await response.json();
    const result = data.results[0];

    return {
        latitude: result.latitude,
        longitude: result.longitude,
        label: `${result.name}, ${result.admin1}`,
    };
}

async function getForecast(lat, lon) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,relative_humidity_2m,precipitation&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} for lat: ${lat} lon: ${lon}`);
    }
    const data = await response.json();
    return data;
}

function getStatus(message) {
    statusBox.textContent = message;
}

function renderUi(city, data, dayCounts) {
    getStatus(`Pogoda dla miasta: ${city}`);

    const curr = data.current;
    const daily = data.daily;
    
    // jednostki
    const temperatureUnits = data.current_units.temperature_2m;
    const windUnits = data.current_units.wind_speed_10m;
    const precipitationUnits = data.current_units.precipitation;
    const humidityUnits = data.current_units.relative_humidity_2m;

    const nowHTML  = `
        <h2>${city}</h2>
        <p>Temperatura: ${curr.temperature_2m} ${temperatureUnits}</p>
        <p>wiatr: ${curr.wind_speed_10m} ${windUnits}</p>
        <p>Wilgotnosc: ${curr.relative_humidity_2m} ${humidityUnits}</p>
        <p>Opady: ${curr.precipitation} ${precipitationUnits}</p>
        `
      let daysHTML = `<div><h3>Prognoza na ${dayCounts} dni</h3></div>`;

      for(let i=0; i< dayCounts; i++) {
        daysHTML += `
        <div style="border:1px solid #ccc; margin:5px; padding:5px;">
            <p><b> Dzien: ${daily.time[i]} ${temperatureUnits}</b></p>
            <p>Temperatura max: ${daily.temperature_2m_max[i]} ${temperatureUnits}</p>
            <p>Temperatura min: ${daily.temperature_2m_min[i]} ${temperatureUnits}</p>
            <p>Opady: ${daily.precipitation_sum[i]} ${precipitationUnits}</p>
        </div>
            `

       }
    result.innerHTML = nowHTML + daysHTML;
}

// obsluga formularza
form.addEventListener('submit',  (e) => { 
    e.preventDefault();
    const city = cityInput.value.trim();
    const dayCounts = Number(selectDays.value);
    if(!city) return;
    
    btn.disabled = true;
    getStatus(`Szukam miasta ${city}... i pobieram dane...`);

    getCityData(city).then(cityData => {
       return getForecast(cityData.latitude, cityData.longitude).then(forecast => {
        renderUi(cityData.label, forecast, dayCounts)
           return forecast;
       });
    }).finally(() => { 
        btn.disabled = false;
    })
});


// //obsluga formularza - async/await
// form.addEventListener('submit', async (e) => { 
//     e.preventDefault();
//     const city = cityInput.value.trim();

//     if(!city) return;
    
//     btn.disabled = true;
//     getStatus(`Szukam miasta ${city}... i pobieram dane...`);

//     const cityData = await getCityData(city);
//     console.log(cityData);
//     const forecastData = await getForecast(cityData.latitude, cityData.longitude);
//     console.log(forecastData);
// });


