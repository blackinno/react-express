import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';

const style = {
    padding: '10px',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class Box extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

    }

    componentWillReceiveProps(newProps) {
        this.setState({ counter: newProps.counter});
    }

    sendCounter(value) {
        let id = this.props.id;
        this.props.updateCounter(id, value);
    }

    sendId() {
        this.props.removeBox(this.props.id);
    }

    render() {

        return ( 
            <Paper style={style} zDepth={3} rounded={false}>
                <Row>
                    <Col xs={12}>
                        <Row end="xs">
                            <Col xs={6} >
                                <IconButton onTouchTap={this.sendId.bind(this)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <h1>{this.state.counter}</h1>
                <RaisedButton label="+" primary={true} onClick={this.sendCounter.bind(this, 1)} />
                &nbsp;
                <RaisedButton label="-" secondary={true} onClick={this.sendCounter.bind(this, -1)} />
            </Paper>
        )
    }
}

export default Box;