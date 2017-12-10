import React from 'react'

const Farm = (props) => (
<div>
<p>
<button className="btn btn-primary"  href="#" onClick = {props.buildFarm}> Build Farm</button>
Cost: {props.farmPrice}</p>
</div>
)

export default Farm;