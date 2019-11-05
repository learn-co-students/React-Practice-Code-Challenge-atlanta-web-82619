import React from 'react';

class SushiWallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }


  render() {
    return (
      <form  onSubmit={(e) => this.props.addToWallet(e, Number(this.state.value))} >
        <input type="number" value={this.state.value} onChange={this.handleChange}></input>
        <button type="submit">Add Money</button>
      </form>
    )
  }
}

export default SushiWallet;