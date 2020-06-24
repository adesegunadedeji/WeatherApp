import axios from 'axios';


const URL = `https://api.openweathermap.org/data/2.5/weather`;

const API = `${process.env.REACT_APP_WEATHER}`;

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL,{
        params: {
            q: query,
            units:'metric',
            APPID: API,
        }
    });
    return data;
}