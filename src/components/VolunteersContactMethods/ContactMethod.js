/* jshint ignore: start */
import React from 'react';
import './ContactMethod.css';

const ContactMethod = ({ data }) => {
  const method = data;

  return (
    <div class="contact__method mt-8 flex items-center">
      <a href="/" className="flex-shrink-0 flex items-center">
        <div className="img-container flex items-center justify-center bg-c800 w-20 h-20">
          <img src={method.imgUrl} alt="" />
        </div>
        <div class="ml-7">
          <h6 className="text-base text-c100">{method.title}</h6>
          <p className="text-c600 text-md">{method.address}</p>
        </div>
      </a>
    </div>
  );
};

export default ContactMethod;
