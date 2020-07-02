import React from 'react';
import './style.scss';

import { getDate } from '../../Helpers/Helpers';
const Date = ({ date }) => {
  return (
    <div>
      {date && (
        <div className="date__content w-20 h-20 border-solid border-6 border-c000 rounded-full text-c000 text-xs leading-tighter font-bold text-center p-4 bg-c400 flex align-center justify-center flex-col">
          <span> {getDate(date).day} </span>
          <span> {getDate(date).month} </span>
          <span> {getDate(date).year} </span>
        </div>
      )}
    </div>
  );
};

export default Date;
