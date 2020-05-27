import React from 'react';
import cn from 'classnames';
import './style.css';
import { Link } from 'react-router-dom';

const NavigationLink = ({ url, title, secondaryClassName, linkClassName }) => {
  return (
    <li className={cn('text-center', secondaryClassName)}>
      <Link className={cn('', linkClassName)} to={url}>
        {title}
      </Link>
    </li>
  );
};

export default NavigationLink;
