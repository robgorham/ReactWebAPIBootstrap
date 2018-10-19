import { MYURLCHANGE } from '../constants';
//import { urlChangeAction } from './actions';
//import { StoreState } from '../types';
import { combineReducers, Reducer, AnyAction } from 'redux';

export const initialState: string = 'http://localhost:3000';


const myUrl:Reducer<string> = (state: string = initialState, action: AnyAction ) => {
    switch (action.type.toString()) {
        case MYURLCHANGE:
            return Object.assign({}, state,
                { myUrl: action.payload });
        default:
            return state;
    }

}

const reducers = combineReducers({
    myUrl
});

export default reducers;