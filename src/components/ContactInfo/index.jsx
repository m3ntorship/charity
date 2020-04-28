import React, { useState, useEffect } from 'react';
import { charityAPI } from '../../clients';
import './styles.css';
import location from './img/location.png';
import mail from './img/mail.png';
import phone from './img/phone.png';

const contactInfoData = {
  social_media_links: {
    facebook: 'http//:www.facebook.com',
    twitter: 'http//:www.twitter.com',
    pinterest: 'http//:www.pinterest.com',
    instagram: 'http//:www.instagram.com'
  },

  contact: {
    email: {
      email_address: 'needhelp@lovims.com',
      icon: mail
    },
    phone: {
      phone_number: '666 888 6666',
      icon: phone
    },
    location: {
      location_name: '66 Broklyn Street USA',
      icon: location,
      location_link:
        'href="https://www.google.com/maps/place/66+Brooklyn+Ave,+Brooklyn,+NY+11216,+USA/@40.6817649,-73.9623869,13.75z/data=!4m5!3m4!1s0x89c25b84547857e3:0x2e1b27396ef429f!8m2!3d40.677763!4d-73.9444439"'
    }
  }
};
const charityContactAPI = () =>
  Promise.resolve({
    data: contactInfoData
  });

export const ContactInfo = () => {
  const [contactData, setContactData] = useState(null);
  const [socialtData, setSocialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    charityContactAPI('/contact-info')
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
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  });

  if (contactData) {
    return (
      <div className="flex flex-wrap justify-between items-center mx-0 text-c000">
        {/* This Component need to be in map loop */}
        <div className="contact-section__social lg:w-1/4 flex justify-start text-xxs">
          <div className="contact-section__social-icon hover:bg-c200 ml-0">
            <a
              className="full-width-click"
              href={contactData.social_media_links.twitter}
              target="blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        <div className="contact-section__contacts lg:w-3/4 flex flex-wrap text-sm">
          <div className="contact border-right">
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
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading .....</div>;
  }
};
