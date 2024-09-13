import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

function Parent() {

    var[x,setX]=useState(true)
  return (
    <div>
    {
        x ? <Child1 data={[x,setX]}/>:<Child2 data={[x,setX]}/>
    }
    </div>
    
  )
}

export default Parent
