import React from "react";

// function Greet() {
//     return <p>hello Mwangangi</p>
// }

// arrow syntax

const Greet = (props) => {
    console.log(props);
    return (
        <div>
            <p>Hello {props.name}</p>
            {props.children}
        </div>
    )
}


export default Greet

// named export 
// default export