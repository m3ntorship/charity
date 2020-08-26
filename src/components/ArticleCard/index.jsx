import React from 'react';
import './style.css';

const ArticleCard = () => {
  return (
    <div className="relative card__box bg-c100">
      <img
        className="h-full object-cover"
        src="https://tailwindcss.com/img/card-top.jpg"
        alt=""
      />

      <div className="articleTitle__box p-10 bg-c000 z-50 text-c700">
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
