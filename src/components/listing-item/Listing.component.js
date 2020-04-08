import React from 'react';
import './listing.styles.css';
import { GoLocation } from 'react-icons/go';
import { MdCropSquare } from 'react-icons/md';
import { GoStar } from 'react-icons/go';


export default function ListingItem() {
    return (
        <div className="listing">
            <div className="nameAndPrice">
                <div className="propertyName">Clinton Villa</div>
                <div className="rent">$3,400</div>
            </div>
            <div className="addressAndReview">
                <div className="address"><span><GoLocation /></span> Los Angeles</div>
                <div className="dimension"><span><MdCropSquare /></span> 2,433 sq/m</div>
                <div className="review"><span><GoStar /></span>4.4 Review</div>
            </div>
        </div>
    )
}