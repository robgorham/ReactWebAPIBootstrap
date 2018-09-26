import * as React from 'react';
import FetchTester from './components/fetchTester';
import './App.css';
import { Grid, Col, Row } from 'react-bootstrap';
import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <Grid >
                <Row>
                    <Col md={12}
                         className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                        <p className="App-intro">
                            To get started, edit <code>src/App.tsx</code> and save to reload.
                    </p>
                        <FetchTester myUrl='localhost:50933' />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
