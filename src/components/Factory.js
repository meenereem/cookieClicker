import React from 'react'
import BurnFactory from './BurnFactory'

const Factory = (props) => (
    <div>
        <p>
            <a className="btn btn-primary" href="#" onClick={props.buildFactory}>Build Factory</a>
            Cost: {props.factoryPrice}</p>

    </div>

)

export default Factory;