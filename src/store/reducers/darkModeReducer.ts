import { SET_DARK_MODE } from '../actionTypes';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { IAction } from '.';

interface RootState {
    darkMode: boolean
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const darkMode = (state = true, action: IAction<string, boolean>) => {
    switch (action.type) {
        case SET_DARK_MODE:
            return action.payload;
        default:
            return state;
    }
};