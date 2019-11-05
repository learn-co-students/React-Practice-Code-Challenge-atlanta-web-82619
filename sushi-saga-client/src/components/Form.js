import React, {Component} from 'react'

class Form extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.submitButtonHandler(e)} >
                <label>Add Money: </label>
                <input onChange={this.props.changeHandler} value={this.props.inputValue} placeholder="$$$"></input>
                <button value="submit">Deposit</button>
            </form>
        )
    }
}

export default Form