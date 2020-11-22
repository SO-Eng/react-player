import React, { useState } from "react";

const SearchForm = ({ setSearch }) => {
    const [query, setQuery] = useState("");

    const updateSearch = (e) => {
        setQuery(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setSearch(query.toLowerCase());
    };

    return (
        <div>
            <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={query}
                    onChange={updateSearch}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchForm;
