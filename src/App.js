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

  onClick = button => {
    const concatFirst = this.state.firstInputs.concat(button);

    if (isNaN(button) === false) {
      this.setState({
        firstInputs: concatFirst
      });
    } else if (button === '+') {
      this.addition(this.state.firstInputs.join(''));
      this.setState({
        firstInputs: []
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Display display={this.state.total} />
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
