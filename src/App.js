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
          secondInput: false,
          total: prevState.total + parseFirst,
          firstInputs: [],
        }));
      }
    } else if (this.state.equalOperator) {
      this.setState({
        equalOperator: false,
        firstInputs: [],
        secondInput: true,
      })
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
          secondInput: false,
          total: prevState.total - parseFirst,
          firstInputs: [],
        }));
      }
    } else if (this.state.equalOperator) {
      this.setState({
        equalOperator: false,
        firstInputs: [],
        secondInput: true,
      })
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
          secondInput: false,
          total: prevState.total * parseFirst,
          firstInputs: [],
        }));
      }
    } else if (this.state.equalOperator) {
      this.setState({
        equalOperator: false,
        firstInputs: [],
        secondInput: true,
      })
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
          secondInput: false,
          total: prevState.total / parseFirst,
          firstInputs: [],
        }));
      }
    } else if (this.state.equalOperator) {
      this.setState({
        equalOperator: false,
        firstInputs: [],
        secondInput: true,
      })
    }
  }

  // function onClick which receives a parameter (props) of the button clicked value
  onClick = button => {

    if (isNaN(button) === false) { 

      const concatFirst = this.state.firstInputs.concat(button);

      this.setState({
        firstInputs: concatFirst,
      });

    } else if (isNaN(button)) {

      if (button === '+') {
        this.addition(this.state.firstInputs);
        this.setState({
          trackOperator: button,
          secondInput: true,
        });
      } else if (button === '-') {
        this.subtraction(this.state.firstInputs);
        this.setState({
          trackOperator: button,
          secondInput: true,
        });
      } else if (button === '*') {
        this.multiplication(this.state.firstInputs);
        this.setState({
          trackOperator: button,
          secondInput: true,
        });     
      } else if (button === '/') {
        this.division(this.state.firstInputs);
        this.setState({
          trackOperator: button,
          secondInput: true,
        });      
      } else if (button === 'ac') {
        this.setState({
          firstInputs: [],
          secondInput: false,
          trackOperator: '',
          total: 0,
        });
      } else if (button === '=') {
        const trackOperator = this.state.trackOperator;

        this.setState({
          equalOperator: true,
        }, () => console.log(this.state.firstInputs));

        if (trackOperator === '+') {
          this.addition(this.state.firstInputs);   
        } else if (trackOperator === '-') {
          this.subtraction(this.state.firstInputs);   
        } else if (trackOperator === '*') {
          this.multiplication(this.state.firstInputs);
        } else if (trackOperator === '/') {
          this.division(this.state.firstInputs);
        }
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