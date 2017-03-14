import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import CircularProgress from 'material-ui/CircularProgress';


class LoadingState extends React.Component {
    render() {
        return (
            <Grid>
                <Col xs={12}>
                    <Row center="xs">
                        <Col xs={6}>
                            <CircularProgress size={200} thickness={10} />
                        </Col>
                    </Row>
                </Col>
            </Grid>
        )
    }
}

export default LoadingState;