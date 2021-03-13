import React, { Component } from 'react';
import UpdatedComponent from './Counter'

class ClickCounter extends Component {

    render() {
        return (
            <div>
                <div>{this.props.count}</div>
                <button onClick={this.props.incrementCounter} >Click Count</button>
            </div>
        );
    }
}

export default UpdatedComponent(ClickCounter);