import React from 'react';
import './pagination.styles.css';

export default function Pagination() {
    return (
        <div className="pagination">
            <ul>
                <li>1</li>
                <li className="active">2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    )
}