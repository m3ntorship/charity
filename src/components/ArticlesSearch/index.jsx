import React from 'react';
import './style.scss';
import { Widget } from '../shared/Widget';
import { SearchBar } from '../shared/SearchBar';

const ArticlesSearch = ({ data }) => {
  const { title } = data;
  return (
    <Widget title={title}>
      <div className="searchbar__container pt-5 pb-10 ">
        <SearchBar />
      </div>
    </Widget>
  );
};

export { ArticlesSearch };
