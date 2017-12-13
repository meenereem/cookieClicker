import React from 'react'
import BurnFarm from './BurnFarm'

const Farm = (props) => (
    <div>
        <p>
            <button className="btn btn-primary" href="#" onClick={props.buildFarm}> Build Farm</button>
            Cost: {props.farmPrice}
            <BurnFarm
                burnFarm={this.burnFarm}
            />
        </p>
    </div>
)

export default Farm;