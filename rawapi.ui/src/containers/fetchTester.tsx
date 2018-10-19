import * as React from 'react';
import { getURL } from '../utils/fetchUtil';

export interface Props {
    myUrl: string;
}
interface State {
    myURL: string;
    fetchData?: string;
}

export default class FetchTester extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            myURL: props.myUrl || "http://localhost:54683/api/GetAnonymous",
            fetchData: 'None Returned Yet!' };
    }
    //sanity test for my fetch requests
    pingme = (): string => {
        console.log('started');
        console.log(this.state);
        
        getURL(this.state.myURL).then((res) =>{
            return res.json();
        }).then((json) => {
            console.log(json);
            this.setState({ fetchData:  JSON.stringify(json)});
        }).catch((ex) => {
            console.log(ex);
            this.setState({ fetchData: "error on request" });
            });
        
        return 'done';
    }

    render() {
        return (<div>
            <h3>Fetch Tester!</h3><br />
            <h5>Fetching to API Endpoint that AllowsAnonymous</h5>
            <p>Results visible in the console window F12</p>
            <button onClick={this.pingme}>OK</button><br />
            <p>Results:{this.state.fetchData}</p>
            
                </div>);
    }
}

