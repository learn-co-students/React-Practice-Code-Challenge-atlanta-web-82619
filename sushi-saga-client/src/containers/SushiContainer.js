import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

class SushiContainer extends React.Component {
  state = {
    index: 0
  }

  moreSushi = () => {
    this.setState({
      index: this.state.index + 4
    });
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.props.sushi.slice(this.state.index, this.state.index + 4).map(sushi => {
              return (<Sushi eatSushi={this.props.eatSushi} sushi={sushi} funds={this.props.funds} />)
            })
          }
          <MoreButton moreSushi={this.moreSushi} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer