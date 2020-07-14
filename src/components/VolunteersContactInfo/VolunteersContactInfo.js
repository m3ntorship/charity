/* jshint ignore: start */
import React from 'react';

const VolunteersContactTitle = ({ data }) => {
  const { title, subTitle, paragraph } = data;
  return (
    <div>
      <h6 className="text-xl text-c100 font-bold tracking-normal leading-none text-center md:text-left">
        {title}
        <span className="text-xl text-c200 font-light border-b-2">
          {subTitle}
        </span>
        <p className="my-16 leading-4 text-base text-c600 md:text-left text-center">
          {paragraph}
        </p>
      </h6>
    </div>
  );
};

export default VolunteersContactTitle;
