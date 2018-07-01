import React from 'react'
import DemolishBank from './DemolishBank'

const Cursor = (props) => (
    <div>
        <p>
            <a className="btn btn-primary" href="#" onClick={props.cursor}>Get Cursor</a>
            Cost: {props.cursorPrice}
        </p>
    </div>

)

export default Cursor;