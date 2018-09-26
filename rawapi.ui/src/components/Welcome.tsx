import * as React from 'react';
import { Row, Col } from 'react-bootstrap';


function Welcome() {
    return (<Row>
        <Col md={6} mdOffset={3}>
            <h3>Welcome and Hello!</h3>
            <p>This Project is created in the hopes of making a boilerplate that will save time</p>
            <p>for developers to stand up a project with basic authentication built in</p>
        </Col>
    </Row>);
}


export default Welcome;
