import React from 'react';

export default function PostedBy() {
    return (
        <div className="postedBy">
            <div className="filterLabel">Posted By</div>

            <div>
                <ul className="postedByOptions">
                    <li><input type="checkbox" className="dealer" /> <span>Dealer</span></li>
                    <li><input type="checkbox" className="owner" /> <span>Owner</span></li>
                </ul>
            </div>
        </div>
    )
}