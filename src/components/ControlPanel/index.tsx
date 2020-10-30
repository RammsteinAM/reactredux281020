import React from "react";
import { useTypedSelector as useTypedSelectorStep } from "../../store/reducers/stepReducer";
import { useTypedSelector as useTypedSelectorFinished } from "../../store/reducers/finishedReducer";
import { useTypedSelector as useTypedSelectorColorBlind } from "../../store/reducers/colorBlindReducer";

interface IProps {
  toggleColorBlindMode: (value: boolean) => void,
  onReset: any,
}

const ControlPanel = (props: IProps) => {
  const step = useTypedSelectorStep(state => state.step);
  const finished = useTypedSelectorFinished(state => state.finished);
  const colorBlind = useTypedSelectorColorBlind(state => state.colorBlind);

  return (
    <div className="game-control-panel">
      <div>
        <input
          id="colorBlind"
          name="colorBlind"
          type="checkbox"
          checked={colorBlind}
          onChange={() => props.toggleColorBlindMode(!colorBlind)}
        />{" "}
        <label htmlFor="colorBlind">Color Blind Mode</label>
      </div>
      <div>
        <button onClick={props.onReset} disabled={step === 0} className={step === 0 ? "disabled" : ""}>
          {finished ? "Play Again" : "Reset"}
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
