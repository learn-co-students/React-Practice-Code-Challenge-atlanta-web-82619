import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    funds: 100, /* set this to whatever */
    sushiEaten: []
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(sushi => {
        this.setState({
          sushi: sushi.map(sushi => {
            return { ...sushi, eaten: false }
          })
        });
      });
  }

  eatSushi = (cost, sushi) => {
    let newSushiArray = this.state.sushi.map(nextSushi => {
      if (sushi.id === nextSushi.id) {
        return ({ ...nextSushi, eaten: true });
      }
      else {
        return nextSushi;
      }
    })

    this.setState({
      funds: this.state.funds - cost,
      sushi: newSushiArray,
      sushiEaten: [ ...this.state.sushiEaten, sushi ]
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} eatSushi={this.eatSushi} funds={this.state.funds} />
        <Table funds={this.state.funds} sushiEaten={this.state.sushiEaten} />
      </div>
    );
  }
}

export default App;