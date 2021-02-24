import React from 'react'

import favorite from '../assets/icons/favorite.svg';
import setting from '../assets/icons/setting.svg';
import user from '../assets/icons/user.svg';
import home from '../assets/icons/home.svg';

const MenuTab: React.FC = () => {
    return (
        <div className="menu-tab d-flex flex-row flex-space-between p1 bg-white border-top">
            <a href="!#" className="d-flex flex-column flex-center active">
                <img src={home} alt="Home page" />
                <span className="text-secondary">Home</span>
            </a>
            <a href="/#"  className="d-flex flex-column flex-center">
                <img src={favorite} alt="Home page" />
                <span className="text-secondary">Favorite</span>
            </a>
            <a href="#"  className="d-flex flex-column flex-center">
                <img src={user} alt="Home page" />
                <span className="text-secondary">My Profile</span>
            </a>
            <a href="#"  className="d-flex flex-column flex-center">
                <img src={setting} alt="Home page" />
                <span className="text-secondary">Settings</span>
            </a>
        </div>
    )
}

export default MenuTab
