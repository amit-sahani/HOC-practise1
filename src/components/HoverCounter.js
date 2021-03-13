import React, { Component } from 'react'
import UpdatedComponent from './Counter'

class HoverCounter extends Component {

    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCounter}> Hover Mouse</h1>
                <div>{this.props.count}</div>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
