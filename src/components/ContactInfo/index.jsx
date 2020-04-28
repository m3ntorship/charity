import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { charityAPI } from '../../clients';
import './styles.css';

export const ContactInfo = () => {
  const [contactData, setContactData] = useState(null);
  const [socialData, setSocialData] = useState(null);

  useEffect(() => {
    Promise.all([
      charityAPI('/main-contacts'),
      charityAPI('/socialmedias')
    ]).then(values => {
      setContactData(values[0].data);
      setSocialData(values[1].data);
    });
  }, []);

  // Dosen't mater witch one of status ... they come synchronicity
  if (contactData) {
    return (
      <div className="flex flex-wrap justify-between items-center mx-0 text-c000 w-full">
        <div className="contact-section__social lg:w-1/4 flex justify-start text-xxs">
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

        <div className="contact-section__contacts lg:w-3/4 flex flex-wrap justify-end text-sm">
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
      </div>
    );
  } else {
    return <div>Loading .....</div>;
  }
};
