import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Buttons from './components/Buttons/Buttons';
import Display from './components/Display/Display';

class App extends Component {
  constructor() {
    super();

    this.state={
      firstInputs: [],
      trackOperator: '',
      total: 0,
    };

    this.onClick = this.onClick.bind(this);
    this.addition = this.addition.bind(this);
    this.subtraction = this.subtraction.bind(this);
    this.multiplication = this.multiplication.bind(this);
    this.division = this.division.bind(this);
  }
  // function addition which receives a parameter of this.state.firstInputs and parses it to calculate
  addition = x => {
    let result = this.state.total;
    const convertX = parseFloat(x);

    if (result === 0) {
      result = convertX;
    } else {
      result += convertX;
    }

    this.setState({
      total: result,
      firstInputs: [],
    });
  }
  // function subtraction which receives a parameter of this.state.firstInputs and parses it to calculate
  subtraction = x => {
    let result = this.state.total;
    const convertX = parseFloat(x);

    if (result === 0) {
      result = convertX;
    } else {
      result -= convertX;
    }

    this.setState({
      total: result,
      firstInputs: [],
    });

    // const convertX = parseFloat(x);

    // this.setState(prevState => ({
    //   total: convertX - prevState.total,
    // }));
  }
  // function multiplication which receives a parameter of this.state.firstInputs and parses it to calculate
  multiplication = x => {
    let result = this.state.total;
    const convertX = parseFloat(x);

    if (result === 0) {
      result = convertX;
    } else {
      result *= convertX;
    }

    this.setState({
      total: result,
      firstInputs: [],
    });
  }
  // function division which receives a parameter of this.state.firstInputs and parses it to calculate
  division = x => {
    let result = this.state.total;
    const convertX = parseFloat(x);

    if (result === 0) {
      result = convertX;
    } else {
      result /= convertX;
    }

    this.setState({
      total: result,
      firstInputs: [],
    });
  }
  // function onClick which receives a parameter (props) of the button clicked value
  onClick = button => {
    const concatFirst = this.state.firstInputs.concat(button);

    if (isNaN(button) === false) { 
      this.setState({
        firstInputs: concatFirst,
      });
    } else if (isNaN(button)) {

      // WHEN YOU CLICK AN OPERATOR, IT IS ALREADY ADDING/SUBTRACTING/MULTIPLYING/DIVIDING FROM TOTAL
      // USE A 2ND STATE TO HOLD/WAIT FOR A 2ND INPUT BEFORE CALCULATING

      if (button === '+') {
        this.addition(this.state.firstInputs.join(''));
        this.setState({
          trackOperator: button
        });
      } else if (button === '-') {
        this.subtraction(this.state.firstInputs.join(''));
        this.setState({
          trackOperator: button
        });
      } else if (button === '*') {
        this.multiplication(this.state.firstInputs.join(''));
        this.setState({
          trackOperator: button
        });     
      } else if (button === '/') {
        this.division(this.state.firstInputs.join(''));
        this.setState({
          trackOperator: button
        });      
      } else if (button === 'ac') {
        this.setState({
          firstInputs: [],
          trackOperator: '',
          total: 0,
        });
      } else if (button === '=') {
        const trackOperator = this.state.trackOperator;

        if (trackOperator === '+') {
          this.addition(this.state.firstInputs.join(''));
        } else if (trackOperator === '-') {
          this.subtraction(this.state.firstInputs.join(''));
        } else if (trackOperator === '*') {
          this.multiplication(this.state.firstInputs.join(''));
        } else if (trackOperator === '/') {
          this.division(this.state.firstInputs.join(''));
        }

        this.setState({
          firstInputs: [],
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Display buttonPressed={this.state.firstInputs} total={this.state.total} />
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Buttons onClick={this.onClick}/>
        </Grid>
      </div>
    );
  }
}

export default App;