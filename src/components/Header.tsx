import React from 'react'

import logoText from '../assets/img/logo-text.png';
import profileImg from '../assets/img/profile.jpg';

const Header = () => {
    return (
        <header className="d-flex flex-row flex-space-between bg-white border-bottom p1 navbar" style={{height: '50px'}}>
            <a className="logo-text d-flex flex-center">
                {/* <img src={logoText} alt="Text logo"/> */}
                Yammy
            </a>

            <div className="user-avatar">
                <img src={profileImg} alt="user-avatar"/>
            </div>

            {/* AVATAR */}
        </header>
    )
}

export default Header
