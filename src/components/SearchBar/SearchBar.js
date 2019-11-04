import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rate': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component{
    /* purpose of this method is to dynamically create the list items needed to display the sort options */
    renderSortByOptions(){
        /* iterate through the object by accessing the keys of the object */
        /* pass a callback function to the map() method as an argument */
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key = {sortByOptionValue}> {sortByOption} </li>;
        });
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;