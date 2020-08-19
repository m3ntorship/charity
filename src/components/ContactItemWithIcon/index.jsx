import React from 'react';
import cn from 'classnames';
import './style.css';

const ContactItemWithIcon = ({ textColor, data }) => {
  const { contactIcon, contactTitle, contactInfo } = data;
  return (
    <div className=" py-5 lg:flex items-center justify-between sm:grid sm:grid-rows-2">
      <div className="contactItem__bg w-20 h-20 ">
        <img className=" pt-6 pl-6" src={contactIcon} alt="" />
      </div>
      <div
        className={cn({
          'text-c000': !textColor || textColor === 'white',
          'text-c100': textColor === 'black'
        })}
      >
        <span className="text-sm">{contactTitle}</span>
        <div className="text-large">{contactInfo}</div>
      </div>
    </div>
  );
};

export default ContactItemWithIcon;
