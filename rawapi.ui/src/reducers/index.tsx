import { URLChangeAction } from '../actions';
import { StoreState } from '../types';
import { MYURLCHANGE } from '../constants';

export function myURLchange(state: StoreState, action: URLChangeAction) :StoreState{
    if (action.type === MYURLCHANGE) {
        return {
            myUrl: action.myUrl
        };
    }
    return state;
}