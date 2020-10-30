import { SET_FINISHED, SET_STEP, SET_COLOR_BLIND } from '../actionTypes';


export const setFinished = (finished: boolean) => ({
    type: SET_FINISHED,
    payload: finished
});

export const setStep = (stepCount: number) => {
    debugger
    return ({
    type: SET_STEP,
    payload: stepCount
})};

export const setColorBlind = (colorBlind: boolean) => ({
    type: SET_COLOR_BLIND,
    payload: colorBlind
});