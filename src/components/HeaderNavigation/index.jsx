import React, { useState } from 'react';
import cn from 'classnames';
import './style.css';
import { Logo } from '../Logo';
import NavigationLink from '../NavigationLink';
import { BrowserRouter as Router } from 'react-router-dom';

const HeaderNavigationContainer = () => {
  return <HeaderNavigation />;
};

const HeaderNavigation = ({
  logoData,
  contactData,
  pagesData,
  loading,
  error
}) => {
  const [isOpen, setOpen] = useState(false);
  if (error) {
    return 'Error';
  }
  if (loading) {
    return 'loading';
  }
  return (
    <section className="header-nav p-0 border-2">
      <div className="container sm:flex">
        <div className="flex items-center px-4 py-4 justify-between">
          <div className="w-24">
            <Logo data={logoData} />
          </div>
          <div className="toggle-btn sm:hidden">
            <button
              type="button"
              className="text-gray-600 bg-c300 block"
              onClick={() => {
                setOpen(!isOpen);
              }}
            >
              {isOpen ? 'Close' : 'Open'}
            </button>
          </div>
        </div>
        <ul
          className={cn(
            'block sm:flex sm:justify-between sm:items-center sm:ml-10',
            {
              hidden: !isOpen
            }
          )}
        >
          <Router>
            {pagesData.map(page => (
              <NavigationLink
                url={page.link.url}
                text={page.link.text}
                className="sm:mx-4 sm:font-bold"
              />
            ))}
          </Router>
        </ul>
        <div className="contacts text-sm mx-6">
          {contactData
            .filter(
              contact =>
                contact.sub_title === 'Email address' ||
                contact.sub_title === 'Phone line'
            )
            .map(
              ({
                _id,
                title,
                url,
                sub_title,
                icon: { url: iconUrl, name: IconName }
              }) => {
                return (
                  <div key={_id} className="contact mx-5">
                    <div className="contact-icon">
                      <img className="h-auto" src={iconUrl} alt={IconName} />
                    </div>
                    <div className="information">
                      <a
                        className="block"
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                      <small className="information-small leading-normal">
                        {sub_title}
                      </small>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default HeaderNavigation;
