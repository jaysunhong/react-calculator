import React, { Component } from 'react';
import './Display.css';
import Box from '@material-ui/core/Box';

export default class Display extends Component {
    render() {
        return (
            <Box className="display">
                <div className="inputs" value={this.props.buttonPressed} onChange={this.props.onChange}>
                    {this.props.buttonPressed}
                </div>
                <div className='total'>
                    {this.props.display}
                </div>
            </Box>
        )
    }
}