import React from 'react';
import Heading from '../Heading';
import Button from '../ButtonComponent';

const VolunteersSectionIntro = () => {
  return (
    <div>
      <Heading
        size="xxl"
        primaryTextColor="dark"
        primaryText="Our"
        primaryClassName="mt-6 lg:text-left text-center"
        secondaryText="Volunteers"
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum
        maiores veritatis perspiciatis autem nisi officiis itaque corporis
        nostrum amet.
      </p>

      <Button btnText="Join Our Team" btnTextColor="dark" size="medium" />
    </div>
  );
};

export default VolunteersSectionIntro;
