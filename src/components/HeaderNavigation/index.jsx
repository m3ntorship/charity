import React, { useState } from 'react';
import cn from 'classnames';
import './style.css';
import { LogoContainer } from '../../containers/layout/logo';
import { Logo } from '../../components/Logo';
import NavigationLink from '../NavigationLink';
import ContentLoader from 'react-content-loader';
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
  if (pagesError || contactError) {
    return (
      <div>
        <h2>Couldn't Fetch Navbar Data </h2>
      </div>
    );
  }

  if (pagesLoading || contactLoading) {
    return (
      <div className="py-5 px-20 flex justify-between align-center">
        <div className="flex">
          <div>
            {' '}
            <Logo loading={true} />{' '}
          </div>
          <div className="hidden sm:flex sm:justify-between sm:items-center sm:ml-10 nav-links">
            {' '}
            <LinksLoader count={5} />{' '}
          </div>
        </div>
        <div className="hidden lg:flex">
          {' '}
          <ContactLoader count={2} />{' '}
        </div>
      </div>
    );
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

const LinksLoader = ({ count }) => {
  return Array(count)
    .fill(1)
    .map((val, index) => (
      <ContentLoader
        key={index}
        speed={2}
        width={60}
        height={40}
        viewBox="0 0 60 40"
        backgroundColor="#f5f5f5"
        foregroundColor="#f5f5f5"
      >
        <rect x="10" y="10" rx="0" ry="0" width="70" height="15" />
      </ContentLoader>
    ));
};

const ContactLoader = ({ count }) => {
  return Array(count)
    .fill(1)
    .map((val, index) => {
      return (
        <ContentLoader
          className="inline-block"
          key={index}
          speed={2}
          width={170}
          height={70}
          viewBox="0 0 170 70"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="21" y="0" rx="0" ry="0" width="150" height="70" />
        </ContentLoader>
      );
    });
};
