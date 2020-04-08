import React from 'react';
import { FaAndroid } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import './footer.styles.css';


export default function Footer() {
    return (
        <div className="footer">
            <div>
                <span className="brandName">Rently</span>
                <span className="currentYear">2020</span>
            </div>
            <div className="download">
                <span className="download-text">Download App</span>
                <span className="apple">
                    <DiApple />
                </span>
                <span className="android">
                    <FaAndroid />
                </span>
            </div>
            <div className="links">
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}