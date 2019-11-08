import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rate': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
             term: '',
             location: '',
             sortyBy: 'best_match',
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value });
    }

    handleLocationChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        /* call this to prevent the default action of clicking a link from triggering at the end of the method */
        event.preventDefault();
    }

    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active';
        } else {
            return '';
        }
    }

    handleSortyByChange(sortByOption) {
        this.setState({ sortBy: sortByOption });
    }



    /* purpose of this method is to dynamically create the list items needed to display the sort options */
    renderSortByOptions(){
        /* iterate through the object by accessing the keys of the object */
        /* pass a callback function to the map() method as an argument */
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            /* use bind to ensuring the method is called with the appropriate value when clicked */
            return <li key = {sortByOptionValue} onClick = {this.handleSortyByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}> {sortByOption} </li>;
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
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch} href="www.#.com">Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;