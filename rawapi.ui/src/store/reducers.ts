import { MYURLCHANGE } from "../constants";
import { DemoActions } from "./actions";
import { combineReducers, Reducer } from "redux";

/**
 * root reducer for project
 * a good refactor would be to make a config folder for the context and combine reducers within that one
 * and have the reducer here be the root.  Even better so, make the root reducer actually an index.ts
 */


export const initialState: string = "http://localhost:54683/";


const myUrl:Reducer<string> = (state: string = initialState, action: DemoActions) => {
    switch (action.type) {
        case MYURLCHANGE:
            return action.payload;
        default:
            return state;
    }
}

const reducers = combineReducers({
    myUrl
});

export default reducers;