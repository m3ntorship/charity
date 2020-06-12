import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const NavigationLink = ({ url, text, className }) => {
  return (
    <li className={className}>
      <Link to={url} className="text-c600 hover:text-c500">
        {text}
      </Link>
    </li>
  );
};

export default NavigationLink;
