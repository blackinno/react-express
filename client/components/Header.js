import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import { grey50 } from 'material-ui/styles/colors';

class Header extends React.Component {
    render() {
        return (
            <AppBar
                iconElementLeft={
                    <IconButton href="/">
                        <ActionHome color={grey50} />
                    </IconButton>
                }
            />
        )
    }
}

export default Header;