import { action } from "typesafe-actions";
import { AnyAction } from "redux";
import { MYURLCHANGE } from "../constants";


export interface urlChangeAction extends AnyAction{
    type: MYURLCHANGE;
    payload: string;
}

export type DemoActions = urlChangeAction;


//export const urlChange = (url: string) => action(MYURLCHANGE, url);

export const urlChange = (url: string) => action(MYURLCHANGE, url);


