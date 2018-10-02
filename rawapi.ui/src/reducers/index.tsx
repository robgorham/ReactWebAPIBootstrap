import { URLChangeAction } from '../actions';
import { StoreState } from '../types';
import { MYURLCHANGE } from '../constants';
import { combineReducers, Dispactch, Reducer } from 'redux';
import {routerReducer} from 'react-router-redux';
export interface ApplicationState {
    config: StoreState
}

export const reducers: Reducer<ApplicationState> =
    combineReducers<ApplicationState>({
        router: routerReducer,
        config: configReducer
    });

export function configReducer(state: StoreState, action: URLChangeAction) :StoreState{
    if (action.type === MYURLCHANGE) {
        return {
            myUrl: action.myUrl
        };
    }
    return state;
}