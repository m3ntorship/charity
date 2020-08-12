import React from 'react';
import Heading from '../Heading';
import ContactMethod from '../VolunteersContactMethods';

const OurMission = ({ data }) => {
  const { main_title, sub_title, desc } = data;
  return (
    <div className="bg-c900">
      <div className="container grid grid-cols-8 pt-32">
        <div className="col-span-4">
          <Heading
            primaryText={main_title}
            secondaryText={sub_title}
            align="center lg:left"
          />
          <p className="text-c000">{desc}</p>
          <div className="mb-16">
            <ContactMethod data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
