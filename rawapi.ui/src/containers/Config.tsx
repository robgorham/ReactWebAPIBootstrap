import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {StoreState} from '../types';


//Props passed from mapStateToProps
interface PropsFromState {
    myUrl: string
}

class Config extends React.Component<PropsFromState, object> {
    constructor(props: PropsFromState) {
        super(props);
        console.log(props);
    }
    public render() {
        return(<div>Config Stub</div>);
    }
}

const mapStateToProps = ({ myUrl }: StoreState) => ({
    myUrl: myUrl
})
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Config)
