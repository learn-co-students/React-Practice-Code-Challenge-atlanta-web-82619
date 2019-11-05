import React, { Fragment } from 'react'

class Sushi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eaten: false
    }
  }

  eatSushi = () => {
    /* get price, then see if budget - price is >= 0 */
    if (this.props.budget - this.props.sushi.price >= 0) {
      this.props.buySushi(this.props.sushi);
      this.setState({
        eaten: true
      })
    }
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.eatSushi}>
          {
            /* Tell me if this sushi has been eaten! */
            this.state.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" alt={this.props.sushi.name} />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }

}

export default Sushi