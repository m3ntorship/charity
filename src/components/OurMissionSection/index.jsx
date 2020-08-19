import React from 'react';
import Heading from '../Heading';
import ContactItemWithIcon from '../ContactItemWithIcon';
import './style.css';

const OurMission = ({ data }) => {
  const { mainTitle, subTitle, desc, sectionBg } = data;
  return (
    <div className="relative bg-c900 section__wrapper">
      <div className="container grid grid-cols-8 pt-32">
        <div className="col-span-4">
          <Heading
            primaryText={mainTitle}
            secondaryText={subTitle}
            align="left"
          />
          <p className="text-c000">{desc}</p>
          <div className="w-3/4 my-16">
            <ContactItemWithIcon data={data} />
          </div>
        </div>
      </div>
      <div className="section_img">
        <img className="min-h-full" src={sectionBg} alt="" />
      </div>
    </div>
  );
};

export default OurMission;
