import React, { useState, useEffect } from 'react';
import "./sidebar.css";
import LogoutButton from "../logout-button";
import { NavLink } from 'react-router-dom';


export default function Sidebar() {


    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem"><NavLink to="/getcustomers" style={{ textDecoration: 'none', color:"#1F1D36" }}>Customers</NavLink></li>
                    <li className="sidebarListItem"><NavLink to="/createcustomer" style={{ textDecoration: 'none', color:"#1F1D36" }}>Create Customers</NavLink></li>
                    <li className="sidebarListItem"><NavLink to="/getapp" style={{ textDecoration: 'none', color:"#1F1D36" }}>Apps</NavLink></li>
                    <li className="sidebarListItem"><NavLink to="/createapp" style={{ textDecoration: 'none', color:"#1F1D36" }}>Create App</NavLink></li>
                    <li className="sidebarListItem"><NavLink to="/getenvironment" style={{ textDecoration: 'none', color:"#1F1D36" }}>Environment</NavLink></li>
                    <li className="sidebarListItem"><NavLink to="/createenvironment" style={{ textDecoration: 'none', color:"#1F1D36" }}>Create Environment</NavLink></li>
                    <li className="sidebarListItem"><NavLink to="/getuser" style={{ textDecoration: 'none', color:"#1F1D36" }}>Users</NavLink></li>
                    <li className="sidebarListItem"><NavLink to="/createuser" style={{ textDecoration: 'none', color:"#1F1D36" }}>Create Users</NavLink></li>
                    <br />
                    <li className="sidebarListItem"><LogoutButton /></li>
                </ul>
            </div>
        </div>
    )
}
