import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Box from '../box/index';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import _ from 'underscore';
import { connect } from 'react-redux';
import { AddCounter } from '../../lib/actions/counterActions';


class Home extends React.Component {

    addBox() {
        this.props.dispatch(AddCounter({ id: Math.floor(new Date()), counter: 0 }));
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
                        {this.props.box.map((data) =>
                            <Box key={data.id}
                                id={data.id}
                                counter={data.counter}
                                box={this.props.box}
                            />
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

export default connect((store) => {
    return {
        box: store.counter.box
    }
})(Home);