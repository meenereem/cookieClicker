import React from 'react'
import DemolishMine from './DemolishMine'

const Mine = (props) => (
    <div>
        <p>
            <a className="btn btn-primary" href="#" onClick={props.buildMine}>Build Mine</a>
            Cost: {props.minePrice}
            <DemolishMine
                demolishMine={this.demolishMine}
            />
        </p>
    </div>

)

export default Mine;