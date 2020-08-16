import React from 'react';
import cn from 'classnames';
import './style.css';

const OverlapingImg = ({ data }) => {
  const { mainImg, smallImg, verticalTitle } = data;
  return (
    <div className="w-1/2 grid grid-cols-2">
      <div className=" relative">
        <div className="mainImg__box">
          <img
            className="object-cover min-h-full w-full"
            src={mainImg}
            alt=""
          />
        </div>
        <div className="vertical__title h-64 w-32 bg-c200 absolute flex items-center justify-center">
          <h6 className="text-c000 text-xl">{verticalTitle}</h6>
        </div>
      </div>
      <div>
        <img className="object-cover w-48 h-40" src={smallImg} alt="" />
      </div>
    </div>
  );
};

export default OverlapingImg;
