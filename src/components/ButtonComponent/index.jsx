import React from 'react';
import cn from 'classnames';

const Button = ({ bgColor, btnText, btnTextColor, btnSize, fontSize }) => {
  return (
    <div>
      <button
        className={cn('font-bold', {
          'bg-c800': !bgColor || bgColor === 'gray',
          'bg-c300': bgColor === 'yellow',
          'bg-c200': bgColor === 'red',

          'text-c600': !btnTextColor || btnTextColor === 'gray',
          'text-c100': btnTextColor === 'dark',
          'text-c000': btnTextColor === 'white',

          'w-full h-full': !btnSize || btnSize === 'full',
          'h-20 w-56': btnSize === 'large',
          'h-20 w-40': !btnSize || btnSize === 'medium',
          'h-20 w-32': !btnSize || btnSize === 'small',

          'text-base': !fontSize || fontSize === 'base',
          'text-md': fontSize === 'md',
          'text-lg': fontSize === 'lg'
        })}
      >
        {btnText}
      </button>
    </div>
  );
};

export default Button;
