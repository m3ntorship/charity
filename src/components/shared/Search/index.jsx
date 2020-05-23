import React from 'react';
import './style.scss';
import { Widget } from '../Widget';

const SearchBar = () => {
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

const Search = ({ data }) => {
  const { title } = data;
  return (
    <Widget title={title}>
      <div className="searchbar__container pt-5 pb-10 ">
        <SearchBar />
      </div>
    </Widget>
  );
};

export { Search };
