import { combineReducers } from 'redux';
import { finished } from './finishedReducer';
import { step } from './stepReducer';
import { colorBlind } from './colorBlindReducer';

export const rootReducer = combineReducers({
    finished,
    step,
    colorBlind
})

export type RootState = ReturnType<typeof rootReducer>

export interface IAction<T, P> {
    colorBlind: any;
    type: T,
    payload: P
}