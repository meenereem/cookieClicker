import React from 'react'
import cookie from './../images/cookie.png'

const CookieButton = (props) => (
    <div className = "CookieButton">
    <img src={cookie} className="App-logo" alt="logo" />
    <a className="btn btn-primary"  href="#" onClick={props.makeCookies}>make cookies!</a>
    </div>

);

export default CookieButton;