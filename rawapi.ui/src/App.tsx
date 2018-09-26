//TODO move this to the container directory!
import * as React from 'react';
import FetchTester from './components/fetchTester';
import './App.css';
import { Grid, Col, Row, Navbar } from 'react-bootstrap';
//import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <Grid >
                <Row>
                    <Col md={12}
                         className="App container">
                        <Row>
                        <Navbar>
                                <Navbar.Brand>
                                    <h3> React ASP.NET Boilerplate</h3>
                                </Navbar.Brand>

                            </Navbar>
                        </Row>
                        <Row>
                            <FetchTester myUrl="http://localhost:54683/api/GetAnonymous" />
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
