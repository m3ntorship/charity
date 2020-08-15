import React from 'react';

const OverlapingImg = ({ data }) => {
  const { mainImg, smallImg } = data;
  return (
    <div>
      <div className="grid grid-cols-5">
        <div className="character__container">
          <img
            className="object-cover w-full min-h-full"
            src={mainImg}
            alt=""
          />
        </div>

        <div className="col-start-2 row-start-1 row-end-4 z-10 hidden lg:block">
          <div className="homesection__greenbox bg-c100">
            <img className="object-cover w-full h-full" src={smallImg} alt="" />
          </div>
          <div className="homesection__redbox homepage__section-text bg-c200 text-c000 -ml-8 flex items-center justify-center">
            <h6 className="text-3xl">Chairty Theme</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlapingImg;
