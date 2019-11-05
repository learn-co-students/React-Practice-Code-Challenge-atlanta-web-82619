import React, { Fragment } from 'react'

class Sushi extends React.Component {
  handleClick = () => {
    if (this.props.funds >= this.props.sushi.price && !this.props.sushi.eaten) {
      this.props.eatSushi(this.props.sushi.price, this.props.sushi);
    }
  }

  render () {
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.handleClick}>
          { 
            this.props.sushi.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
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