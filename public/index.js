const cityInput = document.querySelector('#input-city');
const searchBtn = document.querySelector('#search-btn');

const cityName = document.getElementById('city-name');
const dateElement = document.getElementById('date');
const tempValue = document.getElementById('temp-item-value');
const condValue = document.getElementById('cond-item-value');
const humidityValue = document.getElementById('humidity-item-value');
const windValue = document.getElementById('wind-item-value');

const savedCitiesContainer = document.getElementById('saved-cities-container');
const savedCitiesList = document.getElementById('saved-cities-list');
const closeBtn = document.getElementById('close-btn');

// Retrieve previously saved cities from local storage or initialize an empty array
let searchedCities = JSON.parse(localStorage.getItem('searchedCities')) || [];

async function getWeather(city) {
    try {
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();

        if (data.error) {
            alert(data.error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
        return null;
    }
}

async function updateWeather(city) {
    const weatherData = await getWeather(city);

    if (!weatherData) return;

    const {
        name: country,
        main: { temp, humidity },
        weather: [{ main }],
        wind: { speed }
    } = weatherData;

    cityName.textContent = country;
    tempValue.textContent = Math.round(temp) + ' °C';
    condValue.textContent = main;
    humidityValue.textContent = humidity + ' %';
    windValue.textContent = speed + ' M/s';

    addToCityList(country);
}

function displayCurrentDate() {
    const date = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    document.getElementById('date').textContent = date.toLocaleDateString('en-US', options);
}

displayCurrentDate();

// function to show the saved cities popup
function showSavedCities() {
    savedCitiesContainer.classList.remove('hidden');
    updateCityList();
}

// function to hide the saved cities popup
closeBtn.addEventListener('click', () => {
    savedCitiesContainer.classList.add('hidden');
});

// update the list of saved cities
function updateCityList() {
    savedCitiesList.innerHTML = '';
    searchedCities.forEach((city) => {
        const li = document.createElement('li');
        li.textContent = city;
        li.addEventListener('click', () => {
            updateWeather(city);
            savedCitiesContainer.classList.add('hidden');
        });
        savedCitiesList.appendChild(li);
    });
}

// add a city to the saved list and update localStorage
function addToCityList(city) {
    if (!searchedCities.includes(city)) {
        searchedCities.push(city);
        localStorage.setItem('searchedCities', JSON.stringify(searchedCities));
        updateCityList();
    }
}

// event listener for the search button
searchBtn.addEventListener('click', () => {
    if (cityInput.value.trim() !== '') {
        const city = cityInput.value.trim();
        updateWeather(city);
        cityInput.value = '';
        cityInput.blur();
    }
});

cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// initialize the saved cities list on page load
updateCityList();

// show the saved cities popup when clicking the search bar
cityInput.addEventListener('focus', showSavedCities);

