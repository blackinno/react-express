import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import { UpdateCounter, DeleteCounter } from '../../lib/actions/counterActions';

const style = {
    padding: '20px',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Box extends React.Component {

    updateCounter(value) {
        let id = this.props.id;
        let updatedBox = this.props.box.map(data => {
            if (data.id === id && !(data.counter === 0 && value < 0)) {
                data.counter += value;
            }
            return data
        });
        this.props.dispatch(UpdateCounter(updatedBox));
    }

    removeBox() {
        this.props.dispatch(DeleteCounter(this.props.id));
    }

    render() {

        return (
            <Paper style={style} zDepth={3} rounded={false}>
                <Row>
                    <Col xs={12}>
                        <Row end="xs">
                            <Col xs={6} >
                                <IconButton onTouchTap={this.removeBox.bind(this)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <h1>{this.props.counter}</h1>
                <RaisedButton label="+" primary={true} onTouchTap={this.updateCounter.bind(this, 1)} />
                &nbsp;
                <RaisedButton label="-" secondary={true} onTouchTap={this.updateCounter.bind(this, -1)} />
            </Paper>
        )
    }
}

export default connect()(Box);