/* jshint ignore: start */
import React from 'react';
import Heading from '../Heading/index';
import ContactMethod from '../VolunteersContactMethods/ContactMethod';

const data = {
  main_title: 'Have Question?',
  sub_title: 'Contact Now',
  contactMethods: [
    {
      imgUrl:
        'https://s3.m3ntorship.net/charity-cms-dev/location-icon_f9630aee60_8763e5296b.png',
      title: 'Visit Us',
      address: '66 Broklyn Street New York, USA'
    },
    {
      imgUrl:
        'https://s3.m3ntorship.net/charity-cms-dev/email-icon_9436ef3825_63707057b7.png',
      title: 'Email Address',
      address: '66 Broklyn Street New York, USA'
    },
    {
      imgUrl:
        'https://s3.m3ntorship.net/charity-cms-dev/phone-iconpng_11d0269061_fddcc29a57.png',
      title: 'Phone Number',
      address: '66 Broklyn Street New York, USA'
    }
  ]
};
const VolunteersContactSection = () => {
  const { main_title, sub_title, contactMethods } = data;
  debugger;
  const contactList = contactMethods.map((method, index) => {
    return <ContactMethod data={method} key={index} />;
  });

  // const contactList = contactMethods.map((contactMethod, index) => {
  //   return <ContactMethod data={contactMethod} key={index} />;
  // });
  return (
    <div>
      <Heading
        primaryTextColor="dark"
        primaryText={main_title}
        secondaryText={sub_title}
        primaryClassName="text-left"
      />
      <p class="my-16 leading-4 text-base text-c600 md:text-left text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        recusandae!
      </p>
      {contactList}
    </div>
  );
};

export default VolunteersContactSection;
