import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const NavigationLink = ({ url, text, linkClassName, secondaryClassName }) => {
  return (
    <li className={cn('text-center', secondaryClassName)}>
      <Link to={url} className={cn('', linkClassName)}>
        {text}
      </Link>
    </li>
  );
};

export default NavigationLink;
