//TODO move this to the container directory!
import * as React from 'react';
import FetchTester from './containers/fetchTester';
import Config from './containers/Config';
import Login from './containers/Login';
import Welcome from './components/Welcome';
import './App.css';
import { Grid, Col, Row, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Route } from 'react-router-dom';
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
                                    React ASP.NET Boilerplate
                                </Navbar.Brand>
                                <Nav>
                                    <NavItem href="/">
                                        Home
                                       </NavItem>
                                    <NavItem href="/FetchTester">
                                        FetchTester
                                    </NavItem>
                                    <NavItem href="/Login">
                                        Login
                                    </NavItem>
                                </Nav>
                            </Navbar>
                        </Row>
                        <Row id="content">
                            <Route exact path="/" component={Welcome} />
                            <Route path="/FetchTester" component={FetchTester} />
                            <Route path="/Welcome" component={Welcome} />
                            <Route path="/Login" component={Login} />
                            <Route path="/Config" component={Config} />
                        </Row>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
