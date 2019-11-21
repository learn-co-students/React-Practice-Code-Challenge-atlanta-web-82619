import React, {Component} from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            amount: 0
        }
    }

    changeHandler = (e) => {
        this.setState({
            amount: e.target.value
        })
      }

    render() {
        return (
            <form onSubmit={(e) => this.props.submitButtonHandler(e, this.state.amount)} >
                <label>Add Money: </label>
                <input 
                    type='number' 
                    onChange={this.changeHandler} 
                    placeholder="$$$">
                </input>
                <button value="submit">Confirm</button>
            </form>
        )
    }
}

export default Form