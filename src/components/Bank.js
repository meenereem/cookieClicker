import React from 'react'
import DemolishBank from './DemolishBank'

const Bank = (props) => (
    <div>
        <p>
            <a className="btn btn-primary" href="#" onClick={props.buildBank}>Build Bank</a>
            Cost: {props.bankPrice}
        </p>
    </div>

)

export default Bank;