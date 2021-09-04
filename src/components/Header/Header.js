import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { Avatar } from '@material-ui/core';



function Header() {


    return (
        <div className="header">
            <div className="header__left">
                <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png" alt="logoss" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQFYi1UFXQANoA/profile-displayphoto-shrink_200_200/0/1625398775650?e=1635984000&v=beta&t=KxoQAO7dqA0L0ulmBIESWi-nih3Y39Opx_gfwNrTq5k" title="Me" />

            </div>
        </div>
    )
}

export default Header
