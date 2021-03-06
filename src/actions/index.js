import axios from 'axios';

const OPEN_WEATHER_API_KEY = 'xxxxxxxxxxxxxxx';
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${OPEN_WEATHER_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}