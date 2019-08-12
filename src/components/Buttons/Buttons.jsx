import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import './Buttons.css';

export default class Buttons extends Component {
  //  ROW: AC, +/-, %, /
  buttonAC = () => {
    this.props.onClick('ac');
  }
  buttonPlusMinus = () => {
    this.props.onClick('+/-');
  }
  buttonPercent = () => {
    this.props.onClick('%');
  }
  buttonDivision = () => {
    this.props.onClick('/');
  }
  // ROW: 7, 8, 9, X 
  button7 = () => {
    this.props.onClick('7');
  }
  button8 = () => {
    this.props.onClick('8');
  }
  button9 = () => {
    this.props.onClick('9');
  }
  buttonMultiplication = () => {
    this.props.onClick('*');
  }
  // ROW: 4, 5, 6, - 
  button4 = () => {
    this.props.onClick('4');
  }
  button5 = () => {
    this.props.onClick('5');
  }
  button6 = () => {
    this.props.onClick('6');
  }
  buttonSubtraction = () => {
    this.props.onClick('-');
  }
  // ROW: 1, 2, 3, + 
  button1 = () => {
    this.props.onClick('1');
  }
  button2 = () => {
    this.props.onClick('2');
  }
  button3 = () => {
    this.props.onClick('3');
  }
  buttonAddition = () => {
    this.props.onClick('+');
  }
  //  ROW: 0, ., =
  button0 = () => {
    this.props.onClick('0');
  }
  buttonDecimal = () => {
    this.props.onClick('.');
  }
  buttonEqual = () => {
    this.props.onClick('=');
  }

  render() {
    return (
      <div>
        {/* ROW: AC, +/-, %, / */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={9}>
            <Fab variant="extended" aria-label="AC" onClick={this.buttonAC} id='buttonAC' className='buttons'>
              AC
            </Fab>
          </Grid>
          {/* <Grid item xs={3}>
            <Fab aria-label="+/-" onClick={this.buttonPlusMinus} className='buttons'>
              +/-
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="%" onClick={this.buttonPercent} className='buttons'>
              %
            </Fab>
          </Grid> */}
          <Grid item xs={3}>
            <Fab aria-label="/" onClick={this.buttonDivision} className='buttons'>
              /
            </Fab>
          </Grid>
        </Grid>
        {/* ROW: 7, 8, 9, X */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={3}>
            <Fab aria-label="7" value={7} onClick={this.button7} className='buttons'>
              7
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="8" value={8} onClick={this.button8} className='buttons'>
              8
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="9" value={9} onClick={this.button9} className='buttons'>
              9
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="*" value='*' onClick={this.buttonMultiplication} className='buttons'>
              X
            </Fab>
          </Grid>
        </Grid>
        {/* ROW: 4, 5, 6, - */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={3}>
            <Fab aria-label="4" value={7} onClick={this.button4} className='buttons'>
              4
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="5" value={8} onClick={this.button5} className='buttons'>
              5
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="6" value={9} onClick={this.button6} className='buttons'>
              6
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="-" value='-' onClick={this.buttonSubtraction} className='buttons'>
              -
            </Fab>
          </Grid>
        </Grid>
          {/* ROW: 1, 2, 3, + */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={3}>
            <Fab aria-label="1" value={7} onClick={this.button1} className='buttons'>
              1
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="3" value={8} onClick={this.button2} className='buttons'>
              2
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="3" value={9} onClick={this.button3} className='buttons'>
              3
            </Fab>
          </Grid>
          <Grid item xs={3}>
            <Fab aria-label="+" value='+' onClick={this.buttonAddition} className='buttons'>
              +
            </Fab>
          </Grid>
        </Grid>
          {/* ROW: 0, ., = */}
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={9}>
            <Fab variant="extended" aria-label="0" value={0} onClick={this.button0} id='button0' className='buttons'>
              0
            </Fab>
          </Grid>
          {/* <Grid item xs={3}>
            <Fab aria-label="." value='.' onClick={this.buttonDecimal} className='buttons'>
              .
            </Fab>
          </Grid> */}
          <Grid item xs={3}>
            <Fab aria-label="=" value='=' onClick={this.buttonEqual} className='buttons'>
              =
            </Fab>
          </Grid>
        </Grid>
      </div>
    );
  }
}
