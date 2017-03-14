import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';

class Home extends React.Component {
    render() {
        
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h1>Home</h1>
                    </Col>
                </Row>          
            </Grid>

        )
    }
}

export default Home;