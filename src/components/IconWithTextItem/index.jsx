import React from 'react';
import cn from 'classnames';

const IconWithTextItem = ({
  spanTitle,
  textTemplate,
  fontWeight,
  fontSize,
  textColor,
  textAlign,
  paragraphStart,
  iconStart,

  data
}) => {
  const { firstIcon, secondIcon, iconBg } = data;

  return (
    <div className="grid grid-cols-2 items-center">
      <div
        className={cn('flex flex-col items-center', {
          'col-start-1 col-end-2': paragraphStart === 'start',
          'col-start-2 col-end-3': paragraphStart === 'end'
        })}
      >
        <p
          className={cn('text-lg', {
            // text align
            'text-left': !textAlign || textAlign === 'left',
            'text-center': textAlign === 'center',
            'text-right': textAlign === 'right',

            // text color
            'text-c600': !textColor || textColor === 'grey',
            'text-c000': textColor === 'white',

            // font size
            'text-base': !fontSize || fontSize === 'base',
            'text-md': fontSize === 'md',
            'text-lg': fontSize === 'lg',
            'text-xl': fontSize === 'xl',
            'text-xxl': fontSize === 'xxl',

            // font weight
            'font-extrabold': fontWeight === 'extrabold',
            'font-bold': fontWeight === 'bold',
            'font-medium': fontWeight === 'medium',
            'font-normal': fontWeight === 'normal'
          })}
        >
          <div className="w-full text-left text-c000 text-base ">
            {spanTitle}
          </div>

          {textTemplate}
        </p>
      </div>
      <div
        className={cn('h-full relative flex items-center', {
          'col-start-1 col-end-2 row-start-1': iconStart === 'start',
          'col-start-2 col-end-3  row-start-1': iconStart === 'end'
        })}
      >
        <img
          className={cn('pl-3 pt-12 pl-6', {
            relative: !iconBg,
            'absolute z-auto top-0': iconBg
          })}
          src={firstIcon}
          alt=""
        />
        <img src={iconBg ? iconBg : null} alt="" />
      </div>
    </div>
  );
};

export default IconWithTextItem;
