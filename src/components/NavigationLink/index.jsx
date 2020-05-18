import React from 'react';
import './style.css';


const NavigationLink = ({url, title})=> {
  return (
    <li className="text-center m-2 lg:m-4">
      <a className="navigation__link" href={url}>
        {title}
      </a>
    </li>
  );
}


export default NavigationLink;