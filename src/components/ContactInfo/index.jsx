import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { charityAPI } from '../../clients';
import './styles.css';

export const ContactInfo = () => {
  const [contactData, setContactData] = useState(null);
  const [socialData, setSocialData] = useState(null);
  const [fetchingDataError, setFetchingDataError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      charityAPI('/main-contacts').then(({ data }) => data),
      charityAPI('/socialmedias').then(({ data }) => data)
    ])
      .then(([contacts, social]) => {
        setContactData(contacts);
        setSocialData(social);
        setFetchingDataError(false);
        setLoading(false);
      })
      .catch(error => {
        setFetchingDataError(error);
        setLoading(false);
      });
  }, []);

  if (fetchingDataError) {
    return (
      <div>{`${fetchingDataError.message}: Error while fetching socialmedia or contacts`}</div>
    );
  }

  if (loading) {
    return <div>Loading .....</div>;
  }

  return (
    <section className="contact-section py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-around items-center mx-0 text-c000">
          <div className="contact-section__social flex justify-start text-xxs mb-6">
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

          <div className="contact-section__contacts flex flex-wrap flex-col lg:flex-row justify-end text-sm mx-6">
            {contactData.map(({ _id, title, url, sub_title, icon }, index) => {
              const isLast = index === contactData.length - 1;
              return (
                <div
                  key={_id}
                  className={cn('contact', 'my-1', 'lg:my-0', {
                    'border-right': !isLast
                  })}
                >
                  <div className="contact-icon">
                    <img className="h-auto" src={icon.url} alt={icon.name} />
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
