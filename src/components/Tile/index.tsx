import React from "react";
import { GameDataTile } from "../../App";
import { useTypedSelector } from "../../store/reducers/colorBlindReducer";

interface IProps {
  tileData: GameDataTile,
  style?: any
}

const Tile = (props: IProps) => {
  const colorBlind = useTypedSelector(state => state.colorBlind);

  const tileStyle = { ...props.style, backgroundColor: props.tileData.colorCode };
  if (colorBlind) {
    tileStyle.filter = "grayscale(1) contrast(1.2)"
  }

  return (
    <div
      className={`tile ${!props.tileData.colorCode ? "tile-empty" : ""}`}
      style={tileStyle}
    >
      {colorBlind && <span>{props.tileData.colorName}</span>}
    </div>
  );
};

export default Tile;
