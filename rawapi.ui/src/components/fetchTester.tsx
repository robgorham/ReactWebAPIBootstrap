import * as React from 'react';
import { getURL } from '../actions';

export interface Props {
    myUrl: string;
}

export default class FetchTester extends React.Component<Props, object>{

    constructor(props: Props) {
        super(props);
    }

    pingme = (): string => {
        console.log('started');
        
        getURL('http://localhost:3000').then(function(res) {
            console.log(res);
            return 'success';
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

