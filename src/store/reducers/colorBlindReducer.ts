import { SET_COLOR_BLIND } from '../actionTypes';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { IAction } from '.';

interface RootState {
    colorBlind: boolean
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const colorBlind = (state = false, action: IAction<string, boolean>) => {
    switch (action.type) {
        case SET_COLOR_BLIND:
            return action.payload;
        default:
            return state;
    }
};