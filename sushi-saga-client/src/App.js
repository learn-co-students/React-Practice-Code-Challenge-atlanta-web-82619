import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      sushiRotation: [],
      userBalance: 100,
      eatenSushi: [],
      input: ''
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      let modSushis = data.map(sushi => {
        return {...sushi, eaten: false}
      })
      this.setState({
        sushis: modSushis,
        sushiRotation: modSushis
      })
    })
  }

  eatSushiHandler = (sushi) => {
    if (sushi.price <= this.state.userBalance && !sushi.eaten) {
      sushi.eaten = true
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        userBalance: (this.state.userBalance - sushi.price)
      })
    }
  }

  moreButtonHandler = () => {
    if (this.state.sushiRotation.length >= 4) {
      this.setState({
        sushiRotation: this.state.sushiRotation.slice(3)
      })
    } else {
      this.setState({
        sushiRotation: [...this.state.sushis]
      })
    }
  }

  changeHandler = (e) => {
    this.setState({
        input: e.target.value
    })
  }

  submitButtonHandler = (e) => {
    e.preventDefault()

    this.setState({
      input: ''
    })

    if (parseInt(this.state.input)) {
      this.setState({
        userBalance: (this.state.userBalance + parseInt(this.state.input))
      })
    } else {
      alert('Input must be a number without decimals')
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushiRotation} eatSushiHandler={this.eatSushiHandler} moreButtonHandler={this.moreButtonHandler} />
        <Table userBalance={this.state.userBalance} inputValue={this.state.input} changeHandler={this.changeHandler} eatenSushi={this.state.eatenSushi} submitButtonHandler={this.submitButtonHandler}/>
      </div>
    );
  }
}

export default App;