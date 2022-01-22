import { WeatherTypes, WeatherLoadAction } from "./weather.types";

const loadWeather = ({ country }): WeatherLoadAction => {
  return {
    type: WeatherTypes.LOAD_WEATHER,
    payload: { country }
  };
};

const loadCountries = () => {
  return {
    type: WeatherTypes.LOAD_COUNTRIES
  };
};

export { loadWeather, loadCountries };
