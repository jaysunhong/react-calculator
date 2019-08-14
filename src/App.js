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
      secondInput: false,
      trackOperator: '',
      equalOperator: false,
      total: 0,
    };

    this.onClick = this.onClick.bind(this);
    this.addition = this.addition.bind(this);
    this.subtraction = this.subtraction.bind(this);
    this.multiplication = this.multiplication.bind(this);
    this.division = this.division.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
    this.handleAC = this.handleAC.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  // function addition which receives a parameter of this.state.firstInputs and parses it to calculate
  addition = buttonClicked => {
    const joinFirst = buttonClicked.join('');
    const parseFirst = parseFloat(joinFirst);

    if (!this.state.equalOperator) {
      if (!this.state.secondInput) {
        this.setState({
          secondInput: true,
          total: parseFirst,
          firstInputs: [],
        });
      } else if (this.state.secondInput) {
        this.setState(prevState => ({
          total: prevState.total + parseFirst,
          firstInputs: [],
        }));
      }
    } else if (this.state.equalOperator) {
      this.setState({
        equalOperator: false,
        firstInputs: [],
        secondInput: true,
      });
    }
  }
  // function subtraction which receives a parameter of this.state.firstInputs and parses it to calculate
  subtraction = buttonClicked => {
    const joinFirst = buttonClicked.join('');
    const parseFirst = parseFloat(joinFirst);

    if (!this.state.equalOperator) {
      if (!this.state.secondInput) {
        this.setState({
          secondInput: true,
          total: parseFirst,
          firstInputs: [],
        });
      } else if (this.state.secondInput) {
        this.setState(prevState => ({
          total: prevState.total - parseFirst,
          firstInputs: [],
        }));
      }
    } else if (this.state.equalOperator) {
      this.setState({
        equalOperator: false,
        firstInputs: [],
        secondInput: true,
      });
    }
  }
  // function multiplication which receives a parameter of this.state.firstInputs and parses it to calculate
  multiplication = buttonClicked => {
    const joinFirst = buttonClicked.join('');
    const parseFirst = parseFloat(joinFirst);

    if (!this.state.equalOperator) {
      if (!this.state.secondInput) {
        this.setState({
          secondInput: true,
          total: parseFirst,
          firstInputs: [],
        });
      } else if (this.state.secondInput) {
        this.setState(prevState => ({
          total: prevState.total * parseFirst,
          firstInputs: [],
        }));
      }
    } else if (this.state.equalOperator) {
      this.setState({
        equalOperator: false,
        firstInputs: [],
        secondInput: true,
      });
    }
  }
  // function division which receives a parameter of this.state.firstInputs and parses it to calculate
  division = buttonClicked => {
    const joinFirst = buttonClicked.join('');
    const parseFirst = parseFloat(joinFirst);

    if (!this.state.equalOperator) {
      if (!this.state.secondInput) {
        this.setState({
          secondInput: true,
          total: parseFirst,
          firstInputs: [],
        });
      } else if (this.state.secondInput) {
        this.setState(prevState => ({
          total: prevState.total / parseFirst,
          firstInputs: [],
        }));
      }
    } else if (this.state.equalOperator) {
      this.setState({
        equalOperator: false,
        firstInputs: [],
        secondInput: true,
      });
    }
  }
  // function "all clear" which resets all states to the inital states
  handleAC() {
    this.setState({
      firstInputs: [],
      secondInput: false,
      trackOperator: '',
      equalOperator: false,
      total: 0,
    });
  }
  // function "clear" which resets the current state to the previous state
  handleClear() {
    this.setState(prevState => ({
      firstInputs: [],
      secondInput: prevState.secondInput,
      trackOperator: prevState.trackOperator,
      equalOperator: prevState.equalOperator,
    }));
  } 

  handleEqual() {
    this.setState({
      equalOperator: true,
    });

    switch (this.state.trackOperator) {
    case '+':
      this.addition(this.state.firstInputs);   
      break;
    case '-':
      this.subtraction(this.state.firstInputs);  
      break; 
    case '*':
      this.multiplication(this.state.firstInputs);
      break;
    case '/':
      this.division(this.state.firstInputs);
      break;
    default:
      break;
    };
  }

  // function onClick which receives a parameter (props) of the button clicked value
  onClick = button => {
    // do this is button clicked is a number
    if (isNaN(button) === false) { 
      const concatFirst = this.state.firstInputs.concat(button);
      // do this if button clicked is a number and is after the equal button function is clicked
      if (this.state.equalOperator) {
        this.handleAC();
        this.setState({
          firstInputs: concatFirst,
        });
      // do this if button clicked is a number and equal button function is not clicked
      } else {
        this.setState({
          firstInputs: concatFirst,
        });
      }
    // do this if button clicked is "all clear"
    } else if (button === 'ac') {
      this.handleAC();
    // do this if button clicked is "clear"
    } else if (button === 'clear') {
      this.handleClear();
    // do this if button clicked is "equal"
    } else if (button === '=') {
      this.handleEqual();
    // do this if button clicked is not a number
    } else if (isNaN(button)) {

      const joinFirst = this.state.firstInputs.join('');
      const parseFirst = parseFloat(joinFirst);
      // do this if button clicked is not a number and there is no second input (state)
      if (!this.state.secondInput) {
        this.setState({
          secondInput: true,
          total: parseFirst,
          firstInputs: [],
          trackOperator: button
        });
      }
      // use the this.state.trackOperator to perform switch statement. cases are based on operands of the button clicked.
      switch (this.state.trackOperator) {
        case '+':
          this.addition(this.state.firstInputs);
          this.setState({
            trackOperator: button,
            secondInput: true,
          });
          break;
        case '-':
          this.subtraction(this.state.firstInputs);
          this.setState({
            trackOperator: button,
            secondInput: true,
          });
          break;
        case '*':
          this.multiplication(this.state.firstInputs);
          this.setState({
            trackOperator: button,
            secondInput: true,
          });     
          break;
        case '/':
          this.division(this.state.firstInputs);
          this.setState({
            trackOperator: button,
            secondInput: true,
          });     
          break;
        default:
          break;
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
          <Buttons onClick={this.onClick} />
        </Grid>
      </div>
    );
  }
}

export default App;