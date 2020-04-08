import React from 'react';

export default function LookingFor() {
    return (
        <div className="lookingFor">
            <div className="filterLabel">Looking For</div>

            <ul className="lookingForOptions">
                <li><input type="checkbox" className="male" /> <span>Male</span></li>
                <li><input type="checkbox" className="female" /> <span>Female</span></li>
            </ul>
        </div>
    )
}