import React from 'react';
import Heading from '../Heading';
import ContactItemWithIcon from '../ContactItemWithIcon';
import Form from '../FormComponent';
import './style.css';

const OurMission = ({ data }) => {
  const { mainTitle, subTitle, desc } = data;
  return (
    <div className="section__wrapper grid lg:grid-cols-12 grid-cols-1">
      <div className="info__box relative bg-c900 py-12 lg:pt-32 lg:pb-24 row-start-1 col-start-1 col-end-8">
        <img
          className="arrow__img absolute z-20 hidden lg:block"
          src="https://i.ibb.co/2YQzryj/icon.png"
          alt=""
        />
        <div className="container text-center lg:text-left">
          <div className="lg:w-3/4 w-full">
            <Heading
              primaryText={mainTitle}
              secondaryText={subTitle}
              align="left"
            />
            <p className="text-c000">{desc}</p>
          </div>

          <div className="w-3/4 mt-16 lg:ml-0 mx-auto">
            <ContactItemWithIcon data={data} />
          </div>
        </div>
      </div>
      <div className="lg:row-start-1 lg:col-start-7 lg:col-end-11 sm:row-start-3 sm:col-start-1 my-auto relative z-10">
        <Form data={data} />
      </div>
    </div>
  );
};

export default OurMission;
