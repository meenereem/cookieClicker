import React from 'react'
import cookie from './../images/cookie.png'

const CookieButton = (props) => (
    <div>
    <img src={cookie} className="App-logo" alt="logo" />
    <button onClick={props.makeCookies}>make cookies!</button>
    </div>

);

export default CookieButton;