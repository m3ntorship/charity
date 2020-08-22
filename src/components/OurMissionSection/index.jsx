import React from 'react';
import Heading from '../Heading';
import ContactItemWithIcon from '../ContactItemWithIcon';
import './style.css';

const OurMission = ({ data }) => {
  const { mainTitle, subTitle, desc } = data;
  return (
    <div className="relative bg-c900 section__wrapper">
      <div className="container grid lg:grid-cols-8 sm:grid-cols-1 pt-32 pb-24">
        <div className="lg:col-span-4 text-center lg:text-left">
          <Heading
            primaryText={mainTitle}
            secondaryText={subTitle}
            align="left"
          />
          <p className="text-c000">{desc}</p>
          <div className="w-3/4 mt-16 lg:ml-0 mx-auto ">
            <ContactItemWithIcon data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
