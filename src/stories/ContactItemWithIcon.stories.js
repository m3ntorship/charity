import React from 'react';
import ContactItemWithIcon from '../components/ContactItemWithIcon';

export default {
  title: 'Contact Item With Icon',
  component: ContactItemWithIcon
};

const data = {
  contactIcon: 'https://i.imgur.com/1nEDxnz.png',
  ContactTitle: 'Call Us Anytime',
  contactInfo: '666 - 888 - 666'
};

export const contactItem = () => {
  return <ContactItemWithIcon textColor="white" data={data} />;
};
