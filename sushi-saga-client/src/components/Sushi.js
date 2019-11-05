import React, { Fragment } from 'react'

const Sushi = props => {
  const eatSushi = () => {
    /* get price, then see if budget - price is >= 0 */
    if (props.budget - props.sushi.price >= 0) {
      props.buySushi(props.sushi);
      // this.setState({
      //   eaten: true
      // })
    }
  }

  return (
    <div className="sushi">
      <div className="plate"
            onClick={eatSushi}>
        {
          /* Tell me if this sushi has been eaten! */
          props.eatenSushi.includes(props.sushi) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" alt={props.sushi.name} />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )


}

export default Sushi