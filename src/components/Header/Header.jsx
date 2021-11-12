import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss"

import avatar_icon from "../../images/avatar_icon.png"

const Header = () => {

    return (
        <div className="header">
            <Link to="/">
                <div className="logo">
                    Movie App
                </div>
            </Link>
            <div className="user-image">
                <img src={avatar_icon} alt="user" />
            </div>
        </div>
    )
}

export default Header
