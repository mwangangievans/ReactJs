import React , {Component} from "react";

class Message extends Component {
    constructor(){
        super()
        this.state = {
            Message : "welcome visitor",
        }
    }
    subscribe(){
        this.setState({
            Message : " Thants for subscribing..."
        })
    }
    render(){
        return (<div>
            <p>{this.state.Message}</p>
            <button onClick={()=>this.subscribe()}>Subscribe</button>
        </div>)
    }
}
export default Message