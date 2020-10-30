import { SET_FINISHED } from '../actionTypes';
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { IAction } from '.';

interface RootState {
    finished: boolean
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const finished = (state = false, action: IAction<string, boolean>) => {
    switch (action.type) {
        case SET_FINISHED:
            return action.payload;
        default:
            return state;
    }
};


// // my-component.tsx
// import { useTypedSelector } from './reducer.ts'

// const isOn = useTypedSelector(state => state.isOn)