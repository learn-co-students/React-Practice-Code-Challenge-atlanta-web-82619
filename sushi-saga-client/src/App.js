import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      eatenSushi: [],
      budget: 100
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      sushis: data
    }))
  }

  buySushi = (sushi) => {
    this.setState((state) => {
      return {
        budget: state.budget - sushi.price,
        eatenSushi: [...state.eatenSushi, sushi]
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushis} budget={this.state.budget} buySushi={this.buySushi} />
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;