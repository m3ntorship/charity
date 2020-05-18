import React from 'react';
import './style.scss';

const FindEvent = ({ data, loading }) => {
  // if (loading) {
  //   return <div>Loaaaaading!</div>;
  // }
  if (data) {
    return (
      <div className="widget-search px-8 py-10 flex flex-col justify-between">
        <h4 className="widget-search__title font-bold leading-none">
          Find an Event
        </h4>
        <div className="widget-search__line bg-c400 w-10"></div>
        <div className="widget-search__container">
          <input
            type="search"
            placeholder="Search..."
            className="widget-search__container__searchbar bg-c400 text-c000 py-4 px-5 w-full"
          />
        </div>
      </div>
    );
  }
};

export { FindEvent };
