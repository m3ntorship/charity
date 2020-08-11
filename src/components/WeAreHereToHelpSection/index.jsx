import React from 'react';
import Heading from '../Heading';
import './style.css';

const WeAreHereToHelp = ({ data }) => {
  const {
    title,
    desc,
    icon_1,
    icon_2,
    desc_1,
    desc_2,
    sideImg,
    sectionImg,
    sideTitle
  } = data;
  return (
    <div>
      <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 sm:col-gap-8">
        <div class="col-start-1 md:col-end-2 lg:col-end-6">
          <h6 class="text-xl text-c100 font-extrabold leading-tighter text-center md:text-left">
            <Heading
              primaryTextColor="dark"
              primaryText={title}
              primaryClassName="md:text-left text-center"
            />
          </h6>
          <p class="mt-12 text-base text-c600 md:text-left text-center">
            {desc}
          </p>
        </div>
        <div class="col-start-7 col-end-12 row-start-1 row-end-4 z-10 hidden lg:block">
          <div class="character__container h-full">
            <img
              class="object-cover w-full min-h-full"
              src={sectionImg}
              alt=""
            />
          </div>
        </div>
        <div class="col-start-11 col-end-13 row-start-1 row-end-4 z-10 hidden lg:block">
          <div class="homesection__greenbox bg-c100">
            <img
              class="object-cover w-full h-full"
              src="/static/media/steve-johnson.jpg"
              alt=""
            />
          </div>
          <div class="homesection__redbox homepage__section-text bg-c200 text-c000 -ml-8 flex items-center justify-center">
            <h6 class="text-3xl">{sideTitle}</h6>
          </div>
        </div>
        <div class="bg-c800 w-full lg:col-start-1 lg:col-end-13 md:col-start-2 lg:row-start-2 md:row-start-1 overlay__layer px-6 lg:px-0 mt-8 lg:mt-8 sm:mt-0">
          <div class="w-full lg:w-2/5 flex flex-col justify-center items-center">
            <div class="flex justify-between items-center mt-10">
              <p class="text-c100 w-3/4 text-left">{desc_1}</p>
              <img src={icon_1} alt="" />
            </div>
            <div class="flex justify-between items-center my-10">
              <div>
                <img src={icon_2} />
              </div>
              <p class="text-c100 w-3/4">{desc_2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreHereToHelp;
