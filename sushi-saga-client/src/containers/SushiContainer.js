import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushi.slice(0, 3).map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushiHandler={props.eatSushiHandler}/>)}
        <MoreButton moreButtonHandler={props.moreButtonHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer