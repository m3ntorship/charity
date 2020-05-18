import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { charityAPI } from '../../clients';
import './styles.css';

export const ContactInfoContainer = () => {
  const [contactData, setContactData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      charityAPI('/main-contacts').then(({ data }) => data),
      charityAPI('/socialmedias').then(({ data }) => data)
    ])
      .then(([contacts, social]) => {
        setContactData(contacts);
        setSocialData(social);
        setError(false);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <ContactInfo
      contactData={contactData}
      socialData={socialData}
      error={error}
      errorMessage={errorMessage}
      loading={loading}
    />
  );
};

export const ContactInfo = ({
  socialData,
  contactData,
  socialError,
  contactError,
  socialErrorMessage,
  contactErrorMessage,
  socialLoading,
  contactLoading
}) => {
  return (
    <section className="contact-section py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-around items-center mx-0 text-c000">
          <Socialmedia
            socialData={socialData}
            socialLoading={socialLoading}
            socialError={socialError}
            socialErrorMessage={socialErrorMessage}
          />
          <Contact
            contactData={contactData}
            contactLoading={contactLoading}
            contactError={contactError}
            contactErrorMessage={contactErrorMessage}
          />
        </div>
      </div>
    </section>
  );
};

const Socialmedia = ({
  socialData,
  socialLoading,
  socialError,
  socialErrorMessage
}) => {
  if (socialError) {
    return (
      <div className="bg-c200 py-5 text-c000">
        <h2>Sorry we have got an error : {socialErrorMessage}</h2>
      </div>
    );
  }

  if (socialLoading) {
    <div>Loading....</div>;
  }

  return (
    <div className="contact-section__social flex justify-start text-xxs mb-6 md:mb-0">
      {socialData.map(({ _id, url, fontawesome_icons }) => (
        <div
          key={_id}
          className="contact-section__social-icon hover:bg-c200 ml-0"
        >
          <a
            className="full-width-click"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={fontawesome_icons}></i>
          </a>
        </div>
      ))}
    </div>
  );
};

const Contact = ({
  contactData,
  contactLoading,
  contactError,
  contactErrorMessage
}) => {
  if (contactError) {
    <div className="bg-c200 py-5 text-c000">
      <h2>Sorry we have got an error : {contactErrorMessage}</h2>
    </div>;
  }

  if (contactLoading) {
    <div>Loading...</div>;
  }

  return (
    <div className="contact-section__contacts flex flex-no-wrap flex-col lg:flex-row justify-end text-sm mx-6">
      {contactData.map(
        (
          { _id, title, url, sub_title, icon: { url: iconUrl, name } },
          index
        ) => {
          const isLast = index === contactData.length - 1;
          return (
            <div
              key={_id}
              className={cn(
                'contact',
                'my-1',
                'lg:my-0',
                'w-64',
                'mt-2',
                'md:mt-0',
                {
                  'border-right': !isLast
                }
              )}
            >
              <div className="contact-icon">
                <img className="h-auto" src={iconUrl} alt={name} />
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
  );
};
