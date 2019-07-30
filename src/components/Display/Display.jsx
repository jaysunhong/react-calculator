import React, { Component } from 'react';
import './Display.css';
import Box from '@material-ui/core/Box';

export default class Display extends Component {
    render() {
        return (
            <Box className="display">
                <div className="inputs">
                    {this.props.buttonPressed.length <= 0 ? 0 : this.props.buttonPressed}
                </div>
                <div className='total'>
                {this.props.total}
                </div>
            </Box>
        )
    }
}