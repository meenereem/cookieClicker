import React from 'react'

const upgradeClick = (props) => (
    <div>
    <p>
    <a className="btn btn-primary"  href="#" onClick={props.upgradeClick}>upgradeClick!</a>
    Cost: {props.upgradeClickPrice}</p>
    </div>

)

export default upgradeClick;