import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaRegBell } from 'react-icons/fa';
import './nav.styles.css';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="brandName">Rently</div>
            <div className="user-details">
                <button className="list-place-btn">List Your Place</button>
                <span className="notification-bell"> <FaRegBell /> </span>
                <div className="user">
                    <span className="avatar"></span>
                    <span className="dropdown-icon"> <FaChevronDown /> </span>
                    <div className="dropdown-menu">
                        <ul className="menu">
                            <li>Your Profile</li>
                            <li>Your Listings</li>
                            <li>Sign Out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;