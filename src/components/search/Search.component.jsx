import React from 'react'
import './search.styles.css';

export default function Search () {
    return (
        <div className="searchSection">
            <div className="searchBar">
                <form id="searchForm">
                <input type="text" name="searchInput" className="searchInput" placeholder="Search your place..." />
                <button type="submit" className="searchBtn">Search</button>    
                </form>
            </div>
        </div>
    )
}