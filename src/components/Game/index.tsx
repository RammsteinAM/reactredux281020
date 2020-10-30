import React, { useState, useEffect } from "react";
import { cloneArray, generateRenderData } from "../../helpers/index";
import ControlPanel from "../ControlPanel";
import InfoPanel from "../InfoPanel";
import Tile from "../Tile";
import TileContainer from "../TileContainer";
import { GameData, GameDataTile } from "../../App";
import { useDispatch } from 'react-redux'
import { setColorBlind, setFinished, setStep } from "../../store/actions";
import { useTypedSelector as useTypedSelectorStep } from "../../store/reducers/stepReducer";
import { useTypedSelector as useTypedSelectorFinished } from "../../store/reducers/finishedReducer";

interface IProps {
  data: GameData
}

const Game = (props: IProps) => {
  const [tiles, setTiles] = useState<[]>();
  const [selectedTile, setSelectedTile] = useState<any>();
  const [beforeClickedTiles, setBeforeClickedTiles] = useState<any>();
  const [invalidMove, setInvalidMove] = useState(false);
  const { maxCount } = props.data;
  const dispatch = useDispatch();
  const step = useTypedSelectorStep(state => state.step);
  const finished = useTypedSelectorFinished(state => state.finished);

  useEffect(() => {
    if (props.data && props.data.tiles) setTiles(props.data.tiles);
  }, [props.data]);

  useEffect(() => {
    if (!selectedTile && tiles) {
      let status = true;
      tiles.forEach((tilesArr: GameDataTile[]) => {
        const colorArr = tilesArr.map((tile: GameDataTile) => tile.colorCode);
        if (colorArr.length) {
          if (colorArr.length === maxCount) {
            const colorSet = new Set(colorArr);
            if (colorSet.size !== 1) {
              status = false;
            }
            return;
          }
          status = false;
        }
      });

      if (status) {
        dispatch(setFinished(true));
      }
    }
  }, [dispatch, maxCount, selectedTile, tiles]);

  const handleTileClick = (index: number) => {
    if (finished) return;
    const tilesClone = cloneArray(tiles);
    const clickedTilesArray = tilesClone[index];
    const clickedTile = clickedTilesArray[clickedTilesArray.length - 1];
    if (!selectedTile) {
      setBeforeClickedTiles(tiles);
      clickedTilesArray.pop();
      setSelectedTile(clickedTile);
      setTiles(tilesClone);
      dispatch(setStep(step + 1));
      return;
    }
    if (selectedTile) {
      if (
        clickedTilesArray.length < maxCount &&
        (!clickedTile || clickedTile.colorCode === selectedTile.colorCode)
      ) {
        clickedTilesArray.push(selectedTile);
        setSelectedTile(null);
        setTiles(tilesClone);
        setInvalidMove(false);
        return;
      }
      setInvalidMove(true);
    }
  };

  const handleSelectedTileClick = () => {
    if (selectedTile && selectedTile.colorCode) {
      setSelectedTile(null);
      setTiles(beforeClickedTiles);
      setInvalidMove(false);
    }
  };

  const handleReset = () => {
    setTiles(props.data.tiles);
    setSelectedTile(null);
    setBeforeClickedTiles(null);
    setInvalidMove(false);
    dispatch(setStep(0));
    dispatch(setFinished(false));
  };

  const toggleColorBlindMode = (value: boolean) => {
    dispatch(setColorBlind(value))
  };

  const data = tiles && generateRenderData(tiles, maxCount);

  return (
    <div className="game">
      <div className="game-panel-container">
        <InfoPanel
          invalidMove={invalidMove}
        />
        <ControlPanel
          toggleColorBlindMode={toggleColorBlindMode}
          onReset={handleReset}
        />
      </div>
      {!finished && (
        <div
          className="tile-selected-container"
          onClick={handleSelectedTileClick}
        >
          {selectedTile && selectedTile.colorCode && (
            <Tile tileData={selectedTile} />
          )}
        </div>
      )}
      <div className="game-container">
        {data &&
          data.map((tiles: [], i: number) => (
            <TileContainer
              key={i}
              index={i}
              tiles={tiles}
              onTileClick={handleTileClick}
            />
          ))}
      </div>
    </div>
  );
};

export default Game;
