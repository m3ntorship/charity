import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

/* 
<Heading size="xl" primeryTextColor="lite" secondaryTextColor="" align=""/>
 */

const Heading = ({
  primaryText,
  secondaryText,
  size,
  primaryTextColor,
  secondaryTextColor,
  align,
  primaryClassName,
  secondaryClassName
}) => {
  return (
    <h2
      className={cn(
        'leading-tighter tracking-tight font-extrabold mb-16',
        {
          // sizes
          'text-xl': !size,
          'text-xxl': size === 'xxl',
          'text-xxxl': size === 'xxxl',

          // colors
          'text-c000': !primaryTextColor,
          'text-c100': primaryTextColor === 'dark',

          // alignment
          'text-left': !align,
          'text-center': align === 'center'
        },
        primaryClassName
      )}
    >
      {primaryText}
      <span
        className={cn(
          'font-hairline underline border-b-2',
          {
            'text-c200': !secondaryTextColor,
            'text-c300': secondaryTextColor === 'yellow'
          },
          secondaryClassName
        )}
      >
        {secondaryText}
      </span>
    </h2>
  );
};

Heading.propTypes = {
  primaryText: PropTypes.string.isRequired,
  secondaryText: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xl', 'xxl', 'xxxl']),
  primaryTextColor: PropTypes.oneOf(['dark']),
  secondaryTextColor: PropTypes.oneOf(['yellow']),
  align: PropTypes.oneOf(['center']),
  primaryClassName: PropTypes.string,
  secondaryClassName: PropTypes.string
};

export default Heading;
