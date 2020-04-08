import React from 'react';
import Type from './Type.component';
import LookingFor from './LookingFor.component';
import PostedBy from './PostedBy.component';
import Sharing from './Sharing.component';
import Monthly from './Budget.component';
import './filter.styles.css';

export default function Filters() {
    return (
        <div className="filterContainer">
            <Type />
            <LookingFor />
            <PostedBy />
            <Sharing />
            <Monthly />
        </div>
    )
}