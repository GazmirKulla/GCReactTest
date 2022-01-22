import React from "react";
import { v4 as uuid } from "uuid";
import { Title } from "./style";

const WeatherCard = (props) => {
  const { weather } = props;

  return (
    <>
      {weather && (
        <div>
          <Title>
            <span className="link">{"test"}</span>
          </Title>
        </div>
      )}
    </>
  );
};

export default WeatherCard;
