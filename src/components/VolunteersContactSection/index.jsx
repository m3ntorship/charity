import React from 'react';
import Heading from '../Heading/index';
import ContactMethod from '../VolunteersContactMethods/index';

const VolunteersContactSection = ({ data }) => {
  const { main_title, sub_title, paragraph, contactMethods } = data;
  const contactList = contactMethods.map((method, index) => {
    return <ContactMethod data={method} key={index} />;
  });

  return (
    <div>
      <Heading
        primaryTextColor="dark"
        primaryText={main_title}
        secondaryText={sub_title}
        primaryClassName="md:text-left text-center"
      />
      <p className="my-16 leading-4 text-base text-c600 md:text-left text-center">
        {paragraph}
      </p>
      {contactList}
    </div>
  );
};

export default VolunteersContactSection;
