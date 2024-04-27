import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(searchTerm);
  };

  return (
    <input
      type="text"
      placeholder="Search by description"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;
