import React from "react";

const Search = ({ search, handleSearch }) => {
  return (
    <input
      value={search}
      onChange={(e) => handleSearch(e.target.value)}
      type="text"
      placeholder="Search ..."
      name="search"
      className="w-1/2 md:w-1/3 h-10 md:h-12 rounded-md border p-2 md:p-3 text-gray-900 shadow-sm"
    />
  );
};

export default Search;
