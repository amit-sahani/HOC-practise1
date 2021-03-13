import React from 'react'

const UpdatedComponent = (OriginalComponents) =>  {
    
    class NewComponent extends React.Component {

        
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    

    incrementCounter =() => {
        this.setState({count: this.state.count + 1})
    }

        render() {
            return <OriginalComponents count={this.state.count} incrementCounter={this.incrementCounter} />
        }
    }

    return NewComponent
}

export default UpdatedComponent 
