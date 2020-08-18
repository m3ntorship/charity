import React from 'react';
import cn from 'classnames';
import './style.css';

const IconWithTextItem = ({
  textTemplate,
  textAlign,
  iconAlign,
  paragraphStart,
  iconStart,
  iconBg,
  data
}) => {
  const { firstIcon } = data;

  return (
    <div className="lg:grid grid-cols-2 items-center justify-center sm:flex flex-row">
      <div
        className={cn('md:mb-0 mb-6 py-6', {
          'col-start-1 col-end-2': paragraphStart === 'start',
          'col-start-2 col-end-3': paragraphStart === 'end'
        })}
      >
        <p
          className={cn('text-md text-c100', {
            'lg:text-left': !textAlign || textAlign === 'left',
            'text-center': textAlign === 'center',
            'text-right': textAlign === 'right'
          })}
        >
          {textTemplate}
        </p>
      </div>
      <div
        className={cn('h-full flex items-center justify-start', {
          'col-start-1 col-end-2 row-start-1': iconStart === 'start',
          'col-start-2 col-end-3 row-start-1': iconStart === 'end',

          icon__bg: iconBg
        })}
      >
        <img className="pl-5" src={data} alt="" />
      </div>
    </div>
  );
};

export default IconWithTextItem;
