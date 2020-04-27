import React, { useState, useEffect } from 'react';
// import { charityAPI } from '../../clients';

/*
import React from 'react';
// import { charityAPI } from '../clients';

const charityAPI = () =>
  Promise.resolve({
    data: [
      { name: 'ahmed' },
      { name: 'tramsi' },
      { name: 'nag3awy' },
      { name: 'hassan' }
    ]
  });

export default class Temp extends React.Component {
  state = { names: [], namesError: false };

  componentDidMount() {
    charityAPI('/names')
      .then(({ data: names }) => {
        this.setState({ names });
      })
      .catch(error => {});
  }
  render() {
    return this.state.names.map(({ name }) => <div key={name}>{name}</div>);
  }
}
*/

const contactInfoData = {
  social_media_links: {
    facebook: '#',
    twitter: '#',
    paintrest: '#',
    instagram: '#'
  },

  contact: {
    email_adress: 'needhelp@lovims.com',
    phone_number: '666 888 6666',
    location: {
      location_name: '66 Broklyn Street USA',
      location_link:
        'href="https://www.google.com/maps/place/66+Brooklyn+Ave,+Brooklyn,+NY+11216,+USA/@40.6817649,-73.9623869,13.75z/data=!4m5!3m4!1s0x89c25b84547857e3:0x2e1b27396ef429f!8m2!3d40.677763!4d-73.9444439"'
    }
  }
};

const charityAPI = () =>
  Promise.resolve({
    data: contactInfoData
  });

export const ContactInfo = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [contactLinks, setContactLinks] = useState({});

  useEffect(() => {
    charityAPI()
      .then(({ data }) => {
        setData(data);
        setContactLinks({
          emailLink: `mailto:${data.contact.email_adress}`,
          callLink: `tel:${data.contact.phone_number}`
        });
      })
      .catch(error => {});
  }, []);

  if (data) {
    return (
      <div className="contact-section__contacts lg:w-3/4 flex flex-wrap justify-end text-sm">
        <div className="contact border-right">
          <div className="contact-icon">
            <img
              className="h-auto"
              src="assets/img/contact-footer/mail.png"
              alt="mail"
            />
          </div>
          <div className="information">
            <a className="block" href={contactLinks.emailLink}>
              {data.contact.email_adress}
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
              src="assets/img/contact-footer/phone.png"
              alt="phone"
            />
          </div>

          <div className="information">
            <a className="block" href={contactLinks.callLink}>
              {data.contact.phone_number}
            </a>
            <small className="information-small">Phone line</small>
          </div>
        </div>

        <div className="contact">
          <div className="contact-icon">
            <img
              className="h-auto"
              src="assets/img/contact-footer/location.png"
              alt="location"
            />
          </div>

          <div className="information">
            <a
              className="block"
              href={data.contact.location.location_link}
              target="blank"
            >
              {data.contact.location.location_name}
            </a>
            <small className="information-small">Visit us</small>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loadinggggggggggg</div>;
  }
};
