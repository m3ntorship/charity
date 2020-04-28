import React, { useState, useEffect } from 'react';
import { charityAPI } from '../../clients';
import './styles.css';

export const ContactInfo = () => {
  const [contactData, setContactData] = useState(null);
  const [socialData, setSocialData] = useState(null);

  useEffect(() => {
    charityAPI('/main-contacts')
      .then(({ data }) => {
        setContactData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    charityAPI('/socialmedias')
      .then(({ data }) => {
        setSocialData(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (contactData && socialData) {
    return (
      <div className="flex flex-wrap justify-between items-center mx-0 text-c000">
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

        <div className="contact-section__contacts lg:w-3/4 flex flex-wrap text-sm">
          {contactData.map(({ _id, title, sub_title, icon: { url, name } }) => (
            <div key={_id} className="contact border-right">
              <div className="contact-icon">
                <img className="h-auto" src={url} alt={name} />
              </div>
              <div className="information">
                <a className="block" href={`mailto:${title}`}>
                  {title}
                </a>
                <small className="information-small leading-normal">
                  {sub_title}
                </small>
              </div>
            </div>
          ))}

          {/* <div className="contact border-right">
            <div className="contact-icon">
              <img
                className="h-auto"
                src={contactData.contact.email.icon}
                alt="mail"
              />
            </div>
            <div className="information">
              <a
                className="block"
                href={`mailto:${contactData.contact.email.email_address}`}
              >
                {contactData.contact.email.email_address}
              </a>
              <small className="information-small leading-normal">
                Email address
              </small>
            </div>
          </div>

          <div className="contact border-right">
            <div className="contact-icon">
              <img
                className="h-auto"
                src={contactData.contact.phone.icon}
                alt="phone"
              />
            </div>

            <div className="information">
              <a
                className="block"
                href={`tel:${contactData.contact.phone.phone_number}`}
              >
                {contactData.contact.phone.phone_number}
              </a>
              <small className="information-small">Phone line</small>
            </div>
          </div>

          <div className="contact">
            <div className="contact-icon">
              <img
                className="h-auto"
                src={contactData.contact.location.icon}
                alt="location"
              />
            </div>

            <div className="information">
              <a
                className="block"
                href={contactData.contact.location.location_link}
                target="blank"
              >
                {contactData.contact.location.location_name}
              </a>
              <small className="information-small">Visit us</small>
            </div>
          </div> */}
        </div>
      </div>
    );
  } else {
    return <div>Loading .....</div>;
  }
};
