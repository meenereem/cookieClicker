import React from 'react'

const Factory = (props) => (
    <div>
    <p>
    <a className="btn btn-primary"  href="#" onClick={props.buildFactory}>Destroy Factory</a>     
    Cost: {props.factoryPrice}</p>
    </div>

)

export default Factory;