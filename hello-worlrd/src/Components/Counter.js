import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    incrementCount() {
        // this.setState({
        //     count: this.state.count + 1

        // }, () => {
        //     console.log("callback...", this.state.count);

        // })
        // console.log("count..", this.state.count);

        this.setState((previousCount) =>({
            count : previousCount.count + 1
        }),()=>{
            console.log("callback count..", this.state.count);

        })
        console.log("count..", this.state.count);
    }
    incrementFiveTimes(){
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()

    }
    render() {
        return (
            <div>
                <p>Counter - {this.state.count}</p>
                <button onClick={() => this.incrementFiveTimes()}>Increment</button>
            </div>
        )
    }
}

export default Counter