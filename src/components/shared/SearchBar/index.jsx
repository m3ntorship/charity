import React from 'react';

export const SearchBar = () => {
  return (
    <div className="searchbar relative text-sm ">
      <input
        type="text"
        placeholder="Search ..."
        className="searchbar__input bg-c400 text-c000 py-4 px-5 pr-12 w-full"
      />
      <i className=" searchbar__icon fas fa-search absolute right-0"></i>
    </div>
  );
};
