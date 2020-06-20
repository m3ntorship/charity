import React from 'react';
import './styles.css';
import { useCharityAPI } from '../../clients';
import MyLoader from './loader.jsx';

export default function ContactLocations() {
  const { data, loading, dataError } = useCharityAPI('/branch-contacts');

  if (dataError) {
    return <div>Can Not Get Data!</div>;
  }

  if (loading) {
    return (
      <section className="container">
        <div className="address grid lg:grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-2 justify-between box-border">
          <MyLoader />
          <MyLoader />
          <MyLoader />
        </div>
      </section>
    );
  }
  if (data) {
    return (
      <section className="container">
        <div className="address grid lg:grid-cols-3 gap-8 sm:grid-cols-1 md:grid-cols-2 justify-between box-border">
          {data.map(({ city, email, location, phone, id }) => (
            <Location
              city={city}
              email={email}
              location={location}
              phone={phone}
              key={id}
            />
          ))}
        </div>
      </section>
    );
  }
  return <div>Generic Error!</div>;
}

const Location = ({ city, location, email, phone }) => {
  return (
    <div className="container__location p-10">
      <h6 className="location-city text-lg pl-2 text-c000">{city}</h6>

      <div className="flex pt-8 items-center">
        <span className="flex-shrink-0">
          <img
            className="contact-location-icons object-fill object-cover"
            src={location.icon.url}
            alt=""
          />
        </span>

        <p className="location-address pl-4 text-sm leading-normal text-c000">
          {location.info}
        </p>
      </div>

      <div className="flex items-center mt-5">
        <span className="flex-shrink-0">
          <img
            className="contact-location-icons object-cover object-fill"
            src={email.icon.url}
            alt=""
          />
        </span>

        <p className="email-address pl-4 text-c000 text-sm">
          {email.info}
          <br />
          <span className="email-label text-xs text-c700">Email Address</span>
        </p>
      </div>

      <div className="flex items-center mt-5">
        <span className="flex-shrink-0">
          <img
            className="contact-location-icons object-fill object-cover"
            src={phone.icon.url}
            alt=""
          />
        </span>

        <p className="phone-number pl-4 text-sm text-c000">
          {phone.info} <br />
          <span className="phone-label text-c700 text-xs">Phone line</span>
        </p>
      </div>
    </div>
  );
};
