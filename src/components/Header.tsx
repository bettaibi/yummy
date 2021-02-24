import React from 'react'

import logoText from '../assets/img/logo-text.png';

const Header = () => {
    return (
        <header className="d-flex flex-row flex-space-between bg-white border-bottom p1 navbar" style={{height: '50px'}}>
            <a className="logo-text d-flex flex-center">
                {/* <img src={logoText} alt="Text logo"/> */}
                Yammy
            </a>

            {/* AVATAR */}
        </header>
    )
}

export default Header
