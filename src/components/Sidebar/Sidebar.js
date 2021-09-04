
import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@material-ui/core';
import HeaderOption from '../Header/HeaderOption';
import Header from '../Header/Header';

function Sidebar(avatar) {

    const recentItem = (topic) => (
        <div className="recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );




    return (
        <div className="sidebar">
            <div className="sidebar__top">

                <img src="https://images.unsplash.com/photo-1477132394330-d2376dc4c091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="" />
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFYi1UFXQANoA/profile-displayphoto-shrink_200_200/0/1625398775650?e=1635984000&v=beta&t=KxoQAO7dqA0L0ulmBIESWi-nih3Y39Opx_gfwNrTq5k" />
                <h2>Utkarsh Srivastav</h2>
                <h4>usrivastav11@gmail.com</h4>
            </div>

            <div className="sidebar__stats">


                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="stat__number">2,345</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="stat__number">2,845</p>
                </div>

            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('programming')}
                {recentItem('developer')}
                {recentItem('design')}
                {recentItem('softwareEngineering')}

            </div>
        </div>
    )
}

export default Sidebar
