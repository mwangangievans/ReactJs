import React, { Component } from 'react'

 class Classclick extends Component {
    clickMe(){
        console.log("me button was clicked....");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickMe}>Click Me</button>
      </div>
    )
  }
}

export default Classclick