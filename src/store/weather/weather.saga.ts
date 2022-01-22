import { all, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { getWeather, getCountries } from "../../api/index";
import { WeatherTypes } from "./weather.types";

function* loadWeather(props) {
  try {
    const data = yield getWeather(props.payload);

    yield put({
      type: WeatherTypes.LOADED_WEATHER,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}

function* loadCountries() {
  try {
    const data = yield getCountries();

    yield put({
      type: WeatherTypes.LOADED_COUNTRIES,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
}

export default function* storesSaga(): Generator<StrictEffect, void> {
  yield all([takeEvery(WeatherTypes.LOAD_WEATHER, loadWeather)]);
  yield all([takeEvery(WeatherTypes.LOAD_COUNTRIES, loadCountries)]);
}
