import React from 'react';
import './styles.css';
import cn from 'classnames';
import ContentLoader from 'react-content-loader';

export const ContactInfo = ({
  socialData,
  contactData,
  socialError,
  contactError,
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
          />
          <Contact
            contactData={contactData}
            contactLoading={contactLoading}
            contactError={contactError}
          />
        </div>
      </div>
    </section>
  );
};

const Socialmedia = ({ socialData, socialLoading, socialError }) => {
  if (socialError) {
    return (
      <div className="bg-c200 p-2 text-c000">
        <h2>Sorry we have got an error</h2>
      </div>
    );
  }

  if (socialLoading) {
    return (
      <div className="contact-section__social flex justify-start text-xxs mb-6 md:mb-0">
        <CircleLoading count={3} />
      </div>
    );
  }

  return (
    <div className="contact-section__social flex justify-start text-xxs mb-6 md:mb-0">
      {socialData.map(({ id, url, fontawesome_icons }) => (
        <div
          key={id}
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

const Contact = ({ contactData, contactLoading, contactError }) => {
  if (contactError) {
    return (
      <div className="bg-c200 p-2 text-c000">
        <h2>Sorry we have got an error</h2>
      </div>
    );
  }

  if (contactLoading) {
    return (
      <div className="contact-section__contacts flex flex-no-wrap flex-col lg:flex-row justify-end text-sm mx-6">
        <ContactLoader count={3} />
      </div>
    );
  }

  return (
    <div className="contact-section__contacts flex flex-no-wrap flex-col lg:flex-row justify-end text-sm mx-6">
      {contactData.map(
        (
          {
            _id,
            title,
            url,
            sub_title,
            icon: { url: iconUrl, name: IconName }
          },
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
                <img className="h-auto" src={iconUrl} alt={IconName} />
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

const CircleLoading = ({ count }) => {
  return Array(count)
    .fill(1)
    .map((val, index) => (
      <ContentLoader
        key={index}
        speed={2}
        width={50}
        height={50}
        viewBox="0 0 100 100"
        backgroundColor="#f5f5f5"
        foregroundColor="#f5f5f5"
      >
        <circle cx="40" cy="40" r="33" />
      </ContentLoader>
    ));
};

const ContactLoader = ({ count }) => {
  return Array(count)
    .fill(1)
    .map((val, index) => (
      <ContentLoader
        key={index}
        speed={2}
        width={200}
        height={60}
        viewBox="0 0 200 60"
        backgroundColor="#f5f5f5"
        foregroundColor="#f5f5f5"
      >
        <circle cx="46" cy="26" r="21" />
        <rect x="74" y="10" rx="0" ry="0" width="163" height="8" />
        <rect x="80" y="30" rx="0" ry="0" width="94" height="8" />
      </ContentLoader>
    ));
};
