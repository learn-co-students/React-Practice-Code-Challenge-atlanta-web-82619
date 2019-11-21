import React, { Fragment } from 'react'
import Form from '../components/Form'

const Table = (props) => {
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <Form inputValue={props.inputValue} changeHandler={props.changeHandler} submitButtonHandler={props.submitButtonHandler} />

      <h1 className="remaining">
        You have: ${props.userBalance} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushi)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table