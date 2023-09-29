import React from 'react'

function FuctionClick() {
    function eventhandler(){
        console.log("button clicled...");
}
  return (
    <div>
        <button onClick={eventhandler}>Click</button>
    </div>
  )
}

export default FuctionClick