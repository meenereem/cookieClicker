import React from 'react'
import FireMemaw from './FireMemaw'
import "./../styles/components/buttons.css"

const Memaw = (props) => (
    <div>
        <p>
            <a className="btn btn-primary" href="#" onClick={props.Memaw}>Hire Memaw</a>
            Cost: {props.meMawPrice}
            <div>

            </div>
            </p>
    </div>
)

export default Memaw;