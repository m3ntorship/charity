import React from 'react';
import cn from 'classnames';

const IconWithTextItem = ({
  textTemplate,
  textAlign,
  iconAlign,
  paragraphStart,
  iconStart,
  data
}) => {
  const { firstIcon, secondIcon } = data;

  return (
    <div className="grid grid-cols-2 gap-2">
      <div
        className={cn({
          'col-start-1 col-end-2': paragraphStart === 'start',
          'col-start-2 col-end-3': paragraphStart === 'end'
        })}
      >
        <p
          className={cn('text-lg text-c100', {
            'text-left': !textAlign || textAlign === 'left'
          })}
        >
          {textTemplate}
        </p>
      </div>
      <div
        className={cn({
          'col-start-1 col-end-2 row-start-1': iconStart === 'start',
          'col-start-2 col-end-3  row-start-1': iconStart === 'end'
        })}
      >
        <img src={firstIcon} alt="" />
      </div>
    </div>
  );
};

export default IconWithTextItem;
