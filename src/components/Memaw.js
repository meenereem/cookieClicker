import React from 'react'

const Memaw = (props) => (
    <div>
    <p>
    <a className="btn btn-primary"  href="#" onClick={props.Memaw}>Hire Memaw</a>
    <span style={{textAlign: 'right'}}>Cost: {props.meMawPrice}</span></p>
    </div>

)

export default Memaw;