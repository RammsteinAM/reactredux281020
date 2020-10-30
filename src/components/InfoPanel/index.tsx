import React from "react";
import { useTypedSelector as useTypedSelectorStep } from "../../store/reducers/stepReducer";
import { useTypedSelector as useTypedSelectorFinished } from "../../store/reducers/finishedReducer";

interface IProps {
  invalidMove: boolean
}

const InfoPanel = (props: IProps) => {
  const step = useTypedSelectorStep(state => state.step);
  const finished = useTypedSelectorFinished(state => state.finished)

  if (finished) {
    return (
      <div className="game-info-panel">
        <div>
          <img alt="PagChomp" src="PagChomp.png" title="PagChomp"></img>
        </div>
        <div>You won!</div>
        <div>Total Steps: {step}</div>
      </div>
    );
  }

  if (props.invalidMove) {
    return (
      <div className="game-info-panel">
        <div>
          <img alt="Pepega" src="Pepega.png" title="Pepega"></img>
        </div>
        <div>You can't do that.</div>
        <div>Steps: {step}</div>
      </div>
    );
  }

  if (step >= 30) {
    return (
      <div className="game-info-panel">
        <div>
          <img alt="KEKW" src="KEKW.png" title="KEKW"></img>
        </div>
        <div>Steps: {step}</div>
      </div>
    );
  }

  return (
    <div className="game-info-panel">
      <div>Steps: {step}</div>
    </div>
  );
};

export default InfoPanel;
