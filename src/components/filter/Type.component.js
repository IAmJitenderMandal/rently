import React from 'react';

export default function Type() {
    return (
        <div className="typeFilter">
                <div className="filterLabel">Property Type</div>
                <div className="filterVals">
                <div>
                    <h5> Residential </h5>
                        <ul className="residentialTypes">
                            <li> <input type="checkbox" className="flat"/> <span>Flat</span> </li>
                            <li> <input type="checkbox" className="Villa"/> <span>Villa</span> </li>
                            <li> <input type="checkbox" className="Plot"/> <span>Plot</span> </li>
                        </ul>
                </div>
                <div>
                    <h5> Commercial </h5>
                        <ul className="CommercialTypes">
                        <li> <input type="checkbox" className="Office Space" /> <span>Office Space</span> </li>
                        <li> <input type="checkbox" className="Shop/Showroom" /> <span>Shop</span> </li>
                        <li> <input type="checkbox" className="Commercial Land" /> <span>Land</span> </li>
                        <li> <input type="checkbox" className="Warehouse" /> <span>Warehouse</span> </li>
                        <li> <input type="checkbox" className="Industrial Building" /> <span>Industrial Building</span> </li>
                        <li> <input type="checkbox" className="Industrial Shed" /> <span>Industrial Shed</span> </li>
                    </ul>
                    </div>
                    <div>
                        <h5> Other </h5>
                        <ul className="OthersTypes">
                            <li> <input type="checkbox" className="Agriculture land"/> <span>Agriculture Land</span> </li>
                            <li> <input type="checkbox" className="Farm House"/> <span>Farm House</span> </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}