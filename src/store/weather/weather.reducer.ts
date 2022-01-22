import {
  WeatherState,
  StoreActionsType,
  WeatherTypes,
  WeatherLoadedAction
} from "./weather.types";

const initState: WeatherState = {
  loading: false,
  selectedCountry: "",
  weather: null,
  countries: []
};

const storeReducer = (
  state = initState,
  action: StoreActionsType
): WeatherState => {
  switch (action.type) {
    case WeatherTypes.LOAD_WEATHER:
      return { ...state, loading: true };

    case WeatherTypes.LOADED_WEATHER: {
      const data = (action as WeatherLoadedAction).payload;
      return {
        ...state,
        weather: data,
        loading: false
      };
    }

    case WeatherTypes.LOADED_COUNTRIES: {
      return {
        ...state,
        countries: action.payload
      };
    }

    default:
      return state;
  }
};

export default storeReducer;
