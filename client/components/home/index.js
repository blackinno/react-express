import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './styles.css';
import Box from '../box/index';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import _ from 'underscore';

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            box: [{
                id: Math.floor(new Date()),
                counter: 0
            }]
        }
    }

    updateCounter(id, value) {
        let box = this.state.box.map(data => {
            let x = data
            if ( x.id === id && !(x.counter === 0 && value < 0) ) {
                x.counter += value;
            }
            return x
        })
        this.setState({box});
    }

    addBox() {
        let box = this.state.box;
        box.push({
            id: Math.floor(new Date()),
            counter: 0,
        })
        this.setState({ box });
    }

    removeBox(id) {
        let box = _.filter(this.state.box, (data) => {
            return data.id !== id;
        });
        this.setState({ box });
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        {this.state.box.map((data) =>
                            <Box key={data.id}
                                counter={data.counter}
                                removeBox={this.removeBox.bind(this)}
                                updateCounter={this.updateCounter.bind(this)}
                                id={data.id} />
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Row end="xs">
                            <Col xs={6}>
                                <FloatingActionButton onTouchTap={this.addBox.bind(this)}>
                                    <ContentAdd />
                                </FloatingActionButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>

        )
    }
}

export default Home;