import React from 'react';
import Heading from '../Heading';
import Button from '../ButtonComponent';
import './style.css';

const HeaderSection = ({ data }) => {
  const {
    headerDesc,
    title,
    subTitle,
    btnTitle,
    greenBall,
    yelloBall,
    redBall,
    blueBall
  } = data;
  return (
    <div className="relative bg-c900 grid lg:grid-cols-4 grid-cols-1 lg:p-48">
      <div className="container col-span-3 lg:py-0 py-12 mx-auto lg:ml-0 text-center lg:text-left">
        <h5 className="text-c300 underline">{subTitle}</h5>
        <Heading
          size="xxl"
          primaryText={title}
          primaryClassName="mt-6 lg:text-left text-center"
        />
        <p className="text-c000 text-md">{headerDesc}</p>
        <div className="mt-8 lg:mb-0 mb-8">
          <Button
            btnSize="large"
            btnText={btnTitle}
            btnTextColor="white"
            bgColor="red"
          />
        </div>
      </div>
      <img
        className="hidden lg:block green__ball w-40 absolute"
        src={greenBall}
        alt=""
      />
      <img
        className="hidden lg:block yellow__ball h-32 absolute"
        src={yelloBall}
        alt=""
      />
      <img
        className="hidden lg:block red__ball h-32 absolute"
        src={redBall}
        alt=""
      />
      <img
        className="hidden lg:block blue__ball w-20 absolute"
        src={blueBall}
        alt=""
      />
    </div>
  );
};

export default HeaderSection;
