import React from "react";

function Search({onSearch, searchTerm}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search your Astrologie:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default Search;