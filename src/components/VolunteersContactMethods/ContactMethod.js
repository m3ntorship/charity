/* jshint ignore: start */
import React from 'react';

const ContactMethod = ({ data }) => {
  const { img_url, title, address } = data;
  return (
    <div class="flex items-center">
      <a href="/" class="flex-shrink-0 flex items-center">
        <div class="img-container flex items-center justify-center bg-c800 w-20 h-20">
          <img src={img_url} alt="" />
        </div>
        <div class="ml-7">
          <h6 class="text-base text-c100">{title}</h6>
          <p class="text-c600 text-md">{address}</p>
        </div>
      </a>
    </div>
  );
};

export default ContactMethod;
