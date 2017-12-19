import React from 'react'
import DestroyBank from './DestroyBank'

const Bank = (props) => (
    <div>
        <p>
            <a className="btn btn-primary" href="#" onClick={props.buildBank}>Build Bank</a>
            Cost: {props.bankPrice}
        </p>
    </div>

)

export default Bank;