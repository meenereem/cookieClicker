import React from 'react'
import cookie from './../images/cookie.png'
import './../styles/CookieButton.css'

const CookieButton = (props) => (
    <div className = "CookieButton">
    <img src={cookie} className="App-logo" alt="logo" />
    <button onClick={props.makeCookies}>make cookies!</button>
    </div>

);

export default CookieButton;