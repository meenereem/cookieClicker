import React from 'react';

const Header = (props) => (
    <div className="header">
        <center>
            <h1 className="header__title">{props.title}</h1>
            </center>
    </div>

);

Header.defaultProps = {
    title: 'Cookie Clicker'
}

export default Header;