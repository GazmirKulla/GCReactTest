import styled from "styled-components";

const Title = styled.div`
  color: #01062b;
  font: 700 16px/20px Inter, Arial, sans-serif;
  display: flex;
`;

const WeatherCard = styled.div`
  transition: all 0.2s ease-in-out;
  margin-left: 10px;
  height: auto;
  &:hover {
    transform: scale(1.06);
  }
  padding-top: 16px;
  padding-bottom: 32px;
  .game-card-footer {
    margin-top: 8px;
    display: flex;
    align-items: center;
    .game-title {
      font-size: 14px;
      color: #9795af;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

const Cover = styled.div`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  background: #ebedf5;
  > img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    border: 0;
    border-radius: 4px;
  }
`;

export { Title, WeatherCard, Cover };
