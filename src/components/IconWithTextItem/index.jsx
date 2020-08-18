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
    <div className="grid grid-cols-2 gap-2 py-8">
      <div
        className={cn({
          'col-start-1 col-end-2': paragraphStart === 'start',
          'col-start-2 col-end-3': paragraphStart === 'end'
        })}
      >
        <p
          className={cn('text-md text-c100 pt-5', {
            'text-left': !textAlign || textAlign === 'left'
          })}
        >
          {textTemplate}
        </p>
      </div>
      <div
        className={cn({
          'col-start-1 col-end-2 row-start-1': iconStart === 'start',
          'col-start-2 col-end-3  row-start-1': iconStart === 'end',

          icon__bg: iconBg
        })}
      >
        <img className="py-6 pl-5 h-full" src={firstIcon} alt="" />
      </div>
    </div>
  );
};

export default IconWithTextItem;
