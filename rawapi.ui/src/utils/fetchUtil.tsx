export function getURL(myUrl: string): Promise<any> {
    const results = fetch(myUrl, { method: 'get', mode: 'cors' })
        .then(function (res) {
            return res;
        }).catch(function (ex) {
            return ex;
        });

    return results;
}