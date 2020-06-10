import React, { useState } from 'react';
import cn from 'classnames';
import './style.css';
import { LogoContainer } from '../../containers/layout/logo';
import NavigationLink from '../NavigationLink';
import { Link } from 'react-router-dom';

const HeaderNavigation = ({
  pagesData,
  pagesLoading,
  pagesError,
  contactData,
  contactLoading,
  contactError
}) => {
  const [isOpen, setOpen] = useState(false);
  if ((pagesError, contactError)) {
    return 'Error';
  }
  if (pagesLoading || contactLoading) {
    return 'loading';
  }
  return (
    <section className="header-nav py-5 px-0">
      <div className="container sm:flex sm:justify-between">
        <div className="logo-links-container sm:flex sm:justify-between sm:w-full">
          <div className="flex items-center px-4 py-4 justify-between">
            <div className="w-24">
              <Link to="/">
                <LogoContainer />
              </Link>
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
                  <i className="fas fa-times"></i>
                ) : (
                  <i className="fas fa-bars"></i>
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
            {pagesData
              .filter(page => page.show_in_navigation)
              .map(page => (
                <NavigationLink
                  key={page.id}
                  url={page.link.url}
                  text={page.link.text}
                  className="sm:mx-4 sm:font-bold nav-link"
                />
              ))}
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
