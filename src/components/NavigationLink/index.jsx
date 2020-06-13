import React from 'react';
import { Link } from 'react-router-dom';

const NavigationLink = ({ url, text, className }) => {
  return (
    <li className={className}>
      <Link to={url} className="text-c600 hover:text-c100 p-2 mx-1 block">
        {text}
      </Link>
    </li>
  );
};

export default NavigationLink;
