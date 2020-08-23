import React from 'react';
import Heading from '../Heading';
import Button from '../ButtonComponent';
import './style.css';

const HeaderSection = () => {
  return (
    <div className="relative bg-c900 grid lg:grid-cols-4 grid-cols-1 lg:p-48">
      <div className="container col-span-3 lg:py-0 py-12 mx-auto lg:ml-0 text-center lg:text-left">
        <h5 className="text-c300 underline">Welcome to Lovims Theme</h5>
        <Heading
          size="xxl"
          primaryText="Discover Non-Profit Chairty Platform"
          primaryClassName="mt-6 lg:text-left text-center"
        />
        <p className="text-c000 text-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime autem
          quis reprehenderit corrupti ipsum minus voluptatibus aut omnis
          mollitia? Doloribus cupiditate excepturi.
        </p>
        <div className="mt-8 lg:mb-0 mb-8">
          <Button
            btnSize="large"
            btnText="View Causes"
            btnTextColor="white"
            bgColor="red"
          />
        </div>
      </div>
      <img
        className="hidden lg:block green__ball w-40 absolute"
        src="https://i.imgur.com/04LyZnm.png"
        alt=""
      />
      <img
        className="hidden lg:block yellow__ball h-32 absolute"
        src="https://i.imgur.com/WifmwSJ.png"
        alt=""
      />
      <img
        className="hidden lg:block red__ball h-32 absolute"
        src="https://i.imgur.com/hrWuYE5.png"
        alt=""
      />
      <img
        className="hidden lg:block blue__ball w-20 absolute"
        src="https://i.imgur.com/zH0VhYK.png"
        alt=""
      />
    </div>
  );
};

export default HeaderSection;
