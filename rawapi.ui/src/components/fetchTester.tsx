import * as React from 'react';
import { getURL } from '../actions';

export interface Props {
    myUrl: string;
}

export default class FetchTester extends React.Component<Props, object>{

    constructor(props: Props) {
        super(props);
    }
    //sanity test for my fetch requests
    pingme = (): string => {
        console.log('started');
        
        getURL('http://localhost:54683/api/values').then(function(res) {
            return res.json();
        }).then(function(json) {
            console.log(json);
            return json;
        }).catch(function(ex) {
            console.log(ex);
            return 'return failure';
            });
        return 'done';
    }
    render() {
        return (<div>
                    Hello Worlds<br />
            <button onClick={this.pingme}>OK</button>
                </div>);
    }
}

