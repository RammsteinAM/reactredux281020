import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./components/Game";

export interface GameData {
  maxCount: number,
  tiles: []
}

export interface GameDataTile {
  colorCode: string,
  colorName: string
}

const App = () => {
  const [gameData, setGameData] = useState<GameData>();

  const fetchData = async () => {
    const data = await fetch("data.json");
    const dataJson = await data.json();
    setGameData(dataJson);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!gameData || !gameData.tiles) return null;
  return <Game data={gameData} />;
};

export default App;