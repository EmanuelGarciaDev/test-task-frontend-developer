import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <form action="/" method="get">
      <input
      value={searchQuery}
      onInput={e => setSearchQuery((e.target as HTMLInputElement).value)}
      type="text"
        id="searchbar"
        placeholder="Search blog posts"
        className="border-2 rounded-lg p-1"
      />
    </form>
  );
};

export default SearchBar;
