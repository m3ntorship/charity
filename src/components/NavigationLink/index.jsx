import React from 'react';
import cn from 'classnames';
import './style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavigationLink = ({ url, title, secondaryClassName, linkClassName }) => {
  return (
    <li className={cn('text-center', secondaryClassName)}>
      <Router>
        <Link className={cn('', linkClassName)} to={url}>
          {title}
        </Link>
      </Router>
    </li>
  );
};

export default NavigationLink;
