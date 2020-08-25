import React from 'react';
import './style.css';

const ArticleCard = () => {
  return (
re    <div className="relative grid grid-rows-3 max-w-md card__box my-12">
      <div className="row-start-1 row-end-4 col-start-1 bg-c100">
        <img
          className="h-full object-cover"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt=""
        />
      </div>

      <div className="absolute articleTitle__box p-10 bg-c000 row-start-3 col-start-1 z-50 text-c700">
        <div className="flex justify-around">
          <span>
            <i className="fa fa-user-circle mr-2 text-c500"></i>Admin
          </span>
          <span>
            <i className="fa fa-comment mr-2 text-c500"></i>Admin
          </span>
        </div>
        <div className="font-bold text-lg mb-2 text-center text-c100">
          Water Need in Africa
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
