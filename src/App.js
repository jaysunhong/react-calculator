import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Buttons from './components/Buttons/Buttons';
import Display from './components/Display/Display';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      firstInputs: [],
      secondInputs: 0,
      total: 0,
      buttonPressed: '',
    };

    this.onClick = this.onClick.bind(this);
    this.addition = this.addition.bind(this);
  }

  addition = x => {
    let result = this.state.secondInputs;
    let convertX = parseInt(x);

    result += convertX;

    this.setState({
      secondInputs: result,
      total: result
    });
  }

  handleChange = e => {
    this.setState({
      buttonPressed: e.target.value
    })
  }

  onClick = button => {
    const concatFirst = this.state.firstInputs.concat(button);

    // if button pressed is a number then push input into firstInput state
    if (isNaN(button) === false) { 
      this.setState({
        firstInputs: concatFirst,
        buttonPressed: button
      });
    } else if (button === '+' || button === '=') {
      this.addition(this.state.firstInputs.join(''));
      this.setState({
        firstInputs: [],
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Display buttonPressed={this.state.firstInputs} display={this.state.total} onChange={this.handleChange} />
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
