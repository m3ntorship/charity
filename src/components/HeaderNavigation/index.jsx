import React, { useState } from 'react';
import cn from 'classnames';
import './style.css';
import { Logo } from '../Logo';
import NavigationLink from '../NavigationLink';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

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
  const setHeight = useSpring({ height: isOpen ? 0 : 'auto' });
  if (error) {
    return 'Error';
  }
  if (loading) {
    return 'loading';
  }
  return (
    <section className="header-nav py-5 px-0 border-2">
      <div className="container sm:flex sm:justify-between">
        <div className="logo-links-container sm:flex sm:justify-between sm:w-full">
          <div className="flex items-center px-4 py-4 justify-between">
            <div className="w-24">
              <Logo data={logoData} />
            </div>
            <div className="toggle-btn sm:hidden">
              <button
                type="button"
                className="text-gray-600 block"
                onClick={() => {
                  setOpen(!isOpen);
                }}
              >
                {isOpen ? (
                  <i class="fas fa-times"></i>
                ) : (
                  <i class="fas fa-bars"></i>
                )}
              </button>
            </div>
          </div>
          <ul
            className={cn(
              'block sm:flex sm:justify-between sm:items-center sm:ml-10 nav-links',
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
                  className="sm:mx-4 sm:font-bold nav-link"
                />
              ))}
            </Router>
          </ul>
        </div>
        <div className="hidden contacts text-sm mx-6">
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
                        className="block hover:text-c100"
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
