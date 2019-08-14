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
  addition = x => {
    const joinFirst = x.join('');
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
  subtraction = x => {
    const joinFirst = x.join('');
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
  multiplication = x => {
    const joinFirst = x.join('');
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
  division = x => {
    const joinFirst = x.join('');
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

  handleAC() {
    this.setState({
      firstInputs: [],
      secondInput: false,
      trackOperator: '',
      equalOperator: false,
      total: 0,
    });
  }

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

    if (isNaN(button) === false) { 
      const concatFirst = this.state.firstInputs.concat(button);
      
      if (this.state.equalOperator) {
        this.handleAC();
        this.setState({
          firstInputs: concatFirst,
        });
      } else {
        this.setState({
          firstInputs: concatFirst,
        });
      }
    } else if (button === 'ac') {
      this.handleAC();
    } else if (button === 'clear') {
      this.handleClear();
    } else if (button === '=') {
      this.handleEqual();
    } else if (isNaN(button)) {

      const joinFirst = this.state.firstInputs.join('');
      const parseFirst = parseFloat(joinFirst);

      if (!this.state.secondInput) {
        this.setState({
          secondInput: true,
          total: parseFirst,
          firstInputs: [],
          trackOperator: button
        });
      }

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