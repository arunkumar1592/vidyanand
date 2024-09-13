import React from 'react'

function Child2(props) {
    var[x,setX]=props.data
  return (
    <div>Child2
        <button onClick={()=>setX(true)}>Open</button>
    </div>
  )
}

export default Child2