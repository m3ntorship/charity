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
          <div className="flex justify-around items-center mx-0 text-c000">
            {/* <div className="flex flex-wrap justify-between items-center mx-0 text-c000 w-full"> */}
              <div className="contact-section__social  flex justify-start text-xxs">
                {socialData.map(({ _id, url, fontawesome_icons }) => (
                  <div
                    key={_id}
                    className="contact-section__social-icon hover:bg-c200 ml-0"
                  >
                    <a className="full-width-click" href={url} target="blank">
                      <i className={fontawesome_icons}></i>
                    </a>
                  </div>
                ))}
              </div>

              <div className="contact-section__contacts  flex flex-wrap justify-end text-sm">
                {contactData.map(
                  ({ _id, title, sub_title, icon: { url, name } }, index) => {
                    const isLast = index === contactData.length - 1;
                    return (
                      <div
                        key={_id}
                        className={cn('contact', {
                          'border-right': !isLast
                        })}
                      >
                        <div className="contact-icon">
                          <img className="h-auto" src={url} alt={name} />
                        </div>
                        <div className="information">
                          <a className="block" href={url}>
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
            {/* </div> */}
          </div>
        </div>
    </section>
  );
};
