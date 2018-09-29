import { URLChangeAction } from '../actions';
import { StoreState } from '../types';
import { MYURLCHANGE } from '../constants';
import { combineReducers, Dispactch, Reducer } from 'redux';
import {routerReducer} from 'react-router-redux';



export const reducers: Reducer<StoreState> = 
    combineReducers<StoreState>({
        router: routerReducer,

    })

export function configReducer(state: StoreState, action: URLChangeAction) :StoreState{
    if (action.type === MYURLCHANGE) {
        return {
            myUrl: action.myUrl
        };
    }
    return state;
}