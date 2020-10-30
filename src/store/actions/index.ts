import * as types from '../actionTypes';

export const setFinished = (finished: boolean) => ({
    type: types.SET_FINISHED,
    payload: finished
});

export const setStep = (stepCount: number) => ({
    type: types.SET_STEP,
    payload: stepCount
});

export const setColorBlind = (colorBlind: boolean) => ({
    type: types.SET_COLOR_BLIND,
    payload: colorBlind
});

export const setDarkMode = (darkMode: boolean) => ({
    type: types.SET_DARK_MODE,
    payload: darkMode
});