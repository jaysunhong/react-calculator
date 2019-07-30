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
      total: 0,
    };

    this.onClick = this.onClick.bind(this);
    this.addition = this.addition.bind(this);
    this.subtraction = this.subtraction.bind(this);
    this.multiplication = this.multiplication.bind(this);
    this.division = this.division.bind(this);
  }

  addition = x => {
    let result = this.state.total;
    const convertX = parseInt(x);

    result += convertX;

    this.setState({
      total: result,
      firstInputs: [],
    });
  }
  subtraction = x => {
    let result = this.state.total;
    const convertX = parseInt(x);

    if (result === 0) {
      result = convertX;
    } else {
      result -= convertX;
    }

    this.setState({
      total: result,
      firstInputs: [],
    });

    // const convertX = parseInt(x);

    // this.setState(prevState => ({
    //   total: convertX - prevState.total,
    // }));
  }
  multiplication = x => {
    let result = this.state.total;
    const convertX = parseInt(x);

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
  division = x => {
    let result = this.state.total;
    const convertX = parseInt(x);

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

  onClick = button => {
    const concatFirst = this.state.firstInputs.concat(button);

    if (isNaN(button) === false) { 
      this.setState({
        firstInputs: concatFirst,
      });
    } else if (isNaN(button)) {
      if (button === '+') {
        this.addition(this.state.firstInputs.join(''));
      } else if (button === '-') {
        this.subtraction(this.state.firstInputs.join(''));
      } else if (button === '*') {
        this.multiplication(this.state.firstInputs.join(''));
      } else if (button === '/') {
        this.division(this.state.firstInputs.join(''));
      } else if (button === 'ac') {
        this.setState({
          firstInputs: [],
          total: 0,
        })
      } else if (button === '=') {
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
