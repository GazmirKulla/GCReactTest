import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { RootState } from "../../store/store";
import {
  loadWeather,
  loadCountries
} from "../../store/weather/weather.actions";
import { LobbyWrapper } from "./style";

const Weather = () => {
  const dispatch = useDispatch();

  const { weather } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(loadWeather({ country: "Tirana" }));
    dispatch(loadCountries());
  }, [dispatch]);

  console.log(weather);

  return <LobbyWrapper>fdfsfdfdsfsdfds</LobbyWrapper>;
};

export default Weather;
