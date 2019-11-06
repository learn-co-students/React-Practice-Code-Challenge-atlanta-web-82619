import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    money: 100,
    sushiIndex: 0
  }

  sushisToDisplay = () => {
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
  }

  eat = (sushi) => {
    const newWallet = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && newWallet >= 0) {
      this.setState({
        eaten:[...this.state.eaten, sushi],
        money: newWallet
      })
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushiData => {
      this.setState({
        sushis: sushiData
      })
    })
  }

  more = (event) => {
    let newSushiIndex = this.state.sushiIndex + 4 

    if(newSushiIndex >= this.state.sushis.length){
      newSushiIndex = 0
    }

    this.setState({
      sushiIndex: newSushiIndex
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.sushisToDisplay()}
        eaten={this.state.eaten}
        eat={this.eat}
        more={this.more}
        />
        <Table 
        money={this.state.money} 
        eaten={this.state.eaten}
        />
      </div>
    );
  }
}

export default App;