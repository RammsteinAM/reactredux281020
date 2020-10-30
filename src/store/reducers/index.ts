import { combineReducers } from 'redux';
import { finished } from './finishedReducer';
import { step } from './stepReducer';
import { colorBlind } from './colorBlindReducer';
import { darkMode } from './darkModeReducer';

export const rootReducer = combineReducers({
    finished,
    step,
    colorBlind,
    darkMode
})

export type RootState = ReturnType<typeof rootReducer>

export interface IAction<T, P> {
    colorBlind: any;
    type: T,
    payload: P
}