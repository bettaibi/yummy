import React from 'react'

import favorite from '../assets/icons/favorite.svg';
import setting from '../assets/icons/setting.svg';
import user from '../assets/icons/user.svg';
import home from '../assets/icons/home.svg';

import { NavLink } from 'react-router-dom';

const MenuTab: React.FC = () => {
    return (
        <div className="menu-tab d-flex flex-row flex-space-between p1 bg-white border-top">
            <NavLink to='/' activeClassName="active"  className="d-flex flex-column flex-center">
                <img src={home} alt="Home page" />
                <span className="text-secondary">Home</span>
            </NavLink>
            <NavLink to='/favorite' activeClassName="active" href="/#"  className="d-flex flex-column flex-center">
                <img src={favorite} alt="Home page" />
                <span className="text-secondary">Favorite</span>
            </NavLink>
            <NavLink to='/profile' activeClassName="active" href="#"  className="d-flex flex-column flex-center">
                <img src={user} alt="Home page" />
                <span className="text-secondary">My Profile</span>
            </NavLink>
            <NavLink to='/setting' activeClassName="active" href="#"  className="d-flex flex-column flex-center">
                <img src={setting} alt="Home page" />
                <span className="text-secondary">Settings</span>
            </NavLink>
        </div>
    )
}

export default MenuTab
