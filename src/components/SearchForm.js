import React, { useState } from "react";

const SearchForm = () => {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
    };

    return (
        <div>
            <form onSubmit={getSearch} className="search-form">
                <input
                    className="search-bar"
                    type="text"
                    value={search}
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
