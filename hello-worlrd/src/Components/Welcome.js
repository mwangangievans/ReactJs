import React , {Component} from "react";

class welcome  extends Component{
    render(){
        console.log("props in class based",this.props);
        return <p>{this.props.name}</p>
    }

}
export default welcome