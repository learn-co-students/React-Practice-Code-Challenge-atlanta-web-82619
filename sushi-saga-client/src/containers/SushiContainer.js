import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      start : 0,
      end : 4
    }
  }



  moveForward = () => {
    this.setState((state) => {
      return {
        start : state.start + 4,
        end : state.end + 4
      }
    })
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushi.slice(this.state.start,this.state.end).map(s => (
              <Sushi key={s.id} sushi={s} budget={this.props.budget} buySushi={this.props.buySushi} />
            ))
          }
          <MoreButton moveForward={this.moveForward} />
        </div>
      </Fragment>
    )
  }

}

export default SushiContainer