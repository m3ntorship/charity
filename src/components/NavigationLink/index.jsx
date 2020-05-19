import React from 'react';
import cn from 'classnames'
import './style.css';


const NavigationLink = ({url, title,secondaryClassName})=> {
  return (
    <li className={ cn('text-center m-2 lg:m-4',secondaryClassName)}>
      <a className="navigation__link" href={url}>
        {title}
      </a>
    </li>
  );
}


export default NavigationLink;