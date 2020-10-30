import React from "react";
import { useTypedSelector as useTypedSelectorStep } from "../../store/reducers/stepReducer";
import { useTypedSelector as useTypedSelectorFinished } from "../../store/reducers/finishedReducer";
import { useTypedSelector as useTypedSelectorColorBlind } from "../../store/reducers/colorBlindReducer";
import { useTypedSelector as useTypedSelectorDarkMode } from "../../store/reducers/darkModeReducer";
import { useDispatch } from 'react-redux'
import { setColorBlind, setDarkMode } from "../../store/actions";

interface IProps {
  onReset: any
}

const ControlPanel = (props: IProps) => {
  const step = useTypedSelectorStep(state => state.step);
  const finished = useTypedSelectorFinished(state => state.finished);
  const colorBlind = useTypedSelectorColorBlind(state => state.colorBlind);
  const darkMode = useTypedSelectorDarkMode(state => state.darkMode);
  const dispatch = useDispatch();

  return (
    <div className="game-control-panel">      
      <div>
        <input
          id="darkMode"
          name="darkMode"
          type="checkbox"
          checked={darkMode}
          onChange={() => dispatch(setDarkMode(!darkMode))}
        />{" "}
        <label htmlFor="darkMode">Dark Mode</label>
      </div>
      <div>
        <input
          id="colorBlind"
          name="colorBlind"
          type="checkbox"
          checked={colorBlind}
          onChange={() => dispatch(setColorBlind(!colorBlind))}
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
