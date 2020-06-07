import React from 'react';
import { useSelector } from 'react-redux';
import { ContactInfo } from '../../components/ContactInfo';

export const ContactInfoContainer = () => {
  const {
    data: contactData,
    error: contactError,
    loading: contactLoading
  } = useSelector(store => store.contact);
  const {
    data: socialData,
    error: socialError,
    loading: socialLoading
  } = useSelector(store => store.social);
  return (
    <ContactInfo
      contactData={contactData}
      socialData={socialData}
      socialError={socialError}
      contactError={contactError}
      socialLoading={socialLoading}
      contactLoading={contactLoading}
    />
  );
};
