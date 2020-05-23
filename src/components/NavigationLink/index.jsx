import React from 'react';
import cn from 'classnames';
import './style.css';
import { Link } from 'react-router-dom';

const NavigationLink = ({ url, title, secondaryClassName }) => {
  return (
    <li className={cn('text-center m-2 lg:m-4', secondaryClassName)}>
      <Link className="navigation__link" to={url}>
        {title}
      </Link>
    </li>
  );
};

export default NavigationLink;
