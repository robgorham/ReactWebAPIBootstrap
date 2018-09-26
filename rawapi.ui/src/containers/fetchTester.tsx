import * as React from 'react';
import { getURL } from '../actions';

export interface Props {
    myUrl: string;
}
interface State {
    myURL: string;
}

export default class FetchTester extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = { myURL: props.myUrl };
    }
    //sanity test for my fetch requests
    pingme = (): string => {
        console.log('started');
        console.log(this.state);
        
        getURL(this.props.myUrl).then(function(res) {
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

