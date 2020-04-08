import React, {Component} from 'react';
import Nav from './nav/Nav.component'
import Search from './search/Search.component';
import Filters from './filter/Filter.component';
import Listings from './listings/Listings.component';
import Pagination from './pagination/Pagination.component';
import Footer from './footer/Footer.component';

export default class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Nav />
                <Search />
                <Filters />
                <Listings />
                <Pagination />
                <Footer />
            </div>
        )
    }
}
