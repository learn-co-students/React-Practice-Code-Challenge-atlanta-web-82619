import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet';

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
        /* eatenSushi: [...state.eatenSushi, sushi] also works using array spread operator */
        eatenSushi: state.eatenSushi.concat(sushi),

      }
    })

  }

  addToWallet = (e, amount) => {
    e.preventDefault();
    this.setState((state) => {
      return {
        budget: state.budget + amount
      }
    })
  }



  render() {
    return (
      <div className="app">
        <SushiWallet  addToWallet={this.addToWallet} />
        <SushiContainer sushi={this.state.sushis} budget={this.state.budget} buySushi={this.buySushi} eatenSushi={this.state.eatenSushi} />
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;