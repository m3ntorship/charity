import React from 'react';
import cn from 'classnames';

const DynamicNumber = ({ numberColor, text, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        className={cn('text-xxxl', {
          'text-c200': !numberColor || numberColor === 'red',
          'text-c300': numberColor === 'yellow',
          'text-c400': numberColor === 'green'
        })}
      >
        {text}
      </h1>
      <p className="text-c600 text-center">{desc}</p>
    </div>
  );
};

export default DynamicNumber;
