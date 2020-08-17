import React from 'react';
import cn from 'classnames';

const Button = ({ bgColor, btnText, btnTextColor }) => {
  return (
    <div>
      <button
        className={cn('px-24 py-6 font-bold w-full', {
          'bg-c800': !bgColor || bgColor === 'gray',
          'bg-c300': bgColor === 'yellow',

          'text-c600': !btnTextColor || btnTextColor === 'gray',
          'text-c100': btnTextColor === 'dark'
        })}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
