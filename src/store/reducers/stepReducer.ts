import { SET_STEP } from '../actionTypes';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IAction } from '.';

interface RootState {
  step: number
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const step = (state = 0, action: IAction<string, number>) => {
  switch (action.type) {
    case SET_STEP:
      return action.payload;
    default:
      return state;
  }
};