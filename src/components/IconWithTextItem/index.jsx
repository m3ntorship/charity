import React from 'react';
import cn from 'classnames';

const IconWithTextItem = ({ textTemplate, textAlign, iconAlign, data }) => {
  const { firstIcon, secondIcon } = data;

  return (
    <div className="grid grid-cols-2 gap-2">
      <p
        className={cn('text-base text-c100', {
          'text-left': !textAlign || textAlign === 'left'
        })}
      >
        {textTemplate}
      </p>
      <img src={firstIcon} alt="" />
    </div>
  );
};

export default IconWithTextItem;
