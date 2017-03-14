import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Notfound extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <Row center="xs">
                            <Col xs={6}>
                                <h1>404 Page not found.</h1>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Notfound;