import React from 'react';

export default function Sharing() {
    return (
        <div className="sharing">
            <div className="filterLabel">Sharing</div>
            
            <div>
                <ul className="sharingOptions">
                    <li>
                        <select>
                            <option selected value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                            <option value="1">4</option>
                            <option value="1">5</option>
                       </select>
                    </li>
                </ul>
            </div>
        </div>
    )
}