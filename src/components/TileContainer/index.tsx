import React from "react";
import { GameDataTile } from "../../App";
import Tile from "../Tile";

interface IProps {
  tiles: GameDataTile[],
  onTileClick: (index: number) => void,
  index: number,
}

const TileContainer = (props: IProps) => {
  const handleClick = () => {
      props.onTileClick(props.index);
  };

  return (
    <div className="tile-container" onClick={handleClick}>
      {props.tiles.map((data, j) => {
        return <Tile key={j} tileData={data} />;
      })}
    </div>
  );
};

export default TileContainer;
