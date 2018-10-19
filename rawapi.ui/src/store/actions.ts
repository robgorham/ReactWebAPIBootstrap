import { action } from "typesafe-actions";
import { Action} from "redux";


export interface urlChangeAction extends Action<string>{
    type: 'MYURLCHANGE';
    payload: string;
}

export type DemoActions = urlChangeAction;


//export const urlChange = (url: string) => action(MYURLCHANGE, url);

export const urlChange = (url: string) => action('MYURLCHANGE', url);


