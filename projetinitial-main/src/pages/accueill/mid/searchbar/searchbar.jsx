import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="searchBarContainer">
            <div className="container">
                <div className="inputGroup">
                    <input type="text" className="input" placeholder="Search..." />
                </div>
                <button className="swapButton">Swap</button>
                <button className="searchButton">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;