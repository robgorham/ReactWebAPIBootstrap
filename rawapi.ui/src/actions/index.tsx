import * as constants from '../constants';


//Actions that should eventually be pulled out to their own files based on the container

/*#region FetchAnon
export interface IFetchAnonStart {
    type: constants.FETCHANONSTART;
}

export interface IFetchAnonSuccess {
    type: constants.FETCHANONSUCCESS;
}

export interface IFetchAnonFail {
    type: constants.FETCHANONFAIL;
}

export type FetchAnonAction = IFetchAnonStart | IFetchAnonSuccess | IFetchAnonFail;

export function FetchAnonStart(): IFetchAnonStart {
    return {
        type: constants.FETCHANONSTART
    }
}
#endregion
*/

export interface IURLChange {
    type: constants.MYURLCHANGE;
    myUrl: string;
}

export type URLChangeAction = IURLChange;

export function URLChange( url:string ): URLChangeAction {
    return {
        type: constants.MYURLCHANGE,
        myUrl: url
    };
}


export function getURL(myUrl: string): Promise<any> {
    const results = fetch(myUrl, { method: 'get', mode: 'cors' })
        .then(function (res) {
            return res;
        }).catch(function (ex) {
            return ex;
        });

    return results;
}
