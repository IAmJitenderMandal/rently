import React from 'react';

export default function Budget() {
    return (
        <div className="budget">
            <div className="filterLabel">Budget</div>       
            <div className="budgetOptions">
                <select name="min-price">
                    <option value="1000">1,000</option>
                    <option value="2000">2,000</option>
                    <option value="3000">3,000</option>
                    <option value="4000">4,000</option>
                    <option value="5000">5,000</option>
                    <option value="6000">6,000</option>
                    <option value="7000">7,000</option>
                    <option value="8000">8,000</option>
                    <option value="9000">9,000</option>
                    <option value="10000">10,000</option>
                    <option value="11000">11,000</option>
                    <option value="12000">12,000</option>
                    <option value="13000">13,000</option>
                    <option value="14000">14,000</option>
                    <option value="15000">15,000+</option>
                </select>
                <select name="max-price">
                    <option value="15000">15,000</option>
                    <option value="20000">20,000</option>
                    <option value="25000">25,000</option>
                    <option value="30000">30,000</option>
                    <option value="35000">35,000</option>
                    <option value="40000">40,000</option>
                    <option value="45000">45,000</option>
                    <option value="50000">50,000</option>
                    <option value="55000">55,000</option>
                    <option value="60000">60,000</option>
                    <option value="65000">65,000</option>
                    <option value="70000">70,000</option>
                    <option value="75000">75,000</option>
                    <option value="80000">80,000</option>
                    <option value="85000">85,000+</option>
                </select>
            </div>
        </div>
    )
}